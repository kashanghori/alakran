import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Page } from "../components";

// TODO Delete this page, use AboutUsPage instead
const AboutPage = ({ classes }) => {
  return (
    <Page>
      <div>
        <iframe className={classes.iframe} src="/about.html" />
      </div>
    </Page>
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

export default withStyles(styles)(AboutPage);
