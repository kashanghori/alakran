import React from "react";
import { isEnterKey } from "../utils/keyEvents";

import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  withStyles
} from "@material-ui/core";

const MessageDialog = ({ classes, open, message, onClose }) => {
  function handleEnterPress(event) {
    if (isEnterKey(event)) {
      event.stopPropagation();
    }
  }

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      fullWidth
      onClose={handleClose}
      onKeyPress={handleEnterPress}
    >
      <DialogContent className={classes.dialog}>
        <form>
          <Typography className={classes.messageText} variant="body1">
            {message}
          </Typography>
        </form>

        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={handleClose}
        >
          OK
        </Button>
      </DialogContent>
    </Dialog>
  );
};

MessageDialog.defaultProps = {
  open: true
};

const styles = theme => {
  const colors = theme.palette.custom.loginDialog;
  return {
    dialog: {
      backgroundColor: colors.dialog
    },
    button: {
      marginTop: theme.spacing.unit * 2,
      width: "100%"
    },
    messageText: {
      marginTop: theme.spacing.unit,
      color: colors.deliveryTermLabel,
      marginRight: theme.spacing.unit,
      textAlign: "center"
    }
  };
};

export default withStyles(styles)(MessageDialog);
