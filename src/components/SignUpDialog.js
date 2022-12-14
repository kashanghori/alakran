import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as userApi from "../api/user-api";
import { isEnterKey } from "../utils/keyEvents";

import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Chip,
  withStyles
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import Captcha from "./Captcha";

const SignUpDialog = ({
  classes,
  open,
  error,
  isSubmitting,
  onClose,
  onSubmit
}) => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    captcha: ""
  });
  const [formError, setFormError] = useState("");
  const [captcha, setCaptcha] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    fetchCaptcha();
  }, []);

  useEffect(() => {
    if (error) {
      fetchCaptcha();
      setUserData({ ...userData, captcha: "" });
    }
  }, [error]);

  async function fetchCaptcha() {
    const fetchedCaptcha = await userApi.getCaptcha();
    setCaptcha(fetchedCaptcha);
  }

  function handleEnterPress(event) {
    if (isEnterKey(event)) {
      event.stopPropagation();
      handleSubmit();
    }
  }

  function handleClose() {
    onClose();
  }

  function handleSubmit() {
    // Check if all fields has value
    if (Object.keys(userData).some(key => !userData[key])) return;

    if (userData.password !== userData.confirmPassword) {
      setFormError("Confirm password doesn't match");
      return;
    }
    const user = { ...userData };
    delete user.confirmPassword;
    onSubmit(user);
  }

  function handleFieldChange(event) {
    const { target } = event;
    setUserData({ ...userData, [target.name]: target.value });
  }

  const submitError = error ? error.message : formError;
  const disabled =
    isSubmitting || Object.keys(userData).some(key => !userData[key]);

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      onClose={handleClose}
      onKeyPress={handleEnterPress}
    >
      <DialogContent className={classes.dialog}>
        {!!submitError && (
          <Chip
            className={classes.errorChip}
            color="secondary"
            icon={<ErrorIcon />}
            label={submitError}
          />
        )}
        <form>
          <TextField
            name="username"
            autoComplete=""
            className={classes.textField}
            variant="outlined"
            placeholder={t("company_name").toUpperCase()}
            margin="normal"
            fullWidth
            value={userData.username}
            onChange={handleFieldChange}
          />
          <TextField
            name="email"
            type="email"
            autoComplete="current-email"
            className={classes.textField}
            variant="outlined"
            placeholder={t("email").toUpperCase()}
            margin="normal"
            fullWidth
            value={userData.email}
            onChange={handleFieldChange}
          />
          <TextField
            name="phone"
            type="tel"
            autoComplete="tel"
            className={classes.textField}
            variant="outlined"
            placeholder={t("contact_phone").toUpperCase()}
            margin="normal"
            fullWidth
            value={userData.phone}
            onChange={handleFieldChange}
          />
          <TextField
            name="password"
            className={classes.textField}
            type="password"
            autoComplete="new-password"
            variant="outlined"
            placeholder={t("password").toUpperCase()}
            margin="normal"
            fullWidth
            value={userData.password}
            onChange={handleFieldChange}
          />
          <TextField
            name="confirmPassword"
            className={classes.textField}
            type="password"
            autoComplete="new-password"
            variant="outlined"
            placeholder={t("confirm_password").toUpperCase()}
            margin="normal"
            fullWidth
            value={userData.confirmPassword}
            onChange={handleFieldChange}
          />
          <Captcha
            captcha={captcha}
            value={userData.captcha}
            textFieldClassName={classes.textField}
            onChange={handleFieldChange}
          />
        </form>
        <Button
          className={classes.button}
          classes={{
            contained: classes.buttonContained
          }}
          variant="contained"
          disabled={disabled}
          onClick={handleSubmit}
        >
          {t("sign_up")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

SignUpDialog.defaultProps = {
  open: true
};

const styles = theme => {
  const colors = theme.palette.custom.signUpDialog;

  return {
    dialog: {
      backgroundColor: colors.dialog
    },
    button: {
      marginTop: theme.spacing.unit * 2,
      fontSize: "14px",
      width: "100%",
      backgroundColor: colors.button.default,
      color: colors.button.fontColor,
      "&:hover": {
        backgroundColor: colors.button.hovered
      }
    },
    buttonContained: {
      "&:disabled": {
        backgroundColor: colors.button.disabled
      }
    },
    nameContainer: {
      display: "flex"
    },
    nameTextField: {
      marginTop: 0,
      backgroundColor: colors.textField.background,
      "&:first-child": {
        marginRight: theme.spacing.unit
      }
    },
    textField: {
      backgroundColor: colors.textField.background
    },
    errorChip: {
      color: colors.errorChip.color,
      width: "100%",
      justifyContent: "flex-start",
      marginBottom: theme.spacing.unit * 2
    }
  };
};

export default withStyles(styles)(SignUpDialog);
