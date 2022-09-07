import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Select from "./Select";
import { topupVariants } from "../api/balance-api";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Chip,
  withStyles
} from "@material-ui/core";

const BalanceTopupDialog = ({
  classes,
  open,
  onClose,
  balanceData,
  isLoggedIn
}) => {
  var error = "";

  const [variants, setVariants] = useState([]);
  const [variant, setVariant] = useState(undefined);
  const [amount, setAmount] = useState(0);
  const [currency, setCurrency] = useState("AED");

  const { t } = useTranslation();

  useEffect(() => {
    setVariants([]);
    setVariant({
      variant: undefined,
      title: undefined,
      percent: undefined,
      fix: undefined
    });
    if (isLoggedIn) {
      topupVariants().then(data => {
        setVariants(
          data.map(row => {
            return {
              value: row["variant"],
              title: row["description"],
              percent: row["service_percent"],
              fixed: row["service_fixed"]
            };
          })
        );

        if (data && Array.isArray(data) && data.length) {
          setVariant({
            value: data[0].variant,
            title: data[0].description,
            percent: data[0].service_percent,
            fixed: data[0].service_fixed
          });

          setCurrency(data[0].currency);
        }
      });
    }
  }, [isLoggedIn]);

  function handleAmountChange(event) {
    const { target } = event;
    setAmount(target.value);
  }

  function handleVariantChange(value) {
    setVariant(variants.find(i => i.value === value));
  }

  const handleTopup = async () => {
    if (!amount || amount <= 0) {
      error = "Wrong amount";
      return;
    }

    try {
      const response = await axios.get(
        `/payinit_${variant.value}.php?user=${balanceData.topupId}&amount=${amount}&currency=${currency}`
      );

      if (!response || !response.data || !response.data.url) {
        throw "Something went wrong";
      }

      onClose();
      window.location.href = response.data.url;
    } catch (e) {
      error = e.message;
    }

    return;
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth onClose={onClose}>
      <DialogContent className={classes.dialog}>
        <form>
          <TextField
            name="amount"
            type="amount"
            placeholder={t("amount_with_currency", { currency })}
            className={classes.textField}
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={handleAmountChange}
          />
          {variant ? (
            <div className={classes.errorChip}>
              <small>
                {t("charge", {
                  percent: variant.percent,
                  fixed: variant.fixed,
                  currency
                })}
              </small>
            </div>
          ) : null}
          {variants && variants.length > 1 ? (
            <Select
              name="variant"
              items={variants}
              value={variant.value}
              fullWidth
              onChange={handleVariantChange}
            />
          ) : null}
        </form>

        <Button
          className={classes.button}
          classes={{
            contained: classes.buttonContained
          }}
          variant="contained"
          onClick={handleTopup}
        >
          {t("topup")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

BalanceTopupDialog.defaultProps = {
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
    textField: {
      backgroundColor: colors.textField.background
    },
    errorChip: {
      width: "60%",
      justifyContent: "flex-start",
      fontStyle: "italic",
      marginLeft: theme.spacing.unit * 8,
      marginBottom: theme.spacing.unit * 3
    }
  };
};

export default withStyles(styles)(BalanceTopupDialog);
