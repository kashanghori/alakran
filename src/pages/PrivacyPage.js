import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import { SignUpDialog, LoginDialog } from "../components";
import * as userApi from "../api/user-api";
import HeaderNav from "../components/HeaderNav";

const PrivacyPage = () => {
  const [isSignUpDialogOpen, setSignUpDialogOpen] = useState(false);
  const [signUpError, setSignUpError] = useState(undefined);
  const [isSubmitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [passResetError, setPassResetError] = useState("");
  const [isPasswordReset, setPasswordReset] = useState(false);
  const [isLoginDialogOpen, setLoginDialogOpen] = useState(false);

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
    <div
      id="wrapper"
      className="wrapper-fluid banners-effect-5"
      style={{
        background: "url(/alarkan/image/3063516.png) repeat center",
        backgroundSize: "contain"
      }}
    >
      {/* Header Container  */}
      <HeaderNav />
      {/* //Header Container  */}
      {/* Main Container  */}
      <div className="container">
        <div className="row">
          <div className="item col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <br />
            <br />
            <h3
              style={{
                fontSize: "36px",
                color: "#282828",
                fontWeight: 700,
                textTransform: "uppercase",
                position: "relative",
                padding: "0px 0px",
                display: "inline-block"
              }}
            >
              <span>Privacy Policy for AlArkan General Trading FZE</span>
            </h3>
            <p>
              At Alarkanautoparts, accessible from{" "}
              <span>
                <a href="https://alarkanautoparts.com">
                  https://alarkanautoparts.com
                </a>
              </span>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by Alarkanautoparts and how we use it.
              <br />
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
              <br />
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in Alarkanautoparts. This policy
              is not applicable to any information collected offline or via
              channels other than this website. Our Privacy Policy was created
              with the help of the{" "}
              <a href="https://www.privacypolicygenerator.info/">
                Privacy Policy Generator
              </a>
              .
            </p>
            <br />
            <h3>Consent</h3>
            <p>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
            <br />
            <h3>Information we collect</h3>
            <p>
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
              <br />
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
              <br />
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
            <br />
            <h3>How we use your information</h3>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <li> Provide, operate, and maintain our website</li>
            <li> Improve, personalize, and expand our website</li>
            <li> Understand and analyze how you use our website</li>
            <li>
              {" "}
              Develop new products, services, features, and functionality
            </li>
            <li>
              {" "}
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </li>
            <li> Send you emails</li>
            <li>
              {" "}
              Find and prevent fraud
              <p />
              <br />
              <h3>Log Files</h3>
              <p>
                Alarkanautoparts follows a standard procedure of using log
                files. These files log visitors when they visit websites. All
                hosting companies do this and a part of hosting services'
                analytics. The information collected by log files include
                internet protocol (IP) addresses, browser type, Internet Service
                Provider (ISP), date and time stamp, referring/exit pages, and
                possibly the number of clicks. These are not linked to any
                information that is personally identifiable. The purpose of the
                information is for analyzing trends, administering the site,
                tracking users' movement on the website, and gathering
                demographic information.
              </p>
              <br />
              <h3>Advertising Partners Privacy Policies</h3>
              <p>
                You may consult this list to find the Privacy Policy for each of
                the advertising partners of Alarkanautoparts.
                <br />
                Third-party ad servers or ad networks uses technologies like
                cookies, JavaScript, or Web Beacons that are used in their
                respective advertisements and links that appear on
                Alarkanautoparts, which are sent directly to users' browser.
                They automatically receive your IP address when this occurs.
                These technologies are used to measure the effectiveness of
                their advertising campaigns and/or to personalize the
                advertising content that you see on websites that you visit.
                <br />
                Note that Alarkanautoparts has no access to or control over
                these cookies that are used by third-party advertisers.
              </p>
              <br />
              <h3>Third Party Privacy Policies</h3>
              <p>
                Alarkanautoparts's Privacy Policy does not apply to other
                advertisers or websites. Thus, we are advising you to consult
                the respective Privacy Policies of these third-party ad servers
                for more detailed information. It may include their practices
                and instructions about how to opt-out of certain options.
                <br />
                You can choose to disable cookies through your individual
                browser options. To know more detailed information about cookie
                management with specific web browsers, it can be found at the
                browsers' respective websites.
              </p>
              <br />
              <h3>CCPA Privacy Rights (Do Not Sell My Personal Information)</h3>
              <p>
                Under the CCPA, among other rights, California consumers have
                the right to:
                <br />
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
                <br />
                Request that a business delete any personal data about the
                consumer that a business has collected.
                <br />
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <br />
              <h3>GDPR Data Protection Rights</h3>
              <p>
                We would like to make sure you are fully aware of all of your
                data protection rights. Every user is entitled to the following:
                <br />
                The right to access – You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
                <br />
                The right to rectification – You have the right to request that
                we correct any information you believe is inaccurate. You also
                have the right to request that we complete the information you
                believe is incomplete.
                <br />
                The right to erasure – You have the right to request that we
                erase your personal data, under certain conditions.
                <br />
                The right to restrict processing – You have the right to request
                that we restrict the processing of your personal data, under
                certain conditions.
                <br />
                The right to object to processing – You have the right to object
                to our processing of your personal data, under certain
                conditions.
                <br />
                The right to data portability – You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
                <br />
                If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </p>
              <br />
              <h3>Children's Information</h3>
              <p>
                Another part of our priority is adding protection for children
                while using the internet. We encourage parents and guardians to
                observe, participate in, and/or monitor and guide their online
                activity.
                <br />
                Alarkanautoparts does not knowingly collect any Personal
                Identifiable Information from children under the age of 13. If
                you think that your child provided this kind of information on
                our website, we strongly encourage you to contact us immediately
                and we will do our best efforts to promptly remove such
                information from our records.
              </p>
              <br />
              <br />
              <h3
                style={{
                  fontSize: "36px",
                  color: "#282828",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  position: "relative",
                  padding: "0px 0px",
                  display: "inline-block"
                }}
              >
                <span>Terms and Conditions</span>
              </h3>
              <h2>Interpretation and Definitions</h2>
              <h3>Interpretation</h3>
              <p>
                The words of which the initial letter is capitalized have
                meanings defined under the following conditions. The following
                definitions shall have the same meaning regardless of whether
                they appear in singular or in plural.
              </p>
              <br />
              <h3>Definitions</h3>
              <p>For the purposes of these Terms and Conditions:</p>
            </li>
            <li>
              {" "}
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, where "control" means ownership
              of 50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing
              authority.
            </li>
            <li> Country refers to: United Arab Emirates</li>
            <li>
              {" "}
              Company (referred to as either "the Company", "We", "Us" or "Our"
              in this Agreement) refers to AlArkan General Trading FZE, Dubai
              United Arab Emirates.
            </li>
            <li>
              {" "}
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </li>
            <li> Service refers to the Website.</li>
            <li>
              {" "}
              Terms and Conditions (also referred as "Terms") mean these Terms
              and Conditions that form the entire agreement between You and the
              Company regarding the use of the Service.
            </li>
            <li>
              {" "}
              Third-party Social Media Service means any services or content
              (including data, information, products or services) provided by a
              third-party that may be displayed, included or made available by
              the Service.
            </li>
            <li>
              {" "}
              Website refers to AlArkan General Trading FZE, accessible from
              https://alarkanautoparts.com
            </li>
            <li>
              {" "}
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
              <p />
              <br />
              <h3>Acknowledgment</h3>
              <p>
                These are the Terms and Conditions governing the use of this
                Service and the agreement that operates between You and the
                Company. These Terms and Conditions set out the rights and
                obligations of all users regarding the use of the Service.
                <br />
                Your access to and use of the Service is conditioned on Your
                acceptance of and compliance with these Terms and Conditions.
                These Terms and Conditions apply to all visitors, users and
                others who access or use the Service.
                <br />
                By accessing or using the Service You agree to be bound by these
                Terms and Conditions. If You disagree with any part of these
                Terms and Conditions then You may not access the Service.
                <br />
                You represent that you are over the age of 18. The Company does
                not permit those under 18 to use the Service.
                <br />
                Your access to and use of the Service is also conditioned on
                Your acceptance of and compliance with the Privacy Policy of the
                Company. Our Privacy Policy describes Our policies and
                procedures on the collection, use and disclosure of Your
                personal information when You use the Application or the Website
                and tells You about Your privacy rights and how the law protects
                You. Please read Our Privacy Policy carefully before using Our
                Service.
              </p>
              <br />
              <h3>Links to Other Websites</h3>
              <p>
                Our Service may contain links to third-party web sites or
                services that are not owned or controlled by the Company.
                <br />
                The Company has no control over, and assumes no responsibility
                for, the content, privacy policies, or practices of any third
                party web sites or services. You further acknowledge and agree
                that the Company shall not be responsible or liable, directly or
                indirectly, for any damage or loss caused or alleged to be
                caused by or in connection with the use of or reliance on any
                such content, goods or services available on or through any such
                web sites or services.
                <br />
                We strongly advise You to read the terms and conditions and
                privacy policies of any third-party web sites or services that
                You visit.
              </p>
              <br />
              <h3>Termination</h3>
              <p>
                We may terminate or suspend Your access immediately, without
                prior notice or liability, for any reason whatsoever, including
                without limitation if You breach these Terms and Conditions.
                <br />
                Upon termination, Your right to use the Service will cease
                immediately
              </p>
              <br />
              <h3>Limitation of Liability</h3>
              <p>
                To the maximum extent permitted by applicable law, in no event
                shall the Company or its suppliers be liable for any special,
                incidental, indirect, or consequential damages whatsoever
                (including, but not limited to, damages for loss of profits,
                loss of data or other information, for business interruption,
                for personal injury, loss of privacy arising out of or in any
                way related to the use of or inability to use the Service,
                third-party software and/or third-party hardware used with the
                Service, or otherwise in connection with any provision of this
                Terms), even if the Company or any supplier has been advised of
                the possibility of such damages and even if the remedy fails of
                its essential purpose.
                <br />
                Some states do not allow the exclusion of implied warranties or
                limitation of liability for incidental or consequential damages,
                which means that some of the above limitations may not apply. In
                these states, each party's liability will be limited to the
                greatest extent permitted by law.
              </p>
              <br />
              <h3>Cancellaton policy</h3>
              <p>
                We have no specific time limits for the cancellation of the
                placed orders. However cancellations are accepted, only if the
                orders have not yet been purchased from suppliers or the
                guaranteed delivery time is expired. Otherwise, cancellation of
                the particular order is the subject of the individual request
                and confirmation.
              </p>
              <br />
              <h3>Return policy</h3>
              <p>
                We have a 30-day return policy for most items; however, specific
                return periods might apply for certain kinds of items upon the
                individual agreement. Some items cannot be returned unless there
                is a problem with their manufacturer or quality. Returns are
                accepted in full, only if the products are returned to the
                merchant in fully resalable condition, and in the original,
                undamaged packaging, otherwise additional charges up to 100% of
                the product price can be applied. Electronic products cannot be
                returned or exchanged.
                <br />
                Return requests accepted by email. Once we have the details of
                your request, we will instruct you on how to send the items back
                to us, and we'll process your return.
              </p>
              <br />
              <h3>Refund policy</h3>
              <p>
                When we cannot supply order at any reasons, or order is
                cancelled or returned, the funds are returned to your balance
                automatically and can be used further for the next orders, or
                refunded to you, which is the subject of your choice.
                <br />
                If the original payment for such order was made from the bank
                card, the refund can be made only to the same card. The refund
                process may take up to 45 days according to the bank processing.
              </p>
              <br />
              <h3>Warranty policy</h3>
              <p>
                We do not expressly provide a warranty for the products that we
                sell. Warranties are provided only by the products
                manufacturers, if applicable. However, if supplied product is
                not functioning or has damages at the time of purchase, we will
                endeavor to replace it as soon as possible or offer a full
                refund.
                <br />
                In most cases, we source the products directly or indirectly
                through official authorized distributors.
              </p>
              <br />
              <h3>Governing Law</h3>
              <p>
                The laws of the Country, excluding its conflicts of law rules,
                shall govern this Terms and Your use of the Service. Your use of
                the Application may also be subject to other local, state,
                national, or international laws.
              </p>
              <br />
              <h3>Disputes Resolution</h3>
              <p>
                If You have any concern or dispute about the Service, You agree
                to first try to resolve the dispute informally by contacting the
                Company.
              </p>
              <br />
              <h3>For European Union (EU) Users</h3>
              <p>
                If You are a European Union consumer, you will benefit from any
                mandatory provisions of the law of the country in which you are
                resident in.
              </p>
              <br />
              <h3>United States Legal Compliance</h3>
              <p>
                You represent and warrant that (i) You are not located in a
                country that is subject to the United States government embargo,
                or that has been designated by the United States government as a
                "terrorist supporting" country, and (ii) You are not listed on
                any United States government list of prohibited or restricted
                parties.
              </p>
              <br />
              <h2>Severability and Waiver</h2>
              <h3>Severability</h3>
              <p>
                If any provision of these Terms is held to be unenforceable or
                invalid, such provision will be changed and interpreted to
                accomplish the objectives of such provision to the greatest
                extent possible under applicable law and the remaining
                provisions will continue in full force and effect.
              </p>
              <br />
              <h3>Waiver</h3>
              <p>
                Except as provided herein, the failure to exercise a right or to
                require performance of an obligation under this Terms shall not
                effect a party's ability to exercise such right or require such
                performance at any time thereafter nor shall be the waiver of a
                breach constitute a waiver of any subsequent breach.
              </p>
              <br />
              <h3>Translation Interpretation</h3>
              <p>
                These Terms and Conditions may have been translated if We have
                made them available to You on our Service. You agree that the
                original English text shall prevail in the case of a dispute.
              </p>
              <br />
              <h3>Changes to These Terms and Conditions</h3>
              <p>
                We reserve the right, at Our sole discretion, to modify or
                replace these Terms at any time. If a revision is material We
                will make reasonable efforts to provide at least 30 days' notice
                prior to any new terms taking effect. What constitutes a
                material change will be determined at Our sole discretion.
                <br />
                By continuing to access or use Our Service after those revisions
                become effective, You agree to be bound by the revised terms. If
                You do not agree to the new terms, in whole or in part, please
                stop using the website and the Service.
              </p>
              <br />
              <h3>Contact Us</h3>
              <p>
                If you have any questions about these Terms and Conditions, You
                can contact us:
              </p>
            </li>
            <li>
              {" "}
              By email:{" "}
              <a href="mailto:info@alarkangt.com">info@alarkangt.com</a>
              <p />
            </li>
          </div>
        </div>
      </div>
      <br />
      <br />
      {/* //Main Container */}
      <footer className="footer-container typefooter-5">
        {/* Footer middle Container */}
        <div className="container">
          <div className="row footer-middle">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12 col-style">
              <div className="box-footer box-infos">
                <div className="module">
                  <h3 className="modtitle">Contact us</h3>
                  <div className="modcontent">
                    <ul className="list-icon">
                      <li>
                        <span className="icon pe-7s-map-marker" />
                        Jebel Ali Freezone - Dubai
                        <br /> United Arab Emirates
                        <br />
                        P.o. Box: 25370
                      </li>
                      <li>
                        <span className="icon pe-7s-mail" />
                        <a
                          href="mailto:: info@alarkangt.com"
                          style={{ color: "white" }}
                        >
                          info@alarkangt.com
                        </a>
                      </li>
                      <li>
                        <span className="icon pe-7s-phone" />
                        <a href="tel:+971551081965" style={{ color: "white" }}>
                          +971 55 108 1965
                        </a>
                      </li>
                      <li>
                        <span className="icon pe-7s-call" />
                        <a href="tel:+97148812272" style={{ color: "white" }}>
                          +971 4 88 122 72
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 col-style">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div className="box-information box-footer">
                    <div className="module clearfix">
                      <h3 className="modtitle">Information</h3>
                      <div className="modcontent">
                        <ul className="menu">
                          <li>
                            <Link to="/app">Home</Link>
                          </li>
                          <li>
                            <Link to="/about-us">About Us</Link>
                          </li>
                          <li>
                            <Link to="/privacy">Privacy Polic</Link>
                          </li>
                          <li>
                            <Link to="/contact-us">Contact Us</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-style">
                  <div className="box-account box-footer">
                    <div className="module clearfix">
                      <h3 className="modtitle">My Account</h3>
                      <div className="modcontent">
                        <ul className="menu">
                          <li>
                            <a onClick={handleLoginDialogOpen}>Login</a>
                          </li>
                          <li>
                            <a onClick={handleSignUpDialogOpen}>Register</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 col-clear">
                  <div className="box-service box-footer">
                    <div className="module clearfix">
                      <h3 className="modtitle">Language</h3>
                      <div className="modcontent">
                        <ul className="menu">
                          <li>
                            <a href="#">ENGLISH</a>
                          </li>
                          <li>
                            <a href="#">ARABIC</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 col-socials">
                <div className="socials-w">
                  <h3>Follow us by</h3>
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
              <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                <div className="module newsletter-footer1">
                  <div className="newsletter">
                    <h3 className="modtitle">Sign Up for Newsletter</h3>
                    <div className="block_content">
                      <form
                        method="post"
                        id="signup"
                        name="signup"
                        className="form-group form-inline signup send-mail"
                      >
                        <div className="form-group">
                          <div className="input-box">
                            <input
                              type="email"
                              placeholder="Your email address..."
                              defaultValue
                              className="form-control"
                              id="txtemail"
                              name="txtemail"
                              size={55}
                            />
                          </div>
                          <div className="subcribe">
                            <button
                              className="btn btn-primary btn-default font-title"
                              type="submit"
                              onclick="return subscribe_newsletter();"
                              name="submit"
                            >
                              <span>Subscribe</span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Footer middle Container */}
        {/* Footer Bottom Container */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="copyright col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <p>
                  © 2021 Al Arkan General Trading FZE. All rights reserved.
                  Designed by{" "}
                  <a href="http://www.modiantweb.com/" target="_blank">
                    www.modiantweb.com
                  </a>
                </p>
              </div>
              {/*<div class="payment-w col-lg-4 col-md-4 col-sm-12 col-xs-12">*/}
              {/*    <img src="image/catalog/demo/payment/payment.png" alt="imgpayment">*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
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
    }
  };
};

export default withStyles(styles)(PrivacyPage);
