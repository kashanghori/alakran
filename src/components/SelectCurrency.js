import React from "react";
import { withStyles } from "@material-ui/core";
import { MenuItem, TextField as MuiSelect } from "@material-ui/core";

const currencies = [
  { title: "USD", value: "USD" },
  { title: "AED", value: "AED" }
];

const SelectCurrency = ({ classes, value, label, onChange }) => {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <MuiSelect
      select
      label={label}
      value={value}
      onChange={handleChange}
      className={classes.root}
      InputProps={{
        style: {
          fontSize: "small",
          color: "white"
        }
      }} // font size of input text
      InputLabelProps={{
        style: {
          fontSize: "medium",
          color: "silver"
        }
      }} // font size of label text
      SelectProps={{
        classes: { icon: classes.icon }
      }}
    >
      {currencies.map(item => (
        <MenuItem key={item.value} value={item.value}>
          {item.title}
        </MenuItem>
      ))}
    </MuiSelect>
  );
};

const styles = theme => ({
  input: {
    backgroundColor: "#fff"
  },
  root: {
    "&:focus": {
      backgroundColor: "transparent"
    }
  },
  icon: {
    color: "white"
  },
  inputMarginDense: {
    paddingLeft: theme.spacing.halfUnit,
    paddingTop: theme.spacing.halfUnit,
    paddingBottom: theme.spacing.halfUnit
  }
});

export default withStyles(styles)(SelectCurrency);
