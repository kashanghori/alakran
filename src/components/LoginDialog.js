import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { isEnterKey } from "../utils/keyEvents";

import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Chip,
  withStyles
} from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";

const LoginDialog = ({
  classes,
  open,
  error,
  isPasswordReset,
  isSubmitting,
  onClose,
  onLogin,
  onPasswordReset
}) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { t } = useTranslation();

  function handleEnterPress(event) {
    if (isEnterKey(event)) {
      event.stopPropagation();
      handleLogin();
    }
  }

  function handleClose() {
    onClose();
  }

  function handleLogin() {
    if (!credentials.email || !credentials.password) return;
    onLogin(credentials.email, credentials.password);
  }

  function handlePasswordReset() {
    onPasswordReset(credentials.email);
  }

  function handleFieldChange(event) {
    const { target } = event;
    setCredentials({ ...credentials, [target.name]: target.value });
  }

  const disabled = isSubmitting || !credentials.email || !credentials.password;

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      onClose={handleClose}
      onKeyPress={handleEnterPress}
    >
      <DialogContent className={classes.dialog}>
        {!!error && (
          <Chip
            className={classes.errorChip}
            color="secondary"
            icon={<ErrorIcon />}
            label={error}
          />
        )}
        <form>
          <TextField
            name="email"
            type="email"
            autoComplete="current-email"
            className={classes.emailTextField}
            variant="outlined"
            placeholder={t("email").toUpperCase()}
            margin="normal"
            fullWidth
            value={credentials.email}
            onChange={handleFieldChange}
          />
          <TextField
            name="password"
            className={classes.textField}
            type="password"
            autoComplete="current-password"
            variant="outlined"
            placeholder={t("password").toUpperCase()}
            margin="normal"
            fullWidth
            value={credentials.password}
            onChange={handleFieldChange}
          />
          <Typography
            component="a"
            className={classes.forgotPassword}
            variant="caption"
            onClick={handlePasswordReset}
          >
            {t("forgot_password")}
          </Typography>
          {isPasswordReset && (
            <Typography className={classes.forgotPasswordMsg} variant="caption">
              {t("reset_link_sent")}
            </Typography>
          )}
        </form>

        <Button
          className={classes.button}
          classes={{
            contained: classes.buttonContained
          }}
          variant="contained"
          disabled={disabled}
          onClick={handleLogin}
        >
          {t("log_in")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

LoginDialog.defaultProps = {
  open: true
};

const styles = theme => {
  const colors = theme.palette.custom.loginDialog;
  return {
    dialog: {
      backgroundColor: colors.dialog
    },
    button: {
      marginTop: theme.spacing.unit,
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
    forgotPassword: {
      display: "inline-block",
      color: colors.forgotPassword.color,
      cursor: "pointer",
      textDecoration: "underline"
    },
    forgotPasswordMsg: {
      display: "inline-block",
      color: colors.forgotPassword.color,
      marginLeft: theme.spacing.unit
    },
    emailTextField: {
      marginTop: 0,
      backgroundColor: colors.textField.background
    },
    textField: {
      backgroundColor: colors.textField.background
    },
    errorChip: {
      color: colors.forgotPassword.color,
      width: "100%",
      justifyContent: "flex-start",
      marginBottom: theme.spacing.unit * 2
    }
  };
};

export default withStyles(styles)(LoginDialog);
