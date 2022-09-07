import React from "react";
import FormControl from "@material-ui/core/FormControl";
import { TextField } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const Captcha = ({ captcha, textFieldClassName, value, onChange }) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth margin="normal">
      <img src={`data:image/svg+xml,${encodeURIComponent(captcha)}`} />
      <TextField
        name="captcha"
        className={textFieldClassName}
        margin="dense"
        variant="outlined"
        placeholder={t("captcha_field_placeholder")}
        value={value}
        onChange={onChange}
      />
    </FormControl>
  );
};

export default React.memo(Captcha);
