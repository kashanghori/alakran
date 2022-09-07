import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import moment from "moment";
import { APP_DATETIME_FORMAT } from "../utils/date";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";

const CatalogTable = ({ classes, data }) => {
  const { t } = useTranslation();
  const urlBan =
    data.length &&
    !data[0].resourceUrl.startsWith("ftp") &&
    !data[0].resourceUrl.startsWith("http")
      ? data[0].resourceUrl
      : null;
  return (
    <div className={`${classes.container} search-table`}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <div className={classes.catalogCell}>{t("offer")}</div>
            </TableCell>
            <TableCell>{t("brand")}</TableCell>
            <TableCell>{t("download")}</TableCell>
            <TableCell>{t("lines")}</TableCell>
            <TableCell>{t("updated")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(value => (
            <TableRow>
              <TableCell>
                <div className={classes.catalogCell}>{value.offer}</div>
              </TableCell>
              <TableCell>{value.brand}</TableCell>
              <TableCell>
                {urlBan !== null ? (
                  urlBan
                ) : (
                  <Button
                    className={classes.downloadButton}
                    variant="contained"
                    component="a"
                    href={value.resourceUrl}
                    download
                  >
                    {t("download")}
                  </Button>
                )}
              </TableCell>
              <TableCell>{value.lines}</TableCell>
              <TableCell>
                {value.updated
                  ? moment(value.shipmentDate).format(APP_DATETIME_FORMAT)
                  : ""}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.searchPage;
  return {
    container: {
      flex: "1 0 0px"
    },
    weightCell: {
      whiteSpace: "nowrap"
    },
    weightValue: {
      borderBottom: `1px solid ${colors.weightValueBorder}`
    },
    pointValue: {
      borderBottom: `1px solid ${colors.weightValueBorder}`
    },
    ratingCell: {
      textAlign: "left",
      padding: 20
    },
    rating: {
      display: "flex"
    },
    ratingIcon: {
      width: 20,
      height: 20
    },
    ratingIconButton: {
      padding: 1
    },
    quantityField: {
      alignItems: "center"
    },
    downloadButton: {
      fontsize: "24px"
    },
    catalogCell: {
      textAlign: "left",
      marginLeft: theme.spacing.unit * 2
    }
  };
};

export default withStyles(styles)(CatalogTable);
