import React, { useState } from "react";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { SERVER_DATE_FORMAT } from "../utils/date";
import { isEnterKey } from "../utils/keyEvents";

import {
  Dialog,
  DialogContent,
  Button,
  withStyles,
  Checkbox,
  FormControlLabel
} from "@material-ui/core";
import { DatePicker } from "./index";

const ShipmentDateDialog = ({
  classes,
  open,
  defaultDate,
  onClose,
  onSubmit
}) => {
  const minDate = moment()
    .startOf("day")
    .add(1, "day");
  const initDate = defaultDate ? moment(defaultDate) : minDate;
  const [enabled, setEnabled] = useState(true);
  const [date, setDate] = useState(
    initDate.isBefore(minDate) ? minDate : initDate
  );

  const { t } = useTranslation();

  function handleEnterPress(event) {
    if (enabled && defaultDate && date.isSame(initDate)) return;
    if (isEnterKey(event)) {
      event.stopPropagation();
      handleSubmit();
    }
  }

  function handleClose() {
    onClose();
  }

  function handleSubmit() {
    onSubmit(date.format(SERVER_DATE_FORMAT), enabled);
  }

  function handleDateChange(date) {
    setDate(date);
  }

  function handleEnabledChange(event) {
    setEnabled(event.target.checked);
  }

  const disabled = enabled && defaultDate && date.isSame(initDate);

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
          <FormControlLabel
            control={
              <Checkbox checked={enabled} onChange={handleEnabledChange} />
            }
            label={t("enabled")}
          />
          <DatePicker
            className={classes.datePicker}
            minDate={minDate}
            value={date}
            disabled={!enabled}
            onChange={handleDateChange}
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
          {t("submit")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

ShipmentDateDialog.defaultProps = {
  open: true
};

const styles = theme => {
  const colors = theme.palette.custom.shipmentsPage.shipmentDateDialog;
  return {
    dialog: {
      backgroundColor: colors.dialog
    },
    button: {
      marginTop: 2 * theme.spacing.unit,
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
    datePicker: {
      width: "100%",
      backgroundColor: colors.textField.background
    }
  };
};

export default withStyles(styles)(ShipmentDateDialog);
