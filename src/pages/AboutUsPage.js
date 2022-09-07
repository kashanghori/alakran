import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { SignUpDialog, LoginDialog } from "../components";
import * as userApi from "../api/user-api";
import "../style/about-us.css";
import SlickSider from "../components/SlickSlider";
import HeaderNav from "../components/HeaderNav";
import { useTranslation } from "react-i18next";

const AboutUsPage = props => {
  const { location } = props;
  const { pathname } = location;
  const { t } = useTranslation();
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  const selectedLangauge = localStorage.getItem("languageCode");

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
      <div className="main-container" id="logovalue">
        <div id="content">
          <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval={10000}
            data-pause="hover"
          >
            {/* Indicators */}
            {/*<ol class="carousel-indicators">*/}
            {/*  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>*/}
            {/*  <li data-target="#myCarousel" data-slide-to="1"></li>*/}
            {/*  <li data-target="#myCarousel" data-slide-to="2"></li>*/}
            {/*  <li data-target="#myCarousel" data-slide-to="3"></li>*/}
            {/*</ol>*/}
            {/* Wrapper for slides */}
            <div
              className={
                selectedLangauge === "ar"
                  ? "arabic-style carousel-inner"
                  : "carousel-inner"
              }
              role="listbox"
            >
              <div className="item active">
                <img
                  width="100%"
                  height={650}
                  src="/alarkan/image/1.png"
                  alt="image"
                />
                <div
                  className={
                    selectedLangauge === "ar"
                      ? "divblock-arabic-text text"
                      : "text"
                  }
                  style={{
                    top: "2vh",
                    right: "4vw",
                    textAlign: selectedLangauge === "ar" ? "right" : "left",
                    width: "42.5vw",
                    lineHeight: "21px"
                  }}
                >
                  <h3
                    style={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1.2px",
                      position: "relative",
                      padding: "0px 0px",
                      lineHeight: "22px",
                      display: "inline-block"
                    }}
                  >
                    <span>
                      <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                        {" "}
                      </i>
                      {t("description24")}
                    </span>
                  </h3>
                  <div
                    style={{
                      fontSize: "15px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 300
                    }}
                  >
                    {t("description1")}
                    <br />
                    <div style={{ height: "12px" }} />
                    {t("description2")}

                    <br />
                    <div style={{ height: "12px" }} />
                    {t("description3")}
                    <br />
                    <div style={{ height: "12px" }} />
                    {t("description4")}
                    <br />
                    <br />
                  </div>
                  <span
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "18px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>
                    {t("description5")}
                  </span>
                  <div style={{ height: "2px" }} />
                  <div
                    style={{
                      fontSize: "15px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 300
                    }}
                  >
                    {t("description6")}
                    <br />
                    <div style={{ height: "12px" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "18px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>{" "}
                    {t("description7")}
                  </span>
                  <div style={{ height: "2px" }} />
                  <div
                    style={{
                      fontSize: "15px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 300
                    }}
                  >
                    {t("description8")}
                    <br />
                    <div style={{ height: "12px" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "17px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "18px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>{" "}
                    {t("description9")}
                  </span>
                  <div style={{ height: "2px" }} />
                  <div
                    style={{
                      fontSize: "15px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 300
                    }}
                  >
                    {t("description10")}
                    <br />
                    <div style={{ height: "10px" }} />
                  </div>
                  <a
                    className="home7-video"
                    href={
                      selectedLangauge === "ar"
                        ? "https://www.youtube.com/watch?v=j5V1Ms7DS8Y"
                        : "https://www.youtube.com/watch?v=fLAXfGtnHdA"
                    }
                    style={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "22px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    {t("description25")}
                    <img
                      width={60}
                      height={60}
                      src="/alarkan/image/youtube-3363633_1280 (1).png"
                      alt="play"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <img
                  width="100%"
                  height={650}
                  src="/alarkan/image/22.png"
                  alt="image"
                />
                <div
                  className="text"
                  style={{
                    top: "20vh",
                    right: "5vw",
                    width: "28vw",
                    lineHeight: "21px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>
                    {t("description11")}{" "}
                  </span>
                  <div style={{ height: "10px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {" "}
                    {t("description12")}
                    <br />
                    <div style={{ height: "25px" }} />
                  </div>
                  {/*    <span style="font-size: 18px;*/}
                  {/*    color: black;*/}
                  {/*    font-weight: 600;  letter-spacing: 1px;*/}
                  {/*    position: relative;*/}
                  {/*    padding: 0px 0px;*/}
                  {/*    display: inline-block;"><i class="fa fa-minus" style="padding:2px 2px;"> </i> Broad Geography Delivery</span><div style="height:5px"></div>*/}
                  {/*    <div style="font-size: 18px;*/}
                  {/*    color: black;letter-spacing: 0.5px;*/}
                  {/*    font-weight: 100;">You can find our collaborative warehouses in UAE, USA, South Korea, Japan, Singapore, Taiwan, Thailand, China and India*/}
                  {/*<br><div style="height:23px"></div></div>*/}
                  <span
                    style={{
                      fontSize: "18px",
                      color: "black",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-minus" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>{" "}
                    {t("description13")}
                  </span>
                  <div style={{ height: "10px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "black",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {t("description14")}
                    <br />
                    <div style={{ height: "30px" }} />
                  </div>
                  {/*<span style="font-size: 18px;*/}
                  {/*    color: black;*/}
                  {/*    font-weight: 600;  letter-spacing: 1px;*/}
                  {/*    position: relative;line-height:24px;*/}
                  {/*    padding: 0px 0px;*/}
                  {/*    display: inline-block;"><i class="fa fa-minus" style="padding:2px 2px;"> </i> All kinds of financial instruments</span><div style="height:10px"></div>*/}
                  {/*    <div style="font-size: 18px;*/}
                  {/*    color: black;letter-spacing: 0.5px;*/}
                  {/*    font-weight: 100;">You can use any currency to pay. Cryptocurrency including.*/}
                  {/*<br><div style="height:23px"></div></div>*/}
                  <a
                    className="home7-video"
                    href={
                      selectedLangauge === "ar"
                        ? "https://www.youtube.com/watch?v=j5V1Ms7DS8Y"
                        : "https://www.youtube.com/watch?v=fLAXfGtnHdA"
                    }
                    style={{
                      fontSize: "20px",
                      color: "black",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "22px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    {t("description25")}
                    <img
                      width={60}
                      height={60}
                      src="/alarkan/image/youtube-3363633_1280 (1).png"
                      alt="play"
                    />
                  </a>
                </div>
              </div>
              <div className="item">
                <img
                  width="100%"
                  height={650}
                  src="/alarkan/image/3.png"
                  alt="image"
                />
                <div
                  className="text"
                  style={{
                    top: "25vh",
                    left: "5vw",
                    width: "40vw",
                    lineHeight: "21px"
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "24px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    {t("description15")}
                  </span>
                  <br />
                  <div style={{ height: "20px" }} />
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "24px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-lock" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>{" "}
                    {t("description16")}
                  </span>
                  <div style={{ height: "5px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "white",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {t("description17")}
                    <br />
                    <div style={{ height: "20px" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "24px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-truck" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>{" "}
                    {t("description18")}
                  </span>
                  <div style={{ height: "5px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "white",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {t("description19")}
                    <br />
                    <div style={{ height: "20px" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "24px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i
                      className="fa fa-handshake-o"
                      style={{ padding: "2px 2px" }}
                    >
                      {" "}
                    </i>{" "}
                    {t("description20")}
                  </span>
                  <div style={{ height: "5px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "white",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {t("description21")}
                    <br />
                    <div style={{ height: "20px" }} />
                  </div>
                  <span
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 600,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "24px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    <i className="fa fa-dollar" style={{ padding: "2px 2px" }}>
                      {" "}
                    </i>
                    {t("description22")}
                  </span>
                  <div style={{ height: "5px" }} />
                  <div
                    style={{
                      fontSize: "18px",
                      color: "white",
                      letterSpacing: "0.5px",
                      fontWeight: 100
                    }}
                  >
                    {t("description23")}
                    <br />
                    <div style={{ height: "20px" }} />
                  </div>
                  {/*<span style="font-size: 18px;*/}
                  {/*    color: white;*/}
                  {/*    font-weight: 300;  letter-spacing: 1px;*/}
                  {/*    position: relative;line-height:20px;*/}
                  {/*    padding: 0px 0px;*/}
                  {/*    display: inline-block;">There are auto parts for the most popular cars in our partner countries in our warehouses at the lowest prices.</span><div style="height:10px"></div>*/}
                  {/*    <div style="font-size: 18px;*/}
                  {/*    color: white;letter-spacing: 0.5px;*/}
                  {/*    font-weight: 100;">*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	A large variety of genuine and replacement parts<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	A competitive price and flexible pricing policy<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	The shortest time of delivery<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	Regular renewal of assortment<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	We’ll deliver the goods to your warehouse<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	The shipment from warehouses all over the world<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	Custom auto parts manufacturing at South Korean, Taiwan, Malaysian, Indian, Chinese plants<div style="height:5px"></div>*/}
                  {/*<i class="fa fa-minus" style="padding:2px 2px;"> </i>	Shipping logistics*/}
                  {/*<br><div style="height:16px"></div></div>*/}
                  {/*<span style="font-size: 20px;*/}
                  {/*    color: white;*/}
                  {/*    font-weight: 600;  letter-spacing: 1px;*/}
                  {/*    position: relative;line-height:24px;*/}
                  {/*    padding: 0px 0px;*/}
                  {/*    display: inline-block;">WE AREN’T JUST BUSINESS PARTNERS ,  WE WILL BECOME YOUR FRIENDS!*/}
                  {/*</span>*/}
                  <a
                    className="home7-video"
                    href={
                      selectedLangauge === "ar"
                        ? "https://www.youtube.com/watch?v=j5V1Ms7DS8Y"
                        : "https://www.youtube.com/watch?v=fLAXfGtnHdA"
                    }
                    style={{
                      fontSize: "20px",
                      color: "white",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      position: "relative",
                      lineHeight: "22px",
                      padding: "0px 0px",
                      display: "inline-block"
                    }}
                  >
                    {t("description25")}
                    <img
                      width={60}
                      height={60}
                      src="/alarkan/image/youtube-3363633_1280 (1).png"
                      alt="play"
                    />
                  </a>
                </div>
              </div>
            </div>
            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="prev"
            >
              <span
                className="glyphicon glyphicon-chevron-left"
                aria-hidden="true"
              />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#myCarousel"
              role="button"
              data-slide="next"
            >
              <span
                className="glyphicon glyphicon-chevron-right"
                aria-hidden="true"
              />
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="container">
            <SlickSider />
          </div>
          {/*                <br><br><br>*/}
          {/*                <div class="custom-cates" style="    margin-left: -100px;*/}
          {/*    margin-right: -100px">*/}
          {/*                    <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column00="4" data-items_column0="4" data-items_column1="3" data-items_column2="2" data-items_column3="2" data-items_column4="1" data-arrows="no" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
          {/*                        <div class="item">*/}
          {/*                            <a href="#" class="img">*/}
          {/*                                <img src="/alarkan/image/local/ca1.jpg" alt="banner">*/}
          {/* <video autoplay="autoplay" width="300" height="300" control>*/}
          {/*                                  <source src="/alarkan/image/Car Engines.mp4" type="video/mp4">*/}
          {/*                                </video> */}
          {/*                            </a>*/}
          {/*                            <div class="cont">*/}
          {/*                                <h2>Tyres</h2>*/}
          {/*                                <span>184 products</span>*/}
          {/*                            </div>*/}
          {/*                            <div class="lnk"><a href="#">Discover now</a></div>*/}
          {/*                        </div>*/}
          {/*                        <div class="item">*/}
          {/*                            <a href="#" class="img">*/}
          {/*                                <img src="/alarkan/image/local/ca2.jpg" alt="banner">*/}
          {/*                            </a>*/}
          {/*                            <div class="cont">*/}
          {/*                                <h2>Light parts</h2>*/}
          {/*                                <span>260 products</span>*/}
          {/*                            </div>*/}
          {/*                            <div class="lnk"><a href="#">Discover now</a></div>*/}
          {/*                        </div>*/}
          {/*                        <div class="item">*/}
          {/*                            <a href="#" class="img">*/}
          {/*                                <img src="/alarkan/image/local/ca3.jpg" alt="banner">*/}
          {/*                            </a>*/}
          {/*                            <div class="cont">*/}
          {/*                                <h2>Engine</h2>*/}
          {/*                                <span>85 products</span>*/}
          {/*                            </div>*/}
          {/*                            <div class="lnk"><a href="#">Discover now</a></div>*/}
          {/*                        </div>*/}
          {/*                        <div class="item">*/}
          {/*                            <a href="#" class="img">*/}
          {/*                                <img src="/alarkan/image/local/ca4.jpg" alt="banner">*/}
          {/*                            </a>*/}
          {/*                            <div class="cont">*/}
          {/*                                <h2>Service Fluids</h2>*/}
          {/*                                <span>105 products</span>*/}
          {/*                            </div>*/}
          {/*                            <div class="lnk"><a href="#">Discover now</a></div>*/}
          {/*                        </div>*/}
          {/*                      </div>*/}
          {/*                    </div>*/}
          {/*        </div>*/}
          {/*<div class="row-banners">*/}
          {/*                <div class="banners banners1">*/}
          {/*                    <div class="item item1">*/}
          {/*                        <a href="#"><img src="/alarkan/image/1.jpg" alt="banner"></a>*/}
          {/*                    </div>*/}
          {/*                    <div class="item item2">*/}
          {/*                        <a href="#"><img src="/alarkan/image/2.jpg" alt="banner"></a>*/}
          {/*                    </div>*/}
          {/*                    <div class="item item3">*/}
          {/*                        <a href="#"><img src="/alarkan/image/3.jpg" alt="banner"></a>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*</div>*/}
          {/*<div class="row-brands">*/}
          {/*                <div class="slider-brands container">*/}
          {/*                     <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="2" data-speed="0.2" data-margin="0" data-items_column00="6" data-items_column0="6" data-items_column1="5" data-items_column2="3" data-items_column3="2" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (1).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (2).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (3).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (4).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (5).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (6).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (7).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (8).jpg" alt="brand"></a></div>*/}
          {/*                        <div class="item"><a href="#"><img src="/alarkan/image/brands1 (9).jpg" alt="brand"></a></div>*/}
          {/*                    </div>*/}
          {/*<br><br>*/}
          {/*                </div>*/}
          {/*</div>*/}
          {/*<div class="row-color">*/}
          {/*    <div class="block-services container">*/}
          {/*        <div class="row">*/}
          {/*            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin1">*/}
          {/*                <div class="icon-service">*/}
          {/*                    <div class="icon"><i class="pe-7s-car">&nbsp;</i></div>*/}
          {/*                    <div class="text">*/}
          {/*                        <h6>Free shipping</h6>*/}
          {/*                        <p class="no-margin">On all orders over $99.00</p>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin1">*/}
          {/*                <div class="icon-service">*/}
          {/*                    <div class="icon"><i class="pe-7s-refresh-2">&nbsp;</i></div>*/}
          {/*                    <div class="text">*/}
          {/*                        <h6>30 days return</h6>*/}
          {/*                        <p class="no-margin">You have 30 days to return</p>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 col-margin">*/}
          {/*                <div class="icon-service">*/}
          {/*                    <div class="icon"><i class="pe-7s-door-lock">&nbsp;</i></div>*/}
          {/*                    <div class="text">*/}
          {/*                        <h6>Safe Shopping<br></h6>*/}
          {/*                        <p class="no-margin">Payment 100% secure</p>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">*/}
          {/*                <div class="icon-service">*/}
          {/*                    <div class="icon"><i class="pe-7s-users">&nbsp;</i></div>*/}
          {/*                    <div class="text">*/}
          {/*                        <h6>Online support</h6>*/}
          {/*                        <p class="no-margin">Contact us 24 hours a day</p>*/}
          {/*                    </div>*/}
          {/*                </div>*/}
          {/*            </div>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
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
      {/* //end Footer Container */}
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
    }
  };
};

export default withStyles(styles)(AboutUsPage);
