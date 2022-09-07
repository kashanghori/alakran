import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { saveExcel } from "../utils/excel";
import * as basketApi from "../api/basket-api";
import * as balanceApi from "../api/balance-api";
import { getCookie } from "../utils/cookies";

import {
  Page,
  BasketTable,
  BasketTotalTable,
  ActionsGroup,
  MessageDialog
} from "../components";

const BasketPage = ({ classes }) => {
  const [isLoggedIn] = useState(!!getCookie("access_token"));
  const [data, setData] = useState([]);
  const [totalData, setTotalData] = useState({});
  const [isUpdating, setUpdating] = useState(false);
  const [message, setMessage] = useState({});
  const [isMessageDialogOpen, setMessageDialogOpen] = useState(false);

  const { t } = useTranslation();

  const confirmedData = useMemo(() => data.filter(item => item.confirmed), [
    data
  ]);

  const isDisabled = isUpdating || !confirmedData.length;

  useEffect(() => {
    if (isLoggedIn) fetchAll();
  }, [isLoggedIn]);
  /*
  useEffect(() => {
    if (totalData.balance === undefined) return;
    const items = data.filter(item => item.confirmed);
    const total = {
      itemsForOrder: items.length,
      readyForOrder: roundTo(items.reduce((acc, item) => acc + item.amount, 0)),
      topupForOrder: 0,
      weightForOrder: roundTo(
        items.reduce((acc, item) => acc + item.quantity * item.weightKg, 0),
        3
      )
    };
    total.topupForOrder = roundTo(
      -Math.min(totalData.availForOrder - total.readyForOrder, 0)
    );

    setTotalData({ ...totalData, ...total });
  }, [data]);
*/
  async function fetchData() {
    const result = await basketApi.select();
    setData(result);
  }

  async function fetchTotalData() {
    const balance = await balanceApi.totals();
    setTotalData(balance);
  }

  async function fetchAll() {
    await fetchTotalData();
    await fetchData();
  }

  async function confirmItems(items, confirmed) {
    try {
      setUpdating(true);
      await basketApi.confirm(items, confirmed);
      await fetchAll();
      //await fetchData();
      setUpdating(false);
    } catch {
      alert(t("cannot_select_item"));
      setUpdating(false);
    }
  }

  async function handleTableSelect(id) {
    const selectedItem = data.find(value => value.id === id);
    await confirmItems([selectedItem], !selectedItem.confirmed);
  }

  async function handleTableSelectAll(selectAll) {
    await confirmItems(data, selectAll);
  }

  function handleMessageDialogClose() {
    setMessageDialogOpen(false);
  }

  function showMessageDialog(aMsg) {
    setMessage(aMsg);
    setMessageDialogOpen(true);
  }

  async function handleQuantityChange(id, quantity) {
    let oldItem = null;
    let itemIndex = -1;
    try {
      setUpdating(true);
      itemIndex = data.findIndex(value => value.id === id);
      oldItem = data[itemIndex];
      if (!itemIndex < 0) return;

      const newItem = {
        ...data[itemIndex],
        quantity
      };

      // Apply changes in advance
      setData([
        ...data.slice(0, itemIndex),
        newItem,
        ...data.slice(itemIndex + 1)
      ]);

      await basketApi.addUpdate([newItem]);
      setUpdating(false);
    } catch (e) {
      alert(t("cannot_change_quantity"));

      // Revert changes
      if (itemIndex >= 0)
        setData([
          ...data.slice(0, itemIndex),
          oldItem,
          ...data.slice(itemIndex + 1)
        ]);

      setUpdating(false);
    }
    try {
      await fetchTotalData();
    } catch {
      // empty
    }
  }

  async function handleReferenceChange(id, reference) {
    let oldItem = null;
    let itemIndex = -1;
    try {
      setUpdating(true);
      itemIndex = data.findIndex(value => value.id === id);
      oldItem = data[itemIndex];
      if (!itemIndex < 0) return;

      const newItem = {
        ...data[itemIndex],
        yourReference: reference
      };

      // Apply changes in advance
      setData([
        ...data.slice(0, itemIndex),
        newItem,
        ...data.slice(itemIndex + 1)
      ]);

      await basketApi.addUpdate([newItem]);
      setUpdating(false);
    } catch (e) {
      alert(t("cannot_apply_changes"));

      // Revert changes
      if (itemIndex >= 0)
        setData([
          ...data.slice(0, itemIndex),
          oldItem,
          ...data.slice(itemIndex + 1)
        ]);

      setUpdating(false);
    }
    /*
    try {
      await fetchData();
    } catch {
      // empty
    }
     */
  }
  /*
  async function handleOrderClick() {
    try {
      await basketApi.toOrder();
      await fetchData();
    } catch (e) {
      alert("Cannot order selected due to the error");
    }
  }
*/
  async function handleOrderClick() {
    try {
      const res = await basketApi.toOrder();

      try {
        if (res !== null && res.length !== 0) {
          if (parseInt(res[0].orderId) > 0)
            showMessageDialog(
              t("order_accepted", {
                orderId: res[0].orderId,
                currency: res[0].currency,
                amount: res[0].amount
              })
            );
          else if (res[0].orderId === "-1")
            showMessageDialog(t("activate_account"));
          else if (res[0].orderId === "-2")
            showMessageDialog(t("insufficient_funds"));
          else if (res[0].orderId === "-3") showMessageDialog(t("no_items"));
          else
            showMessageDialog(
              t("order_not_accepted", { orderId: res[0].orderId })
            );
        }
      } catch (e) {}

      await fetchData();
    } catch (e) {
      alert(t("cannot_order_selected"));
    }
  }

  async function handleDeleteClick() {
    try {
      await basketApi.delete_(confirmedData);
      await fetchData();
    } catch (err) {
      alert(t("cannot_delete_selected"));
    }
  }

  const columns = useMemo(() => [
    { name: "Brand", width: 15 },
    { name: "PartNumber", width: 15 },
    { name: "Price", width: 10 },
    { name: "Quantity", width: 10 },
    { name: "Total", width: 10 },
    { name: "Currency", width: 10 },
    { name: "WeightKG", width: 15 },
    { name: "Booking", width: 8 },
    { name: "Delivery", width: 10 },
    { name: "Reference", width: 15 },
    { name: "Description", width: 20 },
    { name: "ToOrder", width: 8 }
  ]);

  const outputData = useMemo(
    () =>
      data.map(value => [
        value.brand,
        value.partNumber,
        value.price,
        value.quantity,
        value.amount,
        value.currency,
        value.weightKg,
        value.booking,
        value.tariff,
        value.description,
        value.yourReference,
        value.confirmed ? "yes" : ""
      ]),
    [data]
  );

  async function handleToExcel() {
    await saveExcel("Basket", columns, outputData);
  }

  return (
    <Page>
      <div className={`${classes.totalTableContainer} search-table`}>
        <BasketTotalTable data={totalData} />
      </div>
      <ActionsGroup className={classes.actionsGroup}>
        <ActionsGroup>
          <Button
            className={classes.orderButton}
            variant="contained"
            color="primary"
            disabled={isDisabled}
            onClick={handleOrderClick}
          >
            {t("order")}
          </Button>
          <Button
            className={classes.deleteButton}
            variant="contained"
            disabled={isDisabled}
            onClick={handleDeleteClick}
          >
            {t("remove")}
          </Button>
        </ActionsGroup>
        <Button
          disabled={!data.length}
          className={classes.excelButton}
          variant="contained"
          color="default"
          onClick={handleToExcel}
        >
          {t("export")}
        </Button>
      </ActionsGroup>
      <div className={`${classes.tableContainer} search-table`}>
        <BasketTable
          data={data}
          onQuantityChange={handleQuantityChange}
          onReferenceChange={handleReferenceChange}
          onSelect={handleTableSelect}
          onSelectAll={handleTableSelectAll}
        />
      </div>
      {isMessageDialogOpen && (
        <MessageDialog onClose={handleMessageDialogClose} message={message} />
      )}
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.basketPage;

  return {
    totalTableContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px"
    },
    tableContainer: theme.tableContainer,
    actionsGroup: {
      justifyContent: "space-between"
    },
    buttonsContainer: {
      display: "flex",
      alignItems: "center",
      padding: "0 24px"
    },
    orderButton: {
      marginRight: theme.spacing.unit,
      backgroundColor: colors.orderButton.default,
      color: colors.orderButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    deleteButton: {
      backgroundColor: colors.deleteButton.default,
      color: colors.deleteButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    }
  };
};

export default withStyles(styles)(BasketPage);
