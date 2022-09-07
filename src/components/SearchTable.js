import React, { useMemo } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import QuantityField from "./QuantityField";

const RowCheckbox = ({ id, checked, onChange, className }) => {
  function handleOnChange() {
    onChange && onChange(id);
  }

  return (
    <Checkbox
      className={className}
      disableRipple
      checked={checked}
      onChange={handleOnChange}
    />
  );
};

const SearchTable = ({
  classes,
  data,
  showReference,
  onDataChange,
  isLoggedIn,
  onSelect,
  onSelectAll
}) => {
  const { t } = useTranslation();
  function handleQuantityChange(id, quantity) {
    const newData = data.map(value =>
      value.id !== id
        ? value
        : {
            ...value,
            quantity
          }
    );
    onDataChange && onDataChange(newData);
  }

  function handleSelectAll(event) {
    onSelectAll && onSelectAll(event.target.checked);
  }

  const confirmedData = useMemo(() => data.filter(value => value.confirmed), [
    data
  ]);
  const isAllConfirmed = confirmedData.length === data.length;

  const currency = data.length ? data[0].currency : "";
  return (
    <div className={`${classes.container} search-table`}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                // indeterminate={numSelected > 0 && numSelected < rowCount}
                className={classes.checkbox}
                disableRipple
                checked={isAllConfirmed}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>
              <div>{t("part_number")}</div>
              <div>{t("substituted")}</div>
            </TableCell>
            <TableCell>{t("brand")}</TableCell>
            <TableCell>{t("description")}</TableCell>
            <TableCell>
              <div>{t("delivery")}</div>
              <div>{t("days")}</div>
            </TableCell>
            <TableCell>{t("price_with_currency", { currency })}</TableCell>
            {isLoggedIn && <TableCell>{t("quantity")}</TableCell>}
            <TableCell>{t("available")}</TableCell>
            <TableCell className={classes.weightCell}>
              <div>{t("weight_kg")}</div>
              <div>{t("volume_kg")}</div>
            </TableCell>
            {showReference && <TableCell>{t("reference")}</TableCell>}
            <TableCell>{t("comment")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(value => (
            <TableRow key={value.id}>
              <TableCell padding="checkbox">
                <RowCheckbox
                  id={value.id}
                  className={classes.checkbox}
                  checked={value.confirmed}
                  onChange={onSelect}
                />
              </TableCell>
              <TableCell>
                <div>{value.partNumber}</div>
                <div className={classes.warnValue}>
                  {value.inpPartNumber !== value.partNumber
                    ? value.inpPartNumber
                    : ""}
                </div>
              </TableCell>
              <TableCell>{value.brand}</TableCell>
              <TableCell>{value.description}</TableCell>
              <TableCell>
                <div className={classes.pointValue}>{value.tariff}</div>
                <div> {value.days} </div>
              </TableCell>
              <TableCell>{value.price}</TableCell>
              {isLoggedIn && (
                <TableCell>
                  {value.price && (
                    <QuantityField
                      className={classes.quantityField}
                      id={value.id}
                      quantity={value.quantity}
                      onChange={handleQuantityChange}
                    />
                  )}
                </TableCell>
              )}
              <TableCell>
                {value.available
                  ? value.available
                  : value.price
                  ? t("for_order").toUpperCase()
                  : t("n_a")}
              </TableCell>
              <TableCell>
                <div className={classes.weightValue}>{value.weightKg}</div>
                <div>{value.volumeKg}</div>
              </TableCell>
              {showReference && <TableCell>{value.yourReference}</TableCell>}
              <TableCell>
                <div> {value.transport} </div>
                <div className={classes.warnValue}> {value.errDesc} </div>
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
    warnValue: {
      color: "red"
    },
    warnRow: {
      backgroundColor: colors.table.selectedRow
    },
    row: {},
    checkbox: {
      padding: 0
    }
  };
};

export default withStyles(styles)(SearchTable);
