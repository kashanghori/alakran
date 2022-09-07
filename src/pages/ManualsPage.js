import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core";
import axios from "axios";

import { Tabs, Tab } from "@material-ui/core";

import { Page } from "../components";

const ManualsPage = ({ classes }) => {
  const [manSignUp, setManSignUp] = useState("");
  const [manOffers, setManOffers] = useState("");
  const [manQuote, setManQuote] = useState("");
  const [manApi, setManApi] = useState("");
  const [tab, setTab] = useState(0);

  const { i18n } = useTranslation();
  const { t } = useTranslation();

  function handleTabChange(event, value) {
    setTab(value);
  }

  useEffect(() => {
    const fetchManSignUp = async () => {
      const result = await axios.get(
        `/manuals/${i18n.language}/manSignUp.html`
      );
      setManSignUp(result.data);
    };
    fetchManSignUp();

    const fetchManOffers = async () => {
      const result = await axios.get(
        `/manuals/${i18n.language}/manOffers.html`
      );
      setManOffers(result.data);
    };
    fetchManOffers();

    const fetchManQuote = async () => {
      const result = await axios.get(`/manuals/${i18n.language}/manQuote.html`);
      setManQuote(result.data);
    };
    fetchManQuote();

    const fetchManApi = async () => {
      const result = await axios.get(`/manuals/${i18n.language}/manApi.html`);
      setManApi(result.data);
    };
    fetchManApi();
  }, [i18n.language]);

  return (
    <Page>
      <Tabs
        className={classes.tabs}
        value={tab}
        centered
        onChange={handleTabChange}
      >
        <Tab
          label={t("tab_register")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
        <Tab
            label={t("tab_quotations")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
        <Tab
            label={t("tab_offers")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
        <Tab
            label={t("tab_api")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
      </Tabs>

      {tab === 0 ? (
        <div dangerouslySetInnerHTML={{ __html: manSignUp }} />
      ) : tab === 1 ? (
        <div dangerouslySetInnerHTML={{ __html: manQuote }} />
      ) : tab === 2 ? (
        <div dangerouslySetInnerHTML={{ __html: manOffers }} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: manApi }} />
      )}
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.searchPage;
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

    dialog: {
      overflowY: "auto",
      height: "70vh"
    },

    iframe: {
      border: 0,
      width: "100%",
      height: "99%"
    }
  };
};

export default withStyles(styles)(ManualsPage);
