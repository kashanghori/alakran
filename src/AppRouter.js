import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import {
  EmailVerifiedPage,
  LandingPage, ResetPasswordPage, BankPage, CatalogPage
} from "./pages";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SearchedPage from "./pages/SearchedPage";

function AppRouter() {

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/app" />
          }}
        />
        <Route path="/app" component={LandingPage} />
        <Route path="/about-us" component={AboutUsPage} />
        <Route path="/contact-us" component={ContactUsPage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/search" component={SearchedPage} />
        <Route path="/reset-password" component={ResetPasswordPage} />
        <Route path="/email-verified" component={EmailVerifiedPage} />
        <Route path="/bank" component={BankPage} />
        <Route path="/offers" component={CatalogPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
