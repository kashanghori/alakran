import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  withStyles
} from "@material-ui/core";
import moment from "moment";
import { APP_DATE_FORMAT } from "../utils/date";

function ShipmentsTotalTable({
  classes,
  data,
  delivery,
  onSelect,
  onShipmentDateClick
}) {
  const { t } = useTranslation();
  const currency = data.length ? data[0].currency : "";

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>{t("delivery")}</TableCell>
            <TableCell>{t("places")}</TableCell>
            <TableCell>{t("weight_kg")}</TableCell>
            <TableCell>{t("volume_m3")}</TableCell>
            <TableCell>{t("volume_kg")}</TableCell>
            <TableCell>{t("amount_with_currency", { currency })}</TableCell>
            <TableCell>{t("schedule")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(value => (
            <TableRow
              key={value.delivery}
              className={
                delivery === value.delivery ? classes.selectedRow : classes.row
              }
              onClick={onSelect.bind(null, value.delivery)}
            >
              <TableCell>
                {value.delivery} ({value.tariff})
              </TableCell>
              <TableCell>{value.places}</TableCell>
              <TableCell>{value.weightKg}</TableCell>
              <TableCell>{value.volumeM3}</TableCell>
              <TableCell>{value.volumeKg}</TableCell>
              <TableCell>{value.amount}</TableCell>
              <TableCell>
                <Button
                  className={classes.button}
                  onClick={onShipmentDateClick.bind(null, value)}
                  size="small"
                >
                  {value.shipmentDate
                    ? moment(value.shipmentDate).format(APP_DATE_FORMAT)
                    : "Select Date"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

const styles = theme => {
  const colors = theme.palette.custom.shipmentsPage;
  return {
    table: {
      [theme.breakpoints.up("sm")]: { width: "80%" }
    },
    selectedRow: {
      backgroundColor: colors.table.selectedRow,
      cursor: "initial"
    },
    row: {
      cursor: "pointer"
    },
    button: {
      backgroundColor: colors.totalTable.button.default,
      color: colors.totalTable.button.fontColor,
      "&:hover": {
        backgroundColor: colors.totalTable.button.hovered
      }
    }
  };
};

export default withStyles(styles)(ShipmentsTotalTable);
