import React from "react";
import { withStyles } from "@material-ui/core";
import classNames from "classnames";
import { Select, SearchInput } from "./index";

const SearchInputWithSelect = ({
  classes,
  className,
  selectItems,
  selectValue,
  searchValue,
  onSelectChange,
  onSearchChange,
  onSearchClick
}) => {
  return (
    <div className={classNames(classes.container, className)}>
      <Select
        className={classes.select}
        inputClasses={{
          notchedOutline: classes.selectNotchedOutline
        }}
        items={selectItems}
        value={selectValue}
        onChange={onSelectChange}
      />
      <SearchInput
        className={classes.searchInput}
        value={searchValue}
        onChange={onSearchChange}
        onSearch={onSearchClick}
      />
    </div>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.searchInputWithSelect;
  return {
    container: {
      display: "flex",
      overflow: "hidden"
    },
    select: {
      overflow: "hidden",
      boxShadow: "2px 0px 5px rgba(0,0,0,0.1)"
    },
    selectNotchedOutline: {
      boxSizing: "border-box",
      borderRadius: 0,
      border: "none",
      backgroundColor: colors.select.backgroundColor,
      top: "-6px",
      boxShadow: "2px 0px 6px -5px rgba(0,0,0,0.3)"
    }
  };
};

export default withStyles(styles)(SearchInputWithSelect);
