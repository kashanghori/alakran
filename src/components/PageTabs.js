import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withStyles } from "@material-ui/core/styles";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";

class PageTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: window.location.pathname
    };
  }

  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { classes, width } = this.props;
    const isScrollable = isWidthDown("sm", width);
    return (
      <div className={classes.container}>
        <Tabs
          value={this.state.currentTab}
          onChange={this.handleChange}
          variant={isScrollable ? "scrollable" : "standard"}
        >
          <Tab
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            value={"/app"}
            label="Search"
            to="/app"
            component={Link}
          />
          <Tab
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            value={"/app/basket"}
            label="Basket"
            to="/app/basket"
            component={Link}
          />
          <Tab
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            value={"/app/orders"}
            label="Orders"
            to="/app/orders"
            component={Link}
          />
          <Tab
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            value={"/app/shipments"}
            label="Shipments"
            to="/app/shipments"
            component={Link}
          />
          <Tab
            className={classes.tab}
            classes={{ selected: classes.tabSelected }}
            value={"/app/balance"}
            label="Balance"
            to="/app/balance"
            component={Link}
          />
        </Tabs>
        {/* <Button
          variant="contained"
          size="small"
          className={classes.button}
          href="mailto: robot.orders@partsonline.ae"
        >
          Contact Us
        </Button> */}
      </div>
    );
  }
}

const styles = theme => ({
  container: {
    display: "flex",
    alignItems: "baseline",
    backgroundColor: "grey",
    position: "relative",
    justifyContent: "center",
    marginTop: "2px",
    [theme.breakpoints.down("sm")]: {}
  },
  button: {
    position: "absolute",
    top: "9px",
    right: "24px",
    marginLeft: "auto",
    backgroundColor: "#dedad6",
    color: "#7a8ca3",
    "&:hover": {
      backgroundColor: "#C7C3BF"
    },
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  tab: {
    opacity: 1,
    borderLeft: "1px solid white",
    borderRight: "1px solid white",
    color: "#000",
    "&:last-child": {
      borderRight: "none"
    },
    "&:first-child": {
      borderLeft: "none"
    }
  },
  tabSelected: {
    backgroundColor: "grey",
    color: "#ff2d37"
  }
});

export default withWidth()(withStyles(styles)(PageTabs));
