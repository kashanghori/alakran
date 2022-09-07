import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  pageContent: {
    display: "flex",
    flexDirection: "column",
    marginTop: 3 * theme.spacing.unit,
    marginBottom: 3 * theme.spacing.unit,
    flex: "1 0 0px",
    maxWidth: "1264px",
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    margin: "auto",
    width: "100%",
    overflowY: "hidden"
  },
  otherPageContent: {
    flexDirection: "column",
    flex: "1 0 0px",
    overflowY: "auto",
    width: "100%"
  }
});

const PageContent = ({ classes, children, className, otherPages }) => {
  //console.log('otherPages', otherPages)
  return (
    <div
      className={classNames(
        otherPages ? classes.otherPageContent : classes.pageContent,
        className
      )}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(PageContent);
