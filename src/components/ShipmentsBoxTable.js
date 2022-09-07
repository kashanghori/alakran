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

const styles = {};

const ShipmentsTable = ({ classes, data }) => {
  const { t } = useTranslation();
  if (!data.length) return null;
  const currency = data.length ? data[0].currency : "";

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>{t("part_number")}</TableCell>
          <TableCell>{t("brand")}</TableCell>
          <TableCell>{t("description")}</TableCell>
          <TableCell>{t("reference")}</TableCell>
          <TableCell>{t("quantity")}</TableCell>
          <TableCell>{t("amount_with_currency", { currency })}</TableCell>
          <TableCell>{t("weight_kg")}</TableCell>
          <TableCell>{t("row_id")}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(value => (
          <TableRow key={`${value.boxId}${value.portion}`}>
            <TableCell>{value.partNumber}</TableCell>
            <TableCell>{value.brand}</TableCell>
            <TableCell>{value.description}</TableCell>
            <TableCell>{value.yourReference}</TableCell>
            <TableCell>{value.quantity}</TableCell>
            <TableCell>{value.price}</TableCell>
            <TableCell>{value.weightKg}</TableCell>
            <TableCell>{value.yourRowId}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default withStyles(styles)(ShipmentsTable);
