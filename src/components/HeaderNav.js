import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as userApi from "../api/user-api";
import LoginDialog from "./LoginDialog";
import SignUpDialog from "./SignUpDialog";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { getCookie, eraseCookie } from "../utils/cookies";

const HeaderNav = () => {
  const { t } = useTranslation();
  const pathname = window.location.pathname;
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [languageCode, setLanguageCode] = useState("en");
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
  //const isLoggedIn = localStorage.getItem('isLoggedIn')
  const [isLoggedIn, setIsLoggedIn] = useState(!!getCookie("access_token"));
  const [userName, setUserName] = useState("");

  //console.log(isLoggedIn);

  function handleSignUpDialogClose() {
    setSignUpDialogOpen(false);
  }

  const languages = [
    {
      code: "en",
      name: "English",
      country_code: "gb",
      img: require("../assets/image/flags/gb.png")
    },
    {
      code: "ar",
      name: "العربية",
      dir: "rtl",
      country_code: "sa",
      img: require("../assets/image/flags/uae.jpg")
    },
    {
      code: "ru",
      name: "Русский",
      country_code: "ru",
      img: require("../assets/image/flags/ru.png")
    }
  ];

  useEffect(() => {
    const checkLogin = setInterval(
      () =>
        isLoggedIn !== !!getCookie("access_token") &&
        setIsLoggedIn(!isLoggedIn),
      500
    );

    setUserName("");

    if (isLoggedIn) {
      userApi.getData().then(data => {
        if (Array.isArray(data)) setUserName(data[0].username);
      });
    }

    return () => clearInterval(checkLogin);
  }, [isLoggedIn]);

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
      window.location.reload();
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
      window.location.reload();
    } catch (error) {
      setSignUpError(error);
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    eraseCookie("access_token");
    try {
      await userApi.logout();
    } catch (error) {
      // empty
    }
    window.location.reload();
  }

  const languageSelector = code => {
    localStorage.setItem("languageCode", code);
    setLanguageCode(code);
    i18n.changeLanguage(code);
  };
  return (
    <header
      id="header"
      className="typeheader-5"
      style={{ backgroundColor: "black" }}
    >
      {/* Header Top */}
      <div className="header-top hidden-compact">
        <div className="container">
          {/*<div class="row">*/}
          {/*<div class="header-top-left col-lg-3 col-md-4 hidden-sm hidden-xs">*/}
          {/*    <div class="telephone ">*/}
          {/*        <i class="fa fa-phone"></i> Hotline: <a href="tel:+971551081965">+971 55 108 1965</a>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div class="header-top-right col-lg-9 col-md-8 col-sm-12 col-xs-12">*/}
          {/*    <ul class="top-link list-inline lang-curr">*/}
          {/*<li class="currency">*/}
          {/*    <div class="btn-group currencies-block">*/}
          {/*        <form action="index.html" method="post" enctype="multipart/form-data" id="currency">*/}
          {/*            <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">*/}
          {/*                <span class="icon icon-credit "></span> $ US Dollar  <span class="fa fa-angle-down"></span>*/}
          {/*            </a>*/}
          {/*            <ul class="dropdown-menu btn-xs">*/}
          {/*                <li> <a >(€)&nbsp;Euro</a></li>*/}
          {/*                <li> <a >(£)&nbsp;Pounds    </a></li>*/}
          {/*                <li> <a >($)&nbsp;US Dollar </a></li>*/}
          {/*            </ul>*/}
          {/*        </form>*/}
          {/*    </div>*/}
          {/*</li>*/}
          {/*            <li class="language">*/}
          {/*                <div class="btn-group languages-block ">*/}
          {/*                    <form action="index.html" method="post" enctype="multipart/form-data" id="bt-language">*/}
          {/*                        <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">*/}
          {/*                            <img src="/alarkan/image/catalog/flags/gb.png" alt="English" title="English">*/}
          {/*                            <span class="eng">English</span>*/}
          {/*                            <span class="fa fa-angle-down"></span>*/}
          {/*                        </a>*/}
          {/*                        <ul class="dropdown-menu">*/}
          {/*                            <li><a ><img class="image_flag" src="/alarkan/image/catalog/flags/gb.png" alt="English" title="English" /> English </a></li>*/}
          {/*                            <li> <a > <img class="image_flag" src="/alarkan/image/catalog/flags/uae.jpg" alt="Arabic" title="Arabic" /> Arabic </a> </li>*/}
          {/*                        </ul>*/}
          {/*                    </form>*/}
          {/*                </div>*/}
          {/*            </li>*/}
          {/*        </ul>*/}
          {/*        <ul class="top-log list-inline">*/}
          {/*            <li><i class="fa fa-lock"></i><a >Login</a> / </li><li><a >Register</a></li>*/}
          {/*        </ul>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
      <div className="header-middle hidden-compact">
        <div className="container">
          <div className="row">
            <div className="logo-w col-lg-2 col-md-2 col-sm-3 col-xs-12">
              <div className="logo">
                <Link to="/app">
                  <img
                    src="/alarkan/image/alarkan_logo11.png"
                    title="Your Store"
                    alt="Your Store"
                    style={{
                      marginTop: "-18px",
                      marginBottom: "-40px",
                      width: "99%"
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-9 col-xs-12 middle-right">
              <div className="main-menu-w">
                <div className="responsive so-megamenu megamenu-style-dev">
                  <nav className="navbar-default">
                    <div className=" container-megamenu  horizontal open ">
                      <div className="navbar-header">
                        <button
                          type="button"
                          id="show-megamenu"
                          data-toggle="collapse"
                          className="navbar-toggle"
                        >
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                          <span className="icon-bar" />
                        </button>
                      </div>
                      <div className="megamenu-wrapper">
                        <span id="remove-megamenu" className="fa fa-times" />
                        <div className="megamenu-pattern">
                          <div className="container-mega">
                            <ul
                              className="megamenu"
                              data-transition="slide"
                              data-animationtime={250}
                            >
                              <li className>
                                <p className="close-menu" />
                                <a className="clearfix">
                                  <strong>
                                    <Link
                                      to={`/search`}
                                      className={`color-white ${
                                        pathname === "/search" ? "active" : ""
                                      }`}
                                    >
                                      {t("description26")}
                                    </Link>
                                  </strong>
                                </a>
                              </li>
                              {isLoggedIn && (
                                <li className>
                                  <p className="close-menu" />
                                  <a className="clearfix">
                                    <strong>
                                      <Link
                                        to="/search/basket"
                                        className={`color-white ${
                                          pathname === "/search/basket"
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        {t("description27")}
                                      </Link>
                                    </strong>
                                  </a>
                                </li>
                              )}
                              {isLoggedIn && (
                                <li className>
                                  <p className="close-menu" />
                                  <a className="clearfix">
                                    <strong>
                                      <Link
                                        to="/search/orders"
                                        className={`color-white ${
                                          pathname === "/search/orders"
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        {t("description28")}
                                      </Link>
                                    </strong>
                                  </a>
                                </li>
                              )}
                              {isLoggedIn && (
                                <li className>
                                  <p className="close-menu" />
                                  <a className="clearfix">
                                    <strong>
                                      <Link
                                        to="/search/dispatch"
                                        className={`color-white ${
                                          pathname === "/search/dispatch"
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        {t("description29")}
                                      </Link>
                                    </strong>
                                  </a>
                                </li>
                              )}
                              {isLoggedIn && (
                                <li className>
                                  <p className="close-menu" />
                                  <a className="clearfix">
                                    <strong>
                                      <Link
                                        to="/search/balance"
                                        className={`color-white ${
                                          pathname === "/search/balance"
                                            ? "active"
                                            : ""
                                        }`}
                                      >
                                        {t("description30")}
                                      </Link>
                                    </strong>
                                  </a>
                                </li>
                              )}
                              <li className>
                                <p className="close-menu" />
                                <a className="clearfix">
                                  <strong>
                                    <Link
                                      to="/search/offers"
                                      className={`color-white ${
                                        pathname === "/search/offers"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      {t("offers")}
                                    </Link>
                                  </strong>
                                </a>
                              </li>
                              <li className>
                                <p className="close-menu" />
                                <a className="clearfix">
                                  <strong>
                                    <Link
                                      to="/about-us"
                                      className={`color-white ${
                                        pathname === "/search/about-us"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      {t("description31")}
                                    </Link>
                                  </strong>
                                </a>
                              </li>
                              <li className>
                                <p className="close-menu" />
                                <a className="clearfix">
                                  <strong>
                                    <Link
                                      to="/search/howto"
                                      className={`color-white ${
                                        pathname === "/search/howto"
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                      {t("howto")}
                                    </Link>
                                  </strong>
                                </a>
                              </li>
                              {!isLoggedIn ? (
                                <>
                                  <li className style={{ float: "right" }}>
                                    <p className="close-menu" />
                                    <a
                                      onClick={handleSignUpDialogOpen}
                                      className="clearfix"
                                    >
                                      <strong>{t("register")}</strong>
                                    </a>
                                  </li>
                                  <li className style={{ float: "right" }}>
                                    <p className="close-menu" />
                                    <a
                                      onClick={handleLoginDialogOpen}
                                      className="clearfix"
                                    >
                                      <strong>{t("login")}</strong>
                                    </a>
                                  </li>{" "}
                                </>
                              ) : (
                                <li className style={{ float: "right" }}>
                                  <p className="close-menu" />
                                  <a
                                    onClick={() => {
                                      handleLogout();
                                    }}
                                    className="clearfix"
                                  >
                                    <strong>{t("logout")}</strong>
                                  </a>
                                </li>
                              )}
                              <li
                                className="language"
                                style={{
                                  float: "right",
                                  marginTop: "10px",
                                  width: "150px",
                                  display: "flex",
                                  justifyContent: "space-between"
                                }}
                              >
                                {/* <p className="close-menu" /> */}
                                <div className="btn-group languages-block ">
                                  <form
                                    action="index.html"
                                    method="post"
                                    encType="multipart/form-data"
                                    id="bt-language"
                                  >
                                    <a
                                      className="btn btn-link dropdown-toggle"
                                      data-toggle="dropdown"
                                    >
                                      <img
                                        src={
                                          languages.find(
                                            lang =>
                                              lang.code ===
                                              (localStorage.getItem(
                                                "languageCode"
                                              )
                                                ? localStorage.getItem(
                                                    "languageCode"
                                                  )
                                                : "en")
                                          ).img
                                        }
                                        alt="English"
                                        title="language"
                                        width={"25px"}
                                        height={"15px"}
                                      />
                                      <span
                                        className="eng"
                                        style={{ margin: "0px 10px" }}
                                      >
                                        {
                                          languages.find(
                                            lang =>
                                              lang.code ===
                                              (localStorage.getItem(
                                                "languageCode"
                                              )
                                                ? localStorage.getItem(
                                                    "languageCode"
                                                  )
                                                : "en")
                                          ).name
                                        }
                                      </span>
                                      <span className="fa fa-angle-down" />
                                    </a>
                                    <ul className="dropdown-menu">
                                      {languages.map(
                                        ({ code, name, country_code, img }) => (
                                          <li key={country_code}>
                                            <div
                                              onClick={() =>
                                                languageSelector(code)
                                              }
                                              style={{ cursor: "pointer" }}
                                            >
                                              {/* <span className={`flag-icon flag-icon-${country_code}`} ></span> */}
                                              <span>
                                                <img
                                                  className="image_flag"
                                                  src={img}
                                                  alt="English"
                                                  title="language"
                                                  width={"15px"}
                                                  height={"10px"}
                                                />
                                              </span>
                                              <span
                                                style={{
                                                  fontSize: "12px",
                                                  marginLeft: "10px"
                                                }}
                                              >
                                                {name}
                                              </span>
                                            </div>
                                          </li>
                                        )
                                      )}
                                      {/* <li> <a > <img className="image_flag" src="/alarkan/image/catalog/flags/uae.jpg" alt="Arabic" title="Arabic" /> ARABIC </a> </li> */}
                                    </ul>
                                  </form>
                                </div>
                              </li>
                            </ul>
                            <ul>
                              {isLoggedIn ? (
                                <li
                                  className
                                  style={{
                                    float: "right",
                                    display: "flex",
                                    marginTop: "10px"
                                  }}
                                >
                                  <a className="clearfix">
                                    <small>{`${userName}`}</small>
                                  </a>
                                </li>
                              ) : null}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              {/*<div class="search-header-w">*/}
              {/*    <div class="ico-search"><i class="fa fa-search"></i></div>*/}
              {/*    <div id="sosearchpro" class="sosearchpro-wrapper so-search ">*/}
              {/*        <form method="GET" action="index.html">*/}
              {/*            <div id="search0" class="search input-group form-group">*/}
              {/*                <div class="select_category filter_type  icon-select hidden-sm hidden-xs">*/}
              {/*                    <select class="no-border" name="category_id">*/}
              {/*                        <option value="0">All Categories</option>*/}
              {/*                        <option value="78">Apparel</option>*/}
              {/*                        <option value="77">Cables &amp; Connectors</option>*/}
              {/*                        <option value="82">Cameras &amp; Photo</option>*/}
              {/*                        <option value="80">Flashlights &amp; Lamps</option>*/}
              {/*                        <option value="81">Mobile Accessories</option>*/}
              {/*                        <option value="79">Video Games</option>*/}
              {/*                        <option value="20">Jewelry &amp; Watches</option>*/}
              {/*                        <option value="76">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Earings</option>*/}
              {/*                        <option value="26">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding Rings</option>*/}
              {/*                        <option value="27">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Men Watches</option>*/}
              {/*                    </select>*/}
              {/*                </div>*/}
              {/*                <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Keyword here..." name="search">*/}
              {/*                <button type="submit" class="button-search btn btn-primary" name="submit_search"><i class="fa fa-search"></i></button>*/}
              {/*            </div>*/}
              {/*            <input type="hidden" name="route" value="product/search" />*/}
              {/*        </form>*/}
              {/*    </div>*/}
              {/*</div>*/}
            </div>
          </div>
          {/*<div class="shopping_cart">*/}
          {/*    <div id="cart" class="btn-shopping-cart">*/}
          {/*<a href="javascript:void(0)" data-loading-text="Loading... " class="btn-group top_cart dropdown-toggle" data-toggle="dropdown" aria-expanded="true">*/}
          {/*<a href="contact-us.html">*/}
          {/*<div class="shopcart">*/}
          {/*    <span class="icon-c">*/}
          {/*<i class="fa fa-shopping-basket"></i>*/}
          {/*    <i class="fa fa-phone"></i>*/}
          {/*</span>*/}
          {/*<div class="shopcart-inner">*/}
          {/*    <p class="text-shopping-cart" style="margin-right: 0px;">*/}
          {/*        Contact Us*/}
          {/*    </p>*/}
          {/*<span class="total-shopping-cart cart-total-full">*/}
          {/*<span class="items_cart">02</span><span class="items_cart2"> item(s)</span><span class="items_carts">$162.00</span>*/}
          {/*</span>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</a>*/}
          {/*        <ul class="dropdown-menu pull-right shoppingcart-box" role="menu">*/}
          {/*            <li>*/}
          {/*                <table class="table table-striped">*/}
          {/*                    <tbody>*/}
          {/*                        <tr>*/}
          {/*                            <td class="text-center" style="width:70px">*/}
          {/*                                <a href="product.html">*/}
          {/*                                    <img src="/alarkan/image/catalog/demo/product/80/1.jpg" style="width:70px" alt="Yutculpa ullamcon" title="Yutculpa ullamco" class="preview">*/}
          {/*                                </a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-left"> <a class="cart_product_name" href="product.html">Yutculpa ullamco</a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-center">x1</td>*/}
          {/*                            <td class="text-center">$80.00</td>*/}
          {/*                            <td class="text-right">*/}
          {/*                                <a href="product.html" class="fa fa-edit"></a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-right">*/}
          {/*                                <a onclick="cart.remove('2');" class="fa fa-times fa-delete"></a>*/}
          {/*                            </td>*/}
          {/*                        </tr>*/}
          {/*                        <tr>*/}
          {/*                            <td class="text-center" style="width:70px">*/}
          {/*                                <a href="product.html">*/}
          {/*                                    <img src="/alarkan/image/catalog/demo/product/80/2.jpg" style="width:70px" alt="Xancetta bresao" title="Xancetta bresao" class="preview">*/}
          {/*                                </a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-left"> <a class="cart_product_name" href="product.html">Xancetta bresao</a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-center">x1</td>*/}
          {/*                            <td class="text-center">$60.00</td>*/}
          {/*                            <td class="text-right">*/}
          {/*                                <a href="product.html" class="fa fa-edit"></a>*/}
          {/*                            </td>*/}
          {/*                            <td class="text-right">*/}
          {/*                                <a onclick="cart.remove('1');" class="fa fa-times fa-delete"></a>*/}
          {/*                            </td>*/}
          {/*                        </tr>*/}
          {/*                    </tbody>*/}
          {/*                </table>*/}
          {/*            </li>*/}
          {/*            <li>*/}
          {/*                <div>*/}
          {/*                    <table class="table table-bordered">*/}
          {/*                        <tbody>*/}
          {/*                            <tr>*/}
          {/*                                <td class="text-left"><strong>Sub-Total</strong>*/}
          {/*                                </td>*/}
          {/*                                <td class="text-right">$140.00</td>*/}
          {/*                            </tr>*/}
          {/*                            <tr>*/}
          {/*                                <td class="text-left"><strong>Eco Tax (-2.00)</strong>*/}
          {/*                                </td>*/}
          {/*                                <td class="text-right">$2.00</td>*/}
          {/*                            </tr>*/}
          {/*                            <tr>*/}
          {/*                                <td class="text-left"><strong>VAT (20%)</strong>*/}
          {/*                                </td>*/}
          {/*                                <td class="text-right">$20.00</td>*/}
          {/*                            </tr>*/}
          {/*                            <tr>*/}
          {/*                                <td class="text-left"><strong>Total</strong>*/}
          {/*                                </td>*/}
          {/*                                <td class="text-right">$162.00</td>*/}
          {/*                            </tr>*/}
          {/*                        </tbody>*/}
          {/*                    </table>*/}
          {/*                    <p class="text-right"> <a class="btn view-cart" href="cart.html"><i class="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="checkout.html"><i class="fa fa-share"></i>Checkout</a>*/}
          {/*                    </p>*/}
          {/*                </div>*/}
          {/*            </li>*/}
          {/*        </ul>*/}
          {/*    </div>*/}
          {/*</div>*/}
        </div>
      </div>
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
    </header>
  );
};

export default HeaderNav;
