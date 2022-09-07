import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { SignUpDialog, LoginDialog } from "../components";
import * as userApi from "../api/user-api";
import SlickSider from "../components/SlickSlider";
import HeaderNav from "../components/HeaderNav";
import { useTranslation } from "react-i18next";

const ContactUsPage = props => {
  const { location, classes } = props;
  const { pathname } = location;

  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const { t } = useTranslation();

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

  return (
    <div id="wrapper" className="wrapper-fluid banners-effect-5">
      {/* Header Container  */}
      <HeaderNav />
      {/* //Header Container  */}
      {/* Main Container  */}
      <div className="main-container">
        <div
          id="content"
          style={{
            background:
              'url("/alarkan/image/Untitled design (86).png") no-repeat center',
            backgroundSize: "cover"
          }}
        >
          {/*<div class="slider-container">*/}
          {/*    <div class="module sohomepage-slider ">*/}
          {/*        <div class="yt-content-slider"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column00="1" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">*/}
          {/*            <div class="yt-content-slide">*/}
          {/*                <a href="#"><img width="100%" height="500" src="/alarkan/image/slider04.jpg" alt="image" /></a>*/}
          {/*            </div>*/}
          {/* <div class="yt-content-slide">*/}
          {/*                <a href="#">*/}
          {/*                  <video width="1920" height="720" controls autoplay class="img-responsive">*/}
          {/*                    <source src="/alarkan/image/30629898.mp4" type="video/mp4">*/}
          {/*                    Your browser does not support the video tag.*/}
          {/*                  </video>                        </a>*/}
          {/*            </div> */}
          {/*        </div>*/}
          {/*        <div class="loadeding"></div>*/}
          {/*    </div>*/}
          {/*</div>*/}
          <div className="container">
            <div className="row">
              <div id="content" className="col-sm-12">
                {/*<div class="page-title">*/}
                {/*	<h2 style="color:white;font-size:34px;">Contact Us</h2>*/}
                {/*</div>*/}
                <div className="info-contact clearfix">
                  <br />
                  <br />
                  <div className="col-lg-5 col-sm-5 col-xs-12 info-store">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57878.388840925225!2d55.069787153693966!3d24.952525706568657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f0d1adf668f47%3A0x11064b0cdb863027!2sJebel%20Ali%20Freezone%20Extension%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1626688882497!5m2!1sen!2sin"
                      width="100%"
                      height={470}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="col-lg-7 col-sm-7 col-xs-12 contact-form">
                    <div
                      className="row"
                      style={{ padding: "15px 0px", paddingLeft: "125px" }}
                    >
                      {/*<div class="name-store">*/}
                      {/*	<h3>Contact Us</h3>*/}
                      {/*</div>*/}
                      <address>
                        <div
                          className="col-lg-6 col-sm-6 col-xs-6"
                          style={{
                            display: "flex",
                            padding: "0px 0px 20px 30px"
                          }}
                        >
                          <div>
                            <i
                              className="fa fa-home"
                              style={{ color: "white", fontSize: "35px" }}
                            />
                          </div>
                          <div
                            className={classes.text}
                            style={{ color: "white" }}
                          >
                            Jebel Ali Freezone
                            <br />
                            Dubai, UAE
                            <br />
                            P.o. Box: 25370
                          </div>
                        </div>
                        <div
                          className="col-lg-6 col-sm-6 col-xs-6"
                          style={{
                            display: "flex",
                            padding: "0px 0px 20px 30px"
                          }}
                        >
                          <div>
                            <i
                              className="fa fa-phone"
                              style={{ color: "white", fontSize: "30px" }}
                            />
                          </div>
                          <div
                            className={classes.text}
                            style={{ color: "white" }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column"
                              }}
                            >
                              <a
                                href="tel:+971565098534"
                                style={{ color: "white" }}
                              >
                                +971 5 650 985 34{" "}
                              </a>
                              <a
                                style={{ color: "white" }}
                                href="tel:+97148812272"
                              >
                                +971 4 88 122 72
                              </a>
                              <a
                                style={{ color: "white" }}
                                href="mailto:sales@alarkangt.com"
                              >
                                sales@alarkangt.com
                              </a>
                            </div>
                          </div>
                        </div>
                        {/*<div class="comment">             */}
                        {/*Alarkan General Trading FZE is a leading name in the Auto Spare parts world with over 22 years of experience as a prominent distributor and supplier of genuine auto spare parts and accessories.*/}
                        {/*</div>*/}
                      </address>
                    </div>
                    <form
                      action
                      method="post"
                      encType="multipart/form-data"
                      className="form-horizontal"
                    >
                      <fieldset>
                        {/*<legend>Contact Form</legend>*/}
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            style={{ color: "white" }}
                            htmlFor="input-name"
                          >
                            Your Name
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="name"
                              id="input-name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            style={{ color: "white" }}
                            htmlFor="input-email"
                          >
                            E-Mail
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="email"
                              name="email"
                              id="input-email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            style={{ color: "white" }}
                            htmlFor="input-mobile"
                          >
                            Mobile No.
                          </label>
                          <div className="col-sm-10">
                            <input
                              type="text"
                              name="mobile"
                              id="input-mobile"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="form-group required">
                          <label
                            className="col-sm-2 control-label"
                            style={{ color: "white" }}
                            htmlFor="input-enquiry"
                          >
                            Enquiry
                          </label>
                          <div className="col-sm-10">
                            <textarea
                              name="enquiry"
                              rows={10}
                              id="input-enquiry"
                              className="form-control"
                            />
                          </div>
                        </div>
                      </fieldset>
                      <div className="buttons">
                        <div className="pull-right">
                          <button
                            className="btn btn-default buttonGray"
                            type="submit"
                          >
                            <span>Submit</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className="container">
          <SlickSider />
        </div>
      </div>
      {/* //Main Container */}
      <footer className="footer-container typefooter-5">
        {/* Footer middle Container */}
        <div className="container">
          {/*<div class="row footer-middle">*/}
          {/*    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-style">*/}
          {/*        <div class="box-footer box-infos">*/}
          {/*            <div class="module">*/}
          {/*                <h3 class="modtitle">Contact us</h3>*/}
          {/*                <div class="modcontent">*/}
          {/*                    <ul class="list-icon">*/}
          {/*                        <li><span class="icon pe-7s-map-marker"></span>Jebel Ali Freezone - Dubai<br> United Arab Emirates<br>P.o. Box: 25370</li>*/}
          {/*                        <li><span class="icon pe-7s-mail"></span><a href="mailto:: info@alarkangt.com" style="color:white;">info@alarkangt.com</a></li>*/}
          {/*                        <li><span class="icon pe-7s-phone"></span><a href="tel:+971551081965" style="color:white;">+971 55 108 1965</a></li>*/}
          {/*                        <li><span class="icon pe-7s-call"></span><a href="tel:+97148812272" style="color:white;">+971 4 88 122 72</a></li>*/}
          {/*                    </ul>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*    <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">*/}
          {/*        <div class="row">*/}
          {/*            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">*/}
          {/*                <div class="box-information box-footer">*/}
          {/*                    <div class="module clearfix">*/}
          {/*                        <h3 class="modtitle">Information</h3>*/}
          {/*                        <div class="modcontent">*/}
          {/*                            <ul class="menu">*/}
          {/*                                <li><a href="index.html">Home</a></li>*/}
          {/*                                <li><a href="about.html">About Us</a></li>*/}
          {/*                                <li><a href="privacy.html">Privacy Policy</a></li>*/}
          {/*                                <li><a href="contact-us.html">Contact Us</a></li>*/}
          {/*                            </ul>*/}
          {/*                        </div>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">*/}
          {/*                <div class="box-account box-footer">*/}
          {/*                    <div class="module clearfix">*/}
          {/*                        <h3 class="modtitle">My Account</h3>*/}
          {/*                        <div class="modcontent">*/}
          {/*                            <ul class="menu">*/}
          {/*                                <li><a >Login</a></li>*/}
          {/*                                <li><a >Register</a></li>*/}
          {/*                            </ul>*/}
          {/*                        </div>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">*/}
          {/*                <div class="box-service box-footer">*/}
          {/*                  <div class="module clearfix">*/}
          {/*                    <h3 class="modtitle">Language</h3>*/}
          {/*                    <div class="modcontent">*/}
          {/*                      <ul class="menu">*/}
          {/*                        <li><a >English</a></li>*/}
          {/*                        <li><a >Arabic</a></li>*/}
          {/*                      </ul>*/}
          {/*                    </div>*/}
          {/*                  </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
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
                      {t("privacy_policy")}
                    </Link>
                  </li>
                  <li style={{ padding: "10px" }}>
                    <a style={{ color: "white" }} href="tel:+971565098534">
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
                    {/* <li className="twitter"><a href="https://twitter.com/alarkandxb?lang=en" target="_blank"><i className="fa fa-twitter" /></a></li> */}
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
              {/*<div class="module newsletter-footer1">*/}
              {/*    <div class="newsletter">*/}
              {/*        <h3 class="modtitle">Sign Up for Newsletter</h3>*/}
              {/*        <div class="block_content">*/}
              {/*            <form method="post" id="signup" name="signup" class="form-group form-inline signup send-mail">*/}
              {/*                <div class="form-group">*/}
              {/*                    <div class="input-box">*/}
              {/*                        <input type="email" placeholder="Your email address..." value="" class="form-control" id="txtemail" name="txtemail" size="55">*/}
              {/*                    </div>*/}
              {/*                    <div class="subcribe">*/}
              {/*                        <button class="btn btn-primary btn-default font-title" type="submit" onclick="return subscribe_newsletter();" name="submit">*/}
              {/*                            <span>Subscribe</span>*/}
              {/*                        </button>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </form>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        {/* /Footer middle Container */}
        {/* Footer Bottom Container */}
        {/*<div class="footer-bottom">*/}
        {/*    <div class="container">*/}
        {/*        <div class="row">*/}
        {/*            <div class="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">*/}
        {/*                <p style="color:black;">© 2021 Al Arkan General Trading FZE. All rights reserved. Designed by <a href="http://www.modiantweb.com/" target="_blank">Modiant Web</a></p>*/}
        {/*            </div>*/}
        {/*<div class="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12">*/}
        {/*    <img src="/alarkan/image/catalog/demo/payment/payment.png" alt="imgpayment">*/}
        {/*</div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        {/* /Footer Bottom Container */}
        {/*Back To Top*/}
        <div className="back-to-top">
          <i className="fa fa-angle-up" />
        </div>
      </footer>

      {/* //end Footer Container */}
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

const styles = theme => {
  const colors = theme.palette.custom.pageHeader;
  return {
    header: {
      backgroundColor: colors.header,
      minHeight: "96px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        minHeight: "72px"
      }
    },
    name: {
      color: theme.palette.custom.logo,
      marginLeft: theme.spacing.unit
    },
    logo: {
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        "& > img": {
          height: "40px"
        }
      }
    },
    address: {
      color: theme.palette.custom.logo,
      fontWeight: "normal",
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    business: {
      color: theme.palette.custom.logo,
      marginLeft: theme.spacing.unit,
      fontWeight: "normal",
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    iframe: {
      border: 0,
      width: "100%",
      height: "380px"
    },
    text: {
      fontSize: "15px",
      textAlign: "center",
      paddingLeft: "10px"
    }
  };
};

export default withStyles(styles)(ContactUsPage);
