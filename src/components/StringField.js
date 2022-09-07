import React from "react";
import { TextField } from "./index";

const StringField = ({ id, className, value, onChange }) => {
  function handleChange(event) {
    const { value } = event.target;
    onChange && onChange(id, value);
  }

  function handleBlur(event) {
    event.target.value = value;
  }

  return (
    <TextField
      style={{ width: "10rem" }}
      className={className}
      defaultValue={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default StringField;
