import React, { useMemo } from "react";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox
} from "@material-ui/core";
import QuantityField from "./QuantityField";
import StringField from "./StringField";

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

const BasketTable = ({
  classes,
  data,
  onQuantityChange,
  onReferenceChange,
  onSelect,
  onSelectAll
}) => {
  const { t } = useTranslation();

  function handleQuantityChange(id, quantity) {
    onQuantityChange && onQuantityChange(id, quantity);
  }

  function handleReferenceChange(id, reference) {
    onReferenceChange && onReferenceChange(id, reference);
  }

  function handleSelectAll(event) {
    onSelectAll && onSelectAll(event.target.checked);
  }

  const currency = data.length ? data[0].currency : "";
  const confirmedData = useMemo(() => data.filter(value => value.confirmed), [
    data
  ]);
  const isAllConfirmed = confirmedData.length === data.length;
  return (
    <Table className={classes.table}>
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
          <TableCell>{t("brand")}</TableCell>
          <TableCell>{t("part_number")}</TableCell>
          <TableCell>{t("price_with_currency", { currency })}</TableCell>
          <TableCell>{t("quantity")}</TableCell>
          <TableCell>{t("total_with_currency", { currency })}</TableCell>
          <TableCell>{t("weight_kg")}</TableCell>
          <TableCell>{t("booking")}</TableCell>
          <TableCell>{t("delivery")}</TableCell>
          <TableCell>{t("reference")}</TableCell>
          <TableCell>{t("description")}</TableCell>
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
            <TableCell>{value.brand}</TableCell>
            <TableCell>{value.partNumber}</TableCell>
            <TableCell>{value.price}</TableCell>
            <TableCell>
              <QuantityField
                className={classes.quantityField}
                id={value.id}
                quantity={value.quantity}
                onChange={handleQuantityChange}
              />
            </TableCell>
            <TableCell>{value.amount}</TableCell>
            <TableCell>{value.weightKg}</TableCell>
            <TableCell>{value.booking}</TableCell>
            <TableCell>
              {value.delivery} ({value.tariff})
            </TableCell>
            <TableCell>
              <StringField
                className={classes.referenceField}
                id={value.id}
                value={value.yourReference}
                onChange={handleReferenceChange}
              />
            </TableCell>
            <TableCell>{value.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

const styles = () => ({
  table: {
    width: "100%"
  },
  quantityField: {
    alignItems: "center"
  },
  referenceField: {
    alignItems: "center"
  },
  checkbox: {
    padding: 0
  }
});

export default withStyles(styles)(BasketTable);
