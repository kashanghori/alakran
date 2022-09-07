import React, { useEffect, useState, useRef } from "react";
import { Switch, Route, Link } from "react-router-dom";
import {
  SearchPage,
  BasketPage,
  OrdersPage,
  ShipmentsPage,
  BalancePage,
  AboutPage,
  ContactPage,
  ResetPasswordPage,
  EmailVerifiedPage,
  ManualsPage
} from "../pages";
import { SignUpDialog, LoginDialog } from "../components";
import * as userApi from "../api/user-api";
import SlickSider from "../components/SlickSlider";
import HeaderNav from "../components/HeaderNav";
import { useTranslation } from "react-i18next";

const LandingPage = props => {
  const { match, location } = props;
  const { pathname } = location;
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);
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
    <>
      <div id="wrapper" className="wrapper-fluid banners-effect-5">
        {/* Header Container  */}
        <HeaderNav />
        {/* //Header Container  */}
        {/* Main Container  */}
        <div className="main-container">
          <div id="content">
            {/*<div class="slider-container">*/}
            {/*    <div class="module sohomepage-slider ">*/}
            {/*        <div class="yt-content-slider"  data-rtl="yes" data-autoplay="no" data-autoheight="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column00="1" data-items_column0="1" data-items_column1="1" data-items_column2="1"  data-items_column3="1" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-loop="no" data-hoverpause="yes">*/}
            {/*            <div class="yt-content-slide">*/}
            {/*                <a >*/}
            {/*                  <video playsinline loop muted id="video_player" style="width: 100vw;">*/}
            {/*                           <source src="/alarkan/image\Copy of Copy of Car Engines (1).mp4" type="video/mp4">*/}
            {/*                           Your browser does not support the video tag.*/}
            {/*                         </video>*/}
            {/*                         */}
            {/*                                          </a>*/}
            {/*            </div>*/}
            {/* <div class="yt-content-slide"> */}
            {/*                <a >*/}
            {/*                  <video width="1920" height="720" controls autoplay class="img-responsive">*/}
            {/*                    <source src="/alarkan/image/30629898.mp4" type="video/mp4">*/}
            {/*                    Your browser does not support the video tag.*/}
            {/*                  </video>                        </a>*/}
            {/*            </div> */}
            {/*        </div>*/}
            {/*        <div class="loadeding"></div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="content-main-w" id="logovalue">
              {/*<div class="container">*/}
              {/* So categories */}
              {/*<div id="so_categories_51" class="so-categories module theme3 slider-cates5">*/}
              {/*<div class="modcontent">*/}
              {/*    <div class="cat-wrap theme3">*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/Accesories-1.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Accesories</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/brakes_7a3f_172-150x150.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Brakes</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/rear_axle_assembly-300x162.png" width="110" height="110" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Differential Axle</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/Steering-Wheel.png" width="110" height="110" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Steering</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/kit0018_v1_20180625_1-300x300.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Suspension</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/Lights-1.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Lighting</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/ENGINE.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Engine</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*        <div class="content-box">*/}
              {/*            <div class="image-cat">*/}
              {/*                <a ><img src="/alarkan/image/local/tools.jpg" alt="image" /></a>*/}
              {/*            </div>*/}
              {/*            <div class="cat-title">*/}
              {/*                <a >Tools</a>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*</div>*/}
              {/* end So categories */}
              {/*<div class="module extra-layout7">*/}
              {/*               <div class="pre_text">*/}
              {/*                   Top sale in the week*/}
              {/*               </div>*/}
              {/*               <h3 class="modtitle"><span>Product By Categories</span></h3>*/}
              {/*               <div class="modcontent">*/}
              {/*                   <div class="so-extraslider button-type1">*/}
              {/*                       <div class="products-list yt-content-slider extraslider-inner" data-rtl="yes" data-pagination="no" data-arrows="yes" data-autoplay="no" data-delay="4" data-speed="0.6" data-margin="30" data-items_column00="4" data-items_column0="4" data-items_column1="4" data-items_column2="3" data-items_column3="2" data-items_column4="1" data-lazyload="yes" data-loop="no" data-buttonpage="top">*/}
              {/*                           <div class="item">*/}
              {/*                               <div class="item-inner product-layout transition product-grid">*/}
              {/*                                   <div class="product-item-container item--static">*/}
              {/*                                       <div class="left-block">*/}
              {/*                                           <div class="product-image-container second_img">*/}
              {/*                                               <a href="product.html" target="_self" title="DPicanha porkcho">*/}
              {/*                                                   <img src="/alarkan/image/local/1.jpg" class="img-1 img-responsive" alt="image1">*/}
              {/*                                                   <img src="/alarkan/image/local/1.jpg" class="img-2 img-responsive" alt="image2">*/}
              {/*                                               </a>*/}
              {/*                                           </div>*/}
              {/*<span class="label-product label-new">New</span>*/}
              {/*quickview*/}
              {/*<div class="so-quickview">*/}
              {/*  <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-search"></i><span>Quick view</span></a>*/}
              {/*</div>*/}
              {/*end quickview*/}
              {/*</div>*/}
              {/*<div class="right-block">*/}
              {/*    <div class="button-group cartinfo--static">*/}
              {/*        <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>*/}
              {/*        <button type="button" class="addToCart" title="Add to cart" onclick="cart.add('60 ');">*/}
              {/*            <span>Add to cart </span>*/}
              {/*        </button>*/}
              {/*        <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i></button>*/}
              {/*    </div>*/}
              {/*<h4><a href="product.html" title="Picanha porkcho" target="_self">Engine</a></h4>*/}
              {/*    <div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*        <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    </div>*/}
              {/*    <div class="price">*/}
              {/*      <span class="price">$89.00</span>*/}
              {/*    </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div class="item">*/}
              {/*    <div class="item-inner product-layout transition product-grid">*/}
              {/*        <div class="product-item-container item--static">*/}
              {/*            <div class="left-block">*/}
              {/*                <div class="product-image-container second_img">*/}
              {/*                    <a href="product.html" target="_self" title="Stickrum bresao">*/}
              {/*                        <img src="/alarkan/image/local/3.jpg" class="img-1 img-responsive" alt="image1">*/}
              {/*                        <img src="/alarkan/image/local/3.jpg" class="img-2 img-responsive" alt="image2">*/}
              {/*                    </a>*/}
              {/*                </div>*/}
              {/*quickview*/}
              {/*<div class="so-quickview">*/}
              {/*  <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-search"></i><span>Quick view</span></a>*/}
              {/*</div>*/}
              {/*end quickview*/}
              {/*</div>*/}
              {/*<div class="right-block">*/}
              {/*<div class="button-group cartinfo--static">*/}
              {/*    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>*/}
              {/*    <button type="button" class="addToCart" title="Add to cart" onclick="cart.add('60 ');">*/}
              {/*        <span>Add to cart </span>*/}
              {/*    </button>*/}
              {/*    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i></button>*/}
              {/*</div>*/}
              {/*<h4><a href="product.html" title="Stickrum bresao" target="_self">Steering Wheel</a></h4>*/}
              {/*<div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*</div>*/}
              {/*<div class="price">*/}
              {/*    <span class="price">$85.00</span>*/}
              {/*</div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div class="item">*/}
              {/*    <div class="item-inner product-layout transition product-grid">*/}
              {/*        <div class="product-item-container item--static">*/}
              {/*            <div class="left-block">*/}
              {/*                <div class="product-image-container second_img">*/}
              {/*                    <a href="product.html" target="_self" title="Remporum stick">*/}
              {/*                        <img src="/alarkan/image/local/10.jpg" class="img-1 img-responsive" alt="image1">*/}
              {/*                        <img src="/alarkan/image/local/10.jpg" class="img-2 img-responsive" alt="image2">*/}
              {/*                    </a>*/}
              {/*                </div>*/}
              {/*<span class="label-product label-new">New</span>*/}
              {/*quickview*/}
              {/*<div class="so-quickview">*/}
              {/*  <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-search"></i><span>Quick view</span></a>*/}
              {/*</div>*/}
              {/*end quickview*/}
              {/*</div>*/}
              {/*<div class="right-block">*/}
              {/*<div class="button-group cartinfo--static">*/}
              {/*    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>*/}
              {/*    <button type="button" class="addToCart" title="Add to cart" onclick="cart.add('60 ');">*/}
              {/*        <span>Add to cart </span>*/}
              {/*    </button>*/}
              {/*    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i></button>*/}
              {/*</div>*/}
              {/*<h4><a href="product.html" title="Remporum stick" target="_self">Wheel Compoonents</a></h4>*/}
              {/*<div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*</div>*/}
              {/*<div class="price">*/}
              {/*  <span class="price">$65.00</span>*/}
              {/*</div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div class="item">*/}
              {/*    <div class="item-inner product-layout transition product-grid">*/}
              {/*        <div class="product-item-container item--static">*/}
              {/*            <div class="left-block">*/}
              {/*                <div class="product-image-container second_img">*/}
              {/*                    <a href="product.html" target="_self" title="Duis aute irure ">*/}
              {/*                        <img src="/alarkan/image/local/7.jpg" class="img-1 img-responsive" alt="image1">*/}
              {/*                        <img src="/alarkan/image/local/7.jpg" class="img-2 img-responsive" alt="image2">*/}
              {/*                    </a>*/}
              {/*                </div>*/}
              {/*quickview*/}
              {/*<div class="so-quickview">*/}
              {/*  <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-search"></i><span>Quick view</span></a>*/}
              {/*</div>*/}
              {/*end quickview*/}
              {/*</div>*/}
              {/*<div class="right-block">*/}
              {/*<div class="button-group cartinfo--static">*/}
              {/*    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>*/}
              {/*    <button type="button" class="addToCart" title="Add to cart" onclick="cart.add('60 ');">*/}
              {/*        <span>Add to cart </span>*/}
              {/*    </button>*/}
              {/*    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i></button>*/}
              {/*</div>*/}
              {/*<h4><a href="product.html" title="Volup tatem accu" target="_self">Lightning</a></h4>*/}
              {/*<div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*</div>*/}
              {/*<div class="price">*/}
              {/*   <span class="price">$60.00</span>*/}
              {/*</div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*<div class="item">*/}
              {/*    <div class="product-layout product-grid">*/}
              {/*        <div class="product-item-container item--static">*/}
              {/*            <div class="left-block">*/}
              {/*                <div class="product-image-container second_img">*/}
              {/*                    <a href="product.html" target="_self" title="Duis aute irure ">*/}
              {/*                        <img src="/alarkan/image/3f4058a8-77f9-4766-bae4-8214972ac0e3.jpg" class="img-1 img-responsive" alt="image1">*/}
              {/*                        <img src="/alarkan/image/3f4058a8-77f9-4766-bae4-8214972ac0e3.jpg" class="img-2 img-responsive" alt="image2">*/}
              {/*                    </a>*/}
              {/*                </div>*/}
              {/*quickview*/}
              {/*<div class="so-quickview">*/}
              {/*  <a class="iframe-link btn-button quickview quickview_handler visible-lg" href="quickview.html" title="Quick view" data-fancybox-type="iframe"><i class="fa fa-search"></i><span>Quick view</span></a>*/}
              {/*</div>*/}
              {/*end quickview*/}
              {/*</div>*/}
              {/*<div class="right-block">*/}
              {/*<div class="button-group cartinfo--static">*/}
              {/*    <button type="button" class="wishlist btn-button" title="Add to Wish List" onclick="wishlist.add('60');"><i class="fa fa-heart"></i></button>*/}
              {/*    <button type="button" class="addToCart" title="Add to cart" onclick="cart.add('60 ');">*/}
              {/*        <span>Add to cart </span>*/}
              {/*    </button>*/}
              {/*    <button type="button" class="compare btn-button" title="Compare this Product " onclick="compare.add('60');"><i class="fa fa-refresh"></i></button>*/}
              {/*</div>*/}
              {/*<h4><a href="product.html" title="Volup tatem accu" target="_self">Electrical</a></h4>*/}
              {/*<div class="rating">    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star fa-stack-2x"></i></span>*/}
              {/*    <span class="fa fa-stack"><i class="fa fa-star-o fa-stack-2x"></i></span>*/}
              {/*</div>*/}
              {/*<div class="price">*/}
              {/*   <span class="price">$60.00</span>*/}
              {/*</div>*/}
              {/*                            </div>*/}
              {/*                        </div>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/* So Advanced search */}
              {/*<div class="box-advanced-search">*/}
              {/*    <div class="so_advanced_search">*/}
              {/*        <div class="sas_wrap">*/}
              {/*            <div class="sas_inner">*/}
              {/*                <div class="heading-title"><h2 s>Select Your Vehical</h2></div>*/}
              {/*                <div class="sas_inner-box-search">*/}
              {/*                    <div class="row">*/}
              {/*                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">*/}
              {/*                            <select name="make" id="so_make0" class="form-control">*/}
              {/*                                <option value="">Select Make</option>*/}
              {/*                                    <option value="1" >Acura</option>*/}
              {/*                                    <option value="2" >BMW</option>*/}
              {/*                                    <option value="3" >Chevrolet</option>*/}
              {/*                                    <option value="4" >GMC</option>*/}
              {/*                                    <option value="5" >Honda</option>*/}
              {/*                                    <option value="6" >John deere</option>*/}
              {/*                                    <option value="7" >Kawasaky</option>*/}
              {/*                                    <option value="8" >Lexus</option>*/}
              {/*                                    <option value="9" >mazda</option>*/}
              {/*                                    <option value="10" >Mercedes</option>*/}
              {/*                                    <option value="11" >nuko</option>*/}
              {/*                                    <option value="12" >Opel</option>*/}
              {/*                                    <option value="13" >Yamaha</option>*/}
              {/*                            </select>*/}
              {/*                        </div>*/}
              {/*                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">*/}
              {/*                            <select name="model" id="so_model0" class="form-control">*/}
              {/*                                <option value="">Select Model</option>*/}
              {/*                                <option value="1" >3D Model</option>*/}
              {/*                                <option value="2" >BMW</option>*/}
              {/*                                <option value="3" >1000 Rocket</option>*/}
              {/*                            </select>*/}
              {/*                        </div>*/}
              {/*                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">*/}
              {/*                            <select name="engine" id="so_engine0" class="form-control">*/}
              {/*                                <option value="">Select Engine</option>*/}
              {/*                                <option value="1" >320i</option>*/}
              {/*                                <option value="2" >x5</option>*/}
              {/*                                <option value="3" >350i</option>*/}
              {/*                            </select>*/}
              {/*                        </div>*/}
              {/*                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-boxes">*/}
              {/*                            <select name="year" id="so_year0" class="form-control">*/}
              {/*                                <option value="">Select Year</option>*/}
              {/*                                    <option value="1" >2015</option>*/}
              {/*                                    <option value="2" >2016</option>*/}
              {/*                                    <option value="3" >2017</option>*/}
              {/*                            </select>*/}
              {/*                        </div>*/}
              {/*                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 search-button">*/}
              {/*                            <button type="button" id="sas_search_button0">Find My Part</button>*/}
              {/*                        </div>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/* end So Advanced search */}
              <div className="slider-brands container" id="portal" style={{}}>
                <Switch>
                  <Route exact path={`${match.path}`} component={SearchPage} />
                  <Route exact path={`/app/basket`} component={BasketPage} />
                  <Route exact path="/app/orders" component={OrdersPage} />
                  <Route
                    exact
                    path="/app/shipments"
                    component={ShipmentsPage}
                  />
                  <Route exact path="/app/balance" component={BalancePage} />
                  <Route exact path="/app/about" component={AboutPage} />
                  <Route exact path="/app/contacts" component={ContactPage} />
                  <Route
                    exact
                    path="/app/reset-password"
                    component={ResetPasswordPage}
                  />
                  <Route
                    exact
                    path="/app/email-verified"
                    component={EmailVerifiedPage}
                  />
                  <Route exact path="/app/howto" component={ManualsPage} />
                </Switch>
                {/*    <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="2" data-speed="0.2" data-margin="0" data-items_column00="9" data-items_column0="9" data-items_column1="8" data-items_column2="7" data-items_column3="6" data-items_column4="5" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (1).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (2).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (3).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (4).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (5).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (6).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (7).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (8).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/brands1 (9).jpg" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/suzuki.png" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/bmw.png" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/ford.png" alt="brand"></a></div>*/}
                {/*        <div class="item"><a ><img src="/alarkan/image/mazda.png" alt="brand"></a></div>*/}
                {/*    </div>*/}
                {/*<img src="/alarkan/image/arkanPicture1.png" style="width:100%; height:auto;"/>*/}
                {/*<img src="/alarkan/image/test1.png" style="width:100%; height:auto;"/>*/}
              </div>
              <div className="container">
                {/* <section className="customer-logos slider" ref={sliderEle}> */}
                <SlickSider />
                {/* </section> */}
              </div>
              {/*            <div class="container" style="background: url(image/bg-home02.jpg) no-repeat center;    background-size: cover;*/}
              {/*margin: 0px 0px;*/}
              {/*    width: 100%;*/}
              {/*height: 100vh;*/}
              {/*display: flex;*/}
              {/*align-items: center;*/}
              {/*padding: 0px;*/}
              {/*align-content: center;*/}
              {/*background-attachment: fixed;">*/}
              {/*                    <div class="row-brands" style="   width:100%;">*/}
              {/*                <div class="slider-brands container">*/}
              {/*                    <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="2" data-speed="0.2" data-margin="0" data-items_column00="6" data-items_column0="6" data-items_column1="5" data-items_column2="3" data-items_column3="2" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (1).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (2).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (3).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (4).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (5).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (6).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (7).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (8).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (9).jpg" alt="brand"></a></div>*/}
              {/*                    </div>*/}
              {/*<br><br>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*</div>*/}
              {/*<iframe src="/alarkan/http://partsonline.intouch.ae/search" style="width: 100%; height:80vh;border:none;"></iframe>*/}
              {/*<div class="container">*/}
              {/*                <div class="banners banners2">*/}
              {/*                    <div class="row" style="padding: 60px 65px">*/}
              {/*                        <div class="item col-lg-4 col-md-4 col-sm-4 col-xs-12"><br>*/}
              {/*<h3 style="font-size: 36px;*/}
              {/*    color: #282828;*/}
              {/*    font-weight: 700;*/}
              {/*    text-transform: uppercase;*/}
              {/*    position: relative;*/}
              {/*    padding: 0px 0px;*/}
              {/*    display: inline-block;"><span>About Us</span></h3>*/}
              {/*<p style="margin-right:-50px;">Alarkan General Trading FZE is a leading name in the Auto Spare parts world, with over 22 years of experience as a prominent distributor and supplier of genuine auto spare parts and accessories.*/}
              {/*<br>*/}
              {/*Internationally – the motor vehicle spare parts business has achieved an enormous transformation. In UAE it began as a business to meet domestic requirement and export to some of the African countries. Today, Dubai Auto spare parts business has entirely altered the universal marketing and calls as the hub for re-export business. Alarkan General Trading FZE is one among the key participant in this business boom and has got a long-lasting reputation and dignity in this field.</p>*/}
              {/*</div>*/}
              {/*                        <div class="item col-lg-8 col-md-8 col-sm-8 col-xs-12">*/}
              {/*<a class="home7-video" href="image/company_video.mp4">*/}
              {/*                <div class="box-video"></div>*/}
              {/*            </a>                        </div>      */}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*</div>*/}
              {/*                <div class="custom-cates">*/}
              {/*                    <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="4" data-speed="0.6" data-margin="0" data-items_column00="4" data-items_column0="4" data-items_column1="3" data-items_column2="2" data-items_column3="2" data-items_column4="1" data-arrows="no" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
              {/*                        <div class="item">*/}
              {/*                            <a  class="img">*/}
              {/*                                <img src="/alarkan/image/local/ca1.jpg" alt="banner">*/}
              {/*                            </a>*/}
              {/*                            <div class="cont">*/}
              {/*                                <h2>Tyres</h2>*/}
              {/*                                <span>184 products</span>*/}
              {/*                            </div>*/}
              {/*                            <div class="lnk"><a >Discover now</a></div>*/}
              {/*                        </div>*/}
              {/*                        <div class="item">*/}
              {/*                            <a  class="img">*/}
              {/*                                <img src="/alarkan/image/local/ca2.jpg" alt="banner">*/}
              {/*                            </a>*/}
              {/*                            <div class="cont">*/}
              {/*                                <h2>Light parts</h2>*/}
              {/*                                <span>260 products</span>*/}
              {/*                            </div>*/}
              {/*                            <div class="lnk"><a >Discover now</a></div>*/}
              {/*                        </div>*/}
              {/*                        <div class="item">*/}
              {/*                            <a  class="img">*/}
              {/*                                <img src="/alarkan/image/local/ca3.jpg" alt="banner">*/}
              {/*                            </a>*/}
              {/*                            <div class="cont">*/}
              {/*                                <h2>Engine</h2>*/}
              {/*                                <span>85 products</span>*/}
              {/*                            </div>*/}
              {/*                            <div class="lnk"><a >Discover now</a></div>*/}
              {/*                        </div>*/}
              {/*                        <div class="item">*/}
              {/*                            <a  class="img">*/}
              {/*                                <img src="/alarkan/image/local/ca4.jpg" alt="banner">*/}
              {/*                            </a>*/}
              {/*                            <div class="cont">*/}
              {/*                                <h2>Service Fluids</h2>*/}
              {/*                                <span>105 products</span>*/}
              {/*                            </div>*/}
              {/*                            <div class="lnk"><a >Discover now</a></div>*/}
              {/*                        </div>*/}
              {/*                      </div>*/}
              {/*                    </div>*/}
              {/*        </div>*/}
              {/*<div class="row" style="background-color:#d3d7da;"><br><br></div>            */}
              {/*<div class="row-banners">*/}
              {/*                <div class="banners banners1" style="margin-top:0px;">*/}
              {/*                    <div class="item item1">*/}
              {/*                        <a ><img src="/alarkan/image/1.jpg" alt="banner"></a>*/}
              {/*                    </div>*/}
              {/*                    <div class="item item2">*/}
              {/*                        <a ><img src="/alarkan/image/2.jpg" alt="banner"></a>*/}
              {/*                    </div>*/}
              {/*                    <div class="item item3">*/}
              {/*                        <a ><img src="/alarkan/image/3.jpg" alt="banner"></a>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*            </div>*/}
              {/*<div class="row" style="background-color:#ff2d37;height:3px"></div>            */}
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
              {/*                <img src="/alarkan/image/Genuine Spare Parts Trading (1).png" style="width:100%; height:auto"/></div>*/}
              {/*<div class="container"  style="display:flex;text-align:center; padding:50px 50px;">*/}
              {/*<div class="row">*/}
              {/*    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">*/}
              {/*        <img src="/alarkan/image/15978415_1610007534736piston.png" width="100"/>*/}
              {/*        <br><br>*/}
              {/*        <h4>Reliable Spare</h4>*/}
              {/*        <h1>PARTS SUPPLIER</h1>*/}
              {/*        <p>Finding reliable spare parts supplier can be challenging, Connect with us and let's help you grow your business.</p>*/}
              {/*    </div>*/}
              {/*    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">*/}
              {/*        <img src="/alarkan/image/15978421_1610007615332low-prices.png"  width="100"/><br><br>*/}
              {/*        <h4>On-Budget</h4>*/}
              {/*        <h1>HUSTLE FREE</h1>*/}
              {/*        <p>Fast and Effecient, On-Budget, Hustle Free, Hygiene Safe, High Quality Products and Availability is guranteed.</p>*/}
              {/*    </div>*/}
              {/*    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">*/}
              {/*        <img src="/alarkan/image/original-tag-1521704-1288308.png"  width="100"/><br><br>*/}
              {/*        <h4>Original Parts</h4>*/}
              {/*        <h1>CERTIFIED DEALERS</h1>*/}
              {/*        <p>One-Stop solution to supply better range of genuine product with renowned automotive brands. </p>*/}
              {/*    </div>*/}
              {/*</div>*/}
              {/*</div>*/}
              {/*<div class="container" style=" padding-bottom:10px;background: url(image/3063516.png) repeat center;    */}
              {/*background-size: cover;margin: 0px;width: 100vw;*/}
              {/*    padding: 0px 100px;padding-bottom:50px;">*/}
              {/*    <div class="slider-brands container">*/}
              {/*                     <div class="yt-content-slider contentslider" data-rtl="no" data-loop="yes" data-autoplay="no" data-autoheight="no" data-autowidth="no" data-delay="2" data-speed="0.2" data-margin="0" data-items_column00="6" data-items_column0="6" data-items_column1="5" data-items_column2="3" data-items_column3="2" data-items_column4="1" data-arrows="yes" data-pagination="no" data-lazyload="yes" data-hoverpause="yes">*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (1).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (2).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (3).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (4).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (5).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (6).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (7).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (8).jpg" alt="brand"></a></div>*/}
              {/*                        <div class="item"><a ><img src="/alarkan/image/brands1 (9).jpg" alt="brand"></a></div>*/}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*                <br>*/}
              {/*                <div class="banners banners2">*/}
              {/*                    <div class="row">*/}
              {/*                        <div class="item col-lg-4 col-md-4 col-sm-4 col-xs-12"><br>*/}
              {/*<h3 style="font-size: 36px;*/}
              {/*    color: #282828;*/}
              {/*    font-weight: 700;*/}
              {/*    text-transform: uppercase;*/}
              {/*    position: relative;*/}
              {/*    padding: 0px 0px;*/}
              {/*    display: inline-block;"><span>About Us</span></h3>*/}
              {/*<p><p>Alarkan General Trading FZC (Dubai Free Zone company) is a leading name in the Auto Spare parts world, with over 22 years of experience as a prominent distributor and supplier of genuine auto spare parts and accessories.*/}
              {/*<br><div style="height:2px"></div>*/}
              {/*Internationally – the motor vehicle spare parts business has achieved an enormous transformation. In UAE it began as a business to meet domestic requirement and export to some of the African countries. */}
              {/*<br><div style="height:8px"></div>Today, Dubai Auto spare parts business has entirely altered the universal marketing and calls as the hub for re-export business. */}
              {/*<br><div style="height:8px"></div>Alarkan General Trading FZE is one among the key participant in this business boom and has got a long-lasting reputation and dignity in this field.</p>*/}
              {/*</div>*/}
              {/*                        <div class="item col-lg-8 col-md-8 col-sm-8 col-xs-12"><br><br>*/}
              {/*<a class="home7-video" href="image/company_video.mp4">*/}
              {/*                <div class="box-video"></div>*/}
              {/*            </a>                        </div>     */}
              {/*                    </div>*/}
              {/*                </div>*/}
              {/*                <br>*/}
            </div>
          </div>
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
    </>
  );
};

export default LandingPage;
