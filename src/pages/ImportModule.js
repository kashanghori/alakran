import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { SignUpDialog, LoginDialog } from "../components";
import * as userApi from "../api/user-api";
import SlickSider from "../components/SlickSlider";
import HeaderNav from "../components/HeaderNav";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

import { Typography } from "@material-ui/core";

const LandingPage = ({ classes }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const [values, setValues] = React.useState({
    label: "",
    age: "",
    file: ""
  });

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });
  const disabled = isSubmitting || !credentials.email || !credentials.password;
  const openFileDialog = useRef();
  const [isFileUploading, setFileUploading] = useState(false);
  const [progress, setProgress] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {}, []);

  function handleSignUpDialogClose() {
    setSignUpDialogOpen(false);
  }

  function handleSignUpDialogOpen() {
    setSignUpDialogOpen(true);
  }

  function handleLoginDialogClose() {
    setLoginDialogOpen(false);
  }

  function handleLoginDialogOpen() {
    setLoginDialogOpen(true);
  }
  function handleFieldChange(event) {
    const { target } = event;
    setCredentials({ ...credentials, [target.name]: target.value });
  }

  async function handleLogin(email, password) {
    console.log("asdasd");
    setIsLoggedIn(!isLoggedIn);
    // try {
    //     setSubmitting(true);
    //     await userApi.login(email, password);
    //     setLoginDialogOpen(false);
    //     setSubmitting(false);
    // } catch (error) {
    //     setLoginError(error.message);
    //     setSubmitting(false);
    // }
  }

  async function handlePasswordReset(email) {
    try {
      await userApi.reset(email);
      setPasswordReset(true);
    } catch (err) {
      setPassResetError(err.message);
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
  const handleChange = name => event => {
    console.log(event.target.value);
    setValues({ ...values, [name]: event.target.value });
  };
  const handleFileUpload = e => {
    setFileUploading(true);
    setProgress(true);
    const file = e.target.files[0];
    setValues({ ...values, ["file"]: file.name });
    console.log(file);
    setFileUploading(false);
  };
  function handleFileOpen() {
    openFileDialog.current.click();
  }

  useEffect(() => {
    handleLoginDialogOpen();
  }, []);

  return (
    <>
      <div id="wrapper" className="wrapper-fluid banners-effect-5">
        <HeaderNav isAdmin={true} />
        <div className="main-container">
          <div id="content">
            <div className="content-main-w" id="logovalue">
              {isLoggedIn ? (
                <div className="import-file-container">
                  <form className={"file-form"} noValidate autoComplete="off">
                    <Typography className={classes.loginText}>
                      Upload your Listing File Here
                    </Typography>
                    <TextField
                      id="outlined-name"
                      label="Label"
                      className={"text-field"}
                      value={values.label}
                      onChange={handleChange("label")}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      id="outlined-name"
                      label="File"
                      className={"text-field"}
                      value={values.file}
                      margin="normal"
                      variant="outlined"
                    />
                    <Button
                      disabled={isFileUploading}
                      // className={classes.leftButton/}
                      variant="contained"
                      onClick={handleFileOpen}
                    >
                      {t("Choose File")}
                    </Button>
                    <input
                      ref={openFileDialog}
                      type="file"
                      hidden
                      style={{ height: 0, width: 0 }}
                      accept=".xlsx"
                      onChange={handleFileUpload}
                    />
                    <Button
                      className={classes.rightButton}
                      variant="contained"
                      component="a"
                      href="/quote_template.xlsx"
                      download
                    >
                      {t("template")}
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="login-container">
                  {/* {!!error && (
                                    <Chip
                                        className={classes.errorChip}
                                        color="secondary"
                                        icon={<ErrorIcon />}
                                        label={error}
                                    />
                                )} */}

                  <form className={classes.LoginForm}>
                    <Typography className={classes.loginText}>
                      Please Login to Continue
                    </Typography>
                    <TextField
                      name="email"
                      type="email"
                      autoComplete="current-email"
                      className={classes.emailTextField}
                      variant="outlined"
                      placeholder={t("email").toUpperCase()}
                      margin="normal"
                      fullWidth
                      value={credentials.email}
                      onChange={handleFieldChange}
                    />
                    <TextField
                      name="password"
                      className={classes.textField}
                      type="password"
                      autoComplete="current-password"
                      variant="outlined"
                      placeholder={t("password").toUpperCase()}
                      margin="normal"
                      fullWidth
                      value={credentials.password}
                      onChange={handleFieldChange}
                    />

                    <Button
                      className={classes.button}
                      classes={{
                        contained: classes.buttonContained
                      }}
                      variant="contained"
                      disabled={disabled}
                      onClick={handleLogin}
                    >
                      {t("log_in")}
                    </Button>
                  </form>
                </div>
              )}

              <div className="container">
                <SlickSider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer-container typefooter-5">
        <div className="container"></div>
        <div className="row-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <ul className="footer_menu" style={{ display: "flex" }}>
                  <li style={{ padding: "10px" }}>
                    <Link to="/contact-us" style={{ color: "white" }}>
                      {t("contact_us")}
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}>
                    <Link to="/app" style={{ color: "white" }}>
                      {t("home")}
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}>
                    <Link to="/about-us" style={{ color: "white" }}>
                      {t("about_us")}
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}>
                    <Link to="/privacy" style={{ color: "white" }}>
                      {" "}
                      {t("privacy_policy")}
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}>
                    <a style={{ color: "white" }} href="tel:+971551081965">
                      {t("contact_number")}
                    </a>
                  </li>
                </ul>
                <p
                  className="footer_menu"
                  style={{
                    color: "white",
                    fontSize: "12px",
                    padding: "10px",
                    margin: "-5px"
                  }}
                >
                  © 2021 Al Arkan General Trading FZE. All rights reserved.
                  Designed by{" "}
                  <a
                    style={{ color: "white" }}
                    href="https://www.modiantweb.com/"
                    target="_blank"
                  >
                    Modiant Web
                  </a>
                </p>
              </div>
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-socials">
                <div className="socials-w" style={{ paddingLeft: "40px" }}>
                  <h4 style={{ color: "white" }}>{t("follow_us_by")}</h4>
                  <ul className="socials">
                    <li className="facebook">
                      <a
                        href="https://www.facebook.com/AlArkanGT/?ref=pages_you_manage"
                        target="_blank"
                      >
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="linkedin">
                      <a
                        href="https://www.linkedin.com/company/al-arkan"
                        target="_blank"
                      >
                        <i className="fa fa-linkedin" />
                      </a>
                    </li>
                    <li className="instagram">
                      <a
                        href="https://www.instagram.com/alarkangt/"
                        target="_blank"
                      >
                        <i className="fa fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="back-to-top">
          <i className="fa fa-angle-up" />
        </div>
      </footer>
    </>
  );
};
const styles = theme => {
  const colors = theme.palette.custom.searchPage;
  const searchContainer = {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.tabSelectedBackground,
    height: "72px",
    minHeight: "72px",
    marginBottom: theme.spacing.unit,
    padding: `0 ${theme.spacing.unit}px`
  };
  return {
    tabs: {
      minHeight: 40
    },
    tabRoot: {
      backgroundColor: colors.tabBackground,
      opacity: 1,
      minHeight: 40
    },
    tabSelected: {
      backgroundColor: colors.tabSelectedBackground,
      color: "#fff"
    },
    searchContainer: {
      ...searchContainer,
      justifyContent: "center"
    },
    searchContainerByFile: {
      ...searchContainer,
      justifyContent: "space-between"
    },
    deliveryTermContainer: {
      flex: "1 0 0px",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing.unit
    },
    deliveryTermLabel: {
      color: colors.deliveryTermLabel,
      marginRight: theme.spacing.unit
    },
    actionsGroup: {
      justifyContent: "space-between"
    },
    basketButton: {
      marginRight: theme.spacing.unit,
      backgroundColor: colors.basketButton.default,
      color: colors.basketButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    excelButton: {},
    tableContainer: theme.tableContainer,
    spinnerContainer: {
      ...searchContainer,
      marginTop: theme.spacing.unit * 6,
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    nextContainer: {
      marginLeft: theme.spacing.unit
    },
    downContainer: {
      marginTop: theme.spacing.unit
    },
    leftButton: {
      marginLeft: theme.spacing.unit
    },
    rightButton: {
      marginTop: "20px  "
    },
    whiteControl: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "red"
      }
    },
    warnPanel: {
      backgroundColor: colors.table.selectedRow,
      textAlign: "center",
      minHeight: 30,
      padding: "10px",
      marginBottom: theme.spacing.unit
    },
    warnLabel: {
      color: "black"
    },
    loginText: {
      fontSize: 22
    },
    LoginForm: {
      marginTop: 10
    }
  };
};
export default withStyles(styles)(LandingPage);
// export default LandingPage;
