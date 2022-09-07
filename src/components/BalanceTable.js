import React from "react";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const BalanceTable = ({
  classes,
  columns,
  data,
  originalData,
  onInvoiceExport
}) => {
  const { t } = useTranslation();

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          {columns.map(col => (
            <TableCell key={col.name}>{col.name}</TableCell>
          ))}
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, i) => (
          <TableRow key={i}>
            {row.map((cell, j) => (
              <TableCell key={j}>{cell}</TableCell>
            ))}
            <TableCell>
              {row[1] === "invoice" && (
                <Button
                  className={classes.excelButton}
                  variant="contained"
                  onClick={onInvoiceExport.bind(null, originalData[i])}
                >
                  {t("export")}
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.balancePage;

  return {
    table: {
      width: "100%"
    },
    excelButton: {
      backgroundColor: "#C4C6C8",
      color: colors.exportButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    excelLogo: {
      width: "20px",
      height: "20px",
      marginRight: theme.spacing.unit
    }
  };
};

export default withStyles(styles)(BalanceTable);
