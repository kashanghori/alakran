import React from "react";

import { Typography } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import { Page } from "../components";
import HeaderNav from "../components/HeaderNav";

import { useTranslation } from "react-i18next";

function EmailVerifiedPage() {
  const { t } = useTranslation();
  function render({ isLoggedIn }) {
    return isLoggedIn ? (
      <Redirect to="/search" />
    ) : (
      <>
        <HeaderNav />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            height: "calc(100% - 242px)"
          }}
        >
          <Typography variant="h6" style={{ color: "#fff" }}>
            Your email has been verified.
          </Typography>
        </div>
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          <footer className="footer-container typefooter-5">
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
                </div>
              </div>
            </div>
            <div className="back-to-top">
              <i className="fa fa-angle-up" />
            </div>
          </footer>
        </div>
      </>
    );
  }

  return <Page render={render} otherPages />;
}

export default EmailVerifiedPage;
