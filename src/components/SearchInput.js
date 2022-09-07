import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { withStyles, InputBase } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const styles = theme => {
  const { backgroundColor } = theme.palette.custom.searchInput;
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2px 4px",
      width: "400px",
      height: "36px",
      backgroundColor
    },
    input: {
      flex: "1 0 0px",
      paddingLeft: "1rem",
      backgroundColor
    }
  };
};

const SearchInput = ({ classes, className, value, onChange, onSearch }) => {
  const { t } = useTranslation();
  function handleChange(event) {
    const { value } = event.target;
    onChange && onChange(value);
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") handleSearchClick();
  }

  function handleSearchClick() {
    onSearch && onSearch();
  }

  return (
    <div className={classNames(classes.container, className)}>
      <InputBase
        className={classes.input}
        autoComplete="on"
        value={value}
        placeholder={t("search_input_placeholder")}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <IconButton onClick={handleSearchClick}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

export default withStyles(styles)(SearchInput);
