import React from "react";
import { withStyles } from "@material-ui/core/styles";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const styles = () => ({
  table: {
    width: "100%"
  }
});

const OrdersTables = ({ classes, data }) => {
  const { t } = useTranslation();
  const currency = data.length ? data[0].currency : "";
  return (
    <Table className={classes.table}>
      <h1>Orders Table</h1>
      <TableHead>
        <TableRow>
          <TableCell>{t("order")}</TableCell>
          <TableCell>{t("date")}</TableCell>
          <TableCell>{t("part_number")}</TableCell>
          <TableCell>{t("brand")}</TableCell>
          <TableCell>
            <div>{t("order_price")}</div>
            <div>{currency.trim()}</div>
          </TableCell>
          <TableCell>
            <div>{t("sale_price")}</div>
            <div>{currency.trim()}</div>
          </TableCell>
          <TableCell>{t("ordered")}</TableCell>
          <TableCell>{t("purchased")}</TableCell>
          <TableCell>{t("ready_to_ship")}</TableCell>
          <TableCell>{t("shipped")}</TableCell>
          <TableCell>{t("refused")}</TableCell>
          <TableCell>{t("reference")}</TableCell>
          <TableCell>{t("description")}</TableCell>
          <TableCell>{t("state_date")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(value => (
          <TableRow key={value.id}>
            <TableCell>{value.orderId}</TableCell>
            <TableCell>{value.orderDate.slice(0, 10)}</TableCell>
            <TableCell>{value.partNumber}</TableCell>
            <TableCell>{value.brand}</TableCell>
            <TableCell>{value.priceOrder}</TableCell>
            <TableCell>{value.priceSale}</TableCell>
            <TableCell>{value.ordered}</TableCell>
            <TableCell>{value.purchased}</TableCell>
            <TableCell>{value.accepted}</TableCell>
            <TableCell>{value.shipped}</TableCell>
            <TableCell>{value.refused}</TableCell>
            <TableCell>{value.yourReference}</TableCell>
            <TableCell>{value.description}</TableCell>
            <TableCell>
              {value.stateDate.slice(0, 16).replace("T", " ")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

OrdersTables.defaultProps = {
  data: []
};

export default withStyles(styles)(OrdersTables);
