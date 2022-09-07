import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import {
  Page,
  ShipmentsTable,
  ShipmentsTotalTable,
  ShipmentDateDialog
} from "../components";
import * as ordersApi from "../api/order-api";
import * as shipmentApi from "../api/shipment-api";
import { getCookie } from "../utils/cookies";

const ShipmentsPage = ({ classes }) => {
  const [isLoggedIn] = useState(!!getCookie("access_token"));
  const [totals, setTotals] = useState([]);
  const [shipDateItem, setShipDateItem] = useState(null);
  const [boxes, setBoxes] = useState([]);
  const [boxItems, setBoxItems] = useState([]);
  const [delivery, setDelivery] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    if (isLoggedIn) fetchTotals();
  }, []);

  useEffect(() => {
    if (isLoggedIn) if (delivery) fetchBoxes(delivery);
  }, [delivery]);

  async function fetchTotals() {
    const result = await ordersApi.readyTotals();
    if (result.length) {
      setDelivery(result[0].delivery);
      setTotals(result);
    } else {
      setDelivery(null);
      setTotals([]);
    }
  }

  async function fetchBoxes(delivery) {
    const result = await ordersApi.readyBoxes(delivery);
    setBoxes(result);
  }

  async function fetchBoxItems(boxId) {
    const result = await ordersApi.readyItems(boxId);
    setBoxItems([...boxItems.filter(item => item.boxId !== boxId), ...result]);
  }

  function handleRowUnfold(boxId) {
    fetchBoxItems(boxId);
  }

  async function handleDeliverySelect(delivery) {
    setDelivery(delivery);
  }

  async function handleShipmentDateClick(totalsItem) {
    setShipDateItem(totalsItem);
  }

  async function handleShipmentDateChange(date, enabled) {
    try {
      const result = await shipmentApi.order(shipDateItem.shipmentId, {
        enabled,
        delivery: shipDateItem.delivery,
        schedule: enabled ? date : undefined
      });
      setTotals(
        totals.map(item =>
          item.delivery !== shipDateItem.delivery
            ? item
            : {
                ...shipDateItem,
                shipmentDate: enabled ? result[0].schedule : null,
                shipmentId: enabled ? result[0].id : null
              }
        )
      );
    } catch {
      alert(t("cannot_update_shipment_date"));
    }

    setShipDateItem(null);
  }

  function handleDialogClose() {
    setShipDateItem(null);
  }

  return (
    <Page>
      <div className={`${classes.totalTableContainer} search-table`}>
        <ShipmentsTotalTable
          data={totals}
          delivery={delivery}
          onSelect={handleDeliverySelect}
          onShipmentDateClick={handleShipmentDateClick}
        />
      </div>
      <div className={`${classes.tableContainer} search-table`}>
        <ShipmentsTable
          boxes={boxes}
          boxItems={boxItems}
          onUnfold={handleRowUnfold}
        />
      </div>
      {!!shipDateItem && (
        <ShipmentDateDialog
          defaultDate={shipDateItem.shipmentDate}
          onSubmit={handleShipmentDateChange}
          onClose={handleDialogClose}
        />
      )}
    </Page>
  );
};

const styles = theme => {
  return {
    tableContainer: theme.tableContainer,
    totalTableContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px"
    }
  };
};

export default withStyles(styles)(ShipmentsPage);
