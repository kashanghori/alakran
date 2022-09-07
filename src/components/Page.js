import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import * as userApi from "../api/user-api";
import * as dictionaryApi from "../api/dictionary-api";
import { getCookie, setCookie } from "../utils/cookies";
import { PageContent, LoginDialog, SignUpDialog } from "../components";

const Page = ({ classes, children, render, otherPages }) => {
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie("access_token"));
  const [loginError, setLoginError] = useState("");
  const [signUpError, setSignUpError] = useState(undefined);
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const [countryList, setCountryList] = useState([]);

  async function getCountryList() {
    setCountryList([]);
    const result = await dictionaryApi.countries();

    setCountryList(
      result.map(row => ({
        title: row["name"],
        value: row["code"]
      }))
    );
  }

  const [currencyList, setCurrencyList] = useState([]);

  async function getCurrencyList() {
    setCurrencyList([]);
    const result = await dictionaryApi.currencies();

    setCurrencyList(
      result.map(row => ({
        title: row["name"],
        value: row["code"]
      }))
    );
  }

  const [userData, setUserData] = useState({
    username: "",
    countryCode: "",
    zipCode: "",
    city: "",
    state: "",
    street: "",
    building: "",
    flat: "",
    phone: "",
    contactPerson: "",
    contactPhone: "",
    contactEMail: "",
    trn: "",
    currencyCode: ""
  });

  async function getUserData() {
    setUserData({
      username: "",
      countryCode: "",
      zipCode: "",
      city: "",
      state: "",
      street: "",
      building: "",
      flat: "",
      phone: "",
      contactPerson: "",
      contactPhone: "",
      contactEMail: "",
      trn: "",
      currencyCode: ""
    });

    const result = await userApi.getData();

    if (result !== null && result.length !== 0) {
      setCookie("currency", result[0].currencyCode);

      setUserData({
        username: result[0].username,
        countryCode: result[0].countryCode,
        zipCode: result[0].zipCode,
        city: result[0].city,
        state: result[0].state,
        street: result[0].street,
        building: result[0].building,
        flat: result[0].flat,
        phone: result[0].phone,
        contactPerson: result[0].contactPerson,
        contactPhone: result[0].contactPhone,
        contactEMail: result[0].contactEMail,
        trn: result[0].trn,
        currencyCode: result[0].currencyCode
      });
    }
  }

  useEffect(() => {
    const checkLogin = setInterval(
      () =>
        isLoggedIn !== !!getCookie("access_token") &&
        setIsLoggedIn(!isLoggedIn),
      500
    );

    try {
      getUserData();
      //getCountryList();
      //getCurrencyList();
    } catch (error) {
      // silence
    }

    return () => clearInterval(checkLogin);
  }, [isLoggedIn]);

  function handleLoginDialogClose() {
    setLoginDialogOpen(false);
  }

  function handleLoginDialogOpen() {
    setLoginDialogOpen(true);
  }

  async function handleLogin(email, password) {
    try {
      setSubmitting(true);
      await userApi.login(email, password);
      setLoginDialogOpen(false);
      setSubmitting(false);
    } catch (error) {
      setLoginError(error.message);
      setSubmitting(false);
    }
  }

  async function handleSignUp(user) {
    try {
      setSubmitting(true);
      await userApi.signUp(user);
      setSignUpDialogOpen(false);
      setSubmitting(false);
    } catch (error) {
      setSignUpError(error);
      setSubmitting(false);
    }
  }

  function handleSignUpDialogClose() {
    setSignUpDialogOpen(false);
  }

  function handleSignUpDialogOpen() {
    setSignUpDialogOpen(true);
  }

  async function handleLogout() {
    try {
      await userApi.logout();
    } catch (error) {
      // empty
    }
  }

  async function handlePasswordReset(email) {
    try {
      await userApi.reset(email);
      setPasswordReset(true);
    } catch (err) {
      setPassResetError(err.message);
    }
  }

  return (
    <div className={classes.page}>
      {/* <PageHeader
        companyName={window.COMPANY_NAME}
        companyAddress={window.COMPANY_ADDRESS}
        isLoggedIn={isLoggedIn}
        onLogin={handleLoginDialogOpen}
        onSignUp={handleSignUpDialogOpen}
        onLogout={handleLogout}
      /> */}
      {/* <PageTabs /> */}
      <PageContent otherPages={otherPages}>
        {render ? render({ isLoggedIn }) : children}
      </PageContent>
      {/* <PageFooter /> */}
      {isLoginDialogOpen && (
        <LoginDialog
          error={loginError || passResetError}
          isSubmitting={isSubmitting}
          isPasswordReset={isPasswordReset}
          onClose={handleLoginDialogClose}
          onLogin={handleLogin}
          onPasswordReset={handlePasswordReset}
        />
      )}
      {isSignUpDialogOpen && (
        <SignUpDialog
          error={signUpError}
          isSubmitting={isSubmitting}
          onClose={handleSignUpDialogClose}
          onSubmit={handleSignUp}
        />
      )}
    </div>
  );
};

const styles = theme => ({
  page: {
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    minHeight: "100vh",
    [theme.breakpoints.up("lg")]: {
      width: "100%",
      minHeight: "100vh",
      height: "100%"
    }
  }
});

export default withStyles(styles)(Page);
