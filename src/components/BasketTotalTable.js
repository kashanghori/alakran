import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const styles = theme => ({
  table: {
    [theme.breakpoints.up("sm")]: {
      width: "80%"
    }
  }
});

const BasketTotalTable = ({ classes, data }) => {
  const { t } = useTranslation();
  const currency = data.currency ? data.currency : "";
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>{t("balance_with_currency", { currency })}</TableCell>
          <TableCell>{t("to_order")}</TableCell>
          <TableCell>{t("available_for_order")}</TableCell>
          <TableCell>{t("pay_for_order")}</TableCell>
          <TableCell>{t("items")}</TableCell>
          <TableCell>{t("weight_kg")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{data.balance}</TableCell>
          <TableCell>{data.readyForOrder}</TableCell>
          <TableCell>{data.availForOrder}</TableCell>
          <TableCell>{data.topupForOrder}</TableCell>
          <TableCell>{data.itemsForOrder}</TableCell>
          <TableCell>{data.weightForOrder}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(BasketTotalTable);
