import React from "react";
import { useTranslation } from "react-i18next";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  table: {
    [theme.breakpoints.up("sm")]: {
      width: "80%"
    }
  }
});

const BalanceTotalTable = ({ classes, data }) => {
  const { t } = useTranslation();
  const currency = data.currency ? data.currency : "";
  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>{t("balance_with_currency", { currency })}</TableCell>
          <TableCell>{t("in_orders")}</TableCell>
          <TableCell>{t("in_cart")}</TableCell>
          <TableCell>{t("pay_for_cart")}</TableCell>
          <TableCell>{t("ready_to_ship")}</TableCell>
          <TableCell>{t("pay_to_ship")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{data.balance}</TableCell>
          <TableCell>{data.inworkOrders}</TableCell>
          <TableCell>{data.readyForOrder}</TableCell>
          <TableCell>{data.topupForOrder}</TableCell>
          <TableCell>{data.readyForShipment}</TableCell>
          <TableCell>{data.topupForShipment}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(BalanceTotalTable);
