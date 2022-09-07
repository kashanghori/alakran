import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const PageHeader = ({
  classes,
  companyName,
  companyAddress,
  isLoggedIn,
  onLogin,
  onLogout,
  onSignUp
}) => {
  return (
    <div className={classes.header}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.logo}>
          {/* <img src="/logo.png" /> */}
          <h1 className={classes.name}>
            {/* {companyName} */}
            Customer Portal with Self-Service for a Successful Transactions
          </h1>
        </div>
        {/* <div className={classes.headerButtons}>
          {!isLoggedIn ? (
            <>
              <Button
                variant="contained"
                color="primary"
                className={classes.signUpButton}
                onClick={onSignUp}
              >
                Sign Up
              </Button>
              <Button
                variant="contained"
                color="primary"
                className={classes.loginButton}
                onClick={onLogin}
              >
                Log In
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className={classes.loginButton}
              onClick={onLogout}
            >
              Log Out
            </Button>
          )}
        </div> */}
      </Toolbar>
    </div>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.pageHeader;
  return {
    header: {
      backgroundColor: "grey",
      minHeight: "96px",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        minHeight: "72px"
      }
    },
    loginButton: {
      border: `1px solid ${colors.loginButton.fontColor}`,
      marginLeft: theme.spacing.unit * 2,
      backgroundColor: colors.loginButton.default,
      color: colors.loginButton.fontColor,
      "&:hover": {
        backgroundColor: colors.loginButton.hovered
      }
    },
    signUpButton: {
      marginLeft: theme.spacing.unit * 2,
      backgroundColor: colors.signUpButton.default,
      color: colors.signUpButton.fontColor,
      "&:hover": {
        backgroundColor: colors.signUpButton.hovered
      }
    },
    toolbar: {
      flex: "1 0 0px",
      justifyContent: "center"
    },
    name: {
      color: "#000",
      marginBottom: 0
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
    }
  };
};

export default withStyles(styles)(PageHeader);
