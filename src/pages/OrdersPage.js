import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as orderApi from "../api/order-api";
import { getCookie } from "../utils/cookies";
import {
  Page,
  OrdersTable,
  ActionsGroup,
  SearchInputWithSelect,
  Spinner
} from "../components";
import { saveExcel } from "../utils/excel";

const OrdersPage = ({ classes }) => {
  const { t } = useTranslation();

  const filterTypes = [
    { title: t("part_number"), value: 1 },
    { title: t("order_number"), value: 2 },
    { title: t("reference"), value: 3 }
  ];

  const [isLoggedIn] = useState(!!getCookie("access_token"));
  const [data, setData] = useState([]);
  const [filterType, setFilterType] = useState(filterTypes[0].value);
  const [filter, setFilter] = useState("");
  const [progress, setProgress] = useState(false);


  async function fetchData(query) {
    setProgress(true);
    try {
      const result = await orderApi.states(query);
      setData(result);
    }
    finally {
      setProgress(false);
    }

  }

  useEffect(() => {
    if (isLoggedIn) fetchData();
  }, [isLoggedIn]);

  function handleSearchTypeChange(value) {
    setFilterType(value);
  }

  function handleFilterChange(value) {
    setFilter(value.trim().toLowerCase());
  }

  function handleSearch() {
    setData([]);
    const query = {};
    if (filter)
      switch (filterType) {
        case 1:
          query.partNumber = filter;
          break;
        case 2:
          query.id = filter;
          break;
        case 3:
          query.yourReference = filter;
          break;
        case 4:
          query.yourOrderId = filter;
          break;
      }
    fetchData(query);
  }

  function handleAllClick() {
    setFilter("");
    setData([]);
    fetchData();
  }

  const columns = useMemo(() => [
    { name: "Order", width: 10 },
    { name: "Date", width: 15 },
    { name: "PartNumber", width: 15 },
    { name: "Brand", width: 15 },
    { name: "Order Price", width: 10 },
    { name: "Sale Price", width: 10 },
    { name: "Currency", width: 10 },
    { name: "InWork", width: 10 },
    { name: "Ordered", width: 10 },
    { name: "Confirmed", width: 10 },
    { name: "To Dispatch", width: 10 },
    { name: "Dispatched", width: 10 },
    { name: "Refused", width: 10 },
    { name: "Reference", width: 20 },
    { name: "Description", width: 50 },
    { name: "State Date", width: 15 }
  ]);

  const outputData = useMemo(
    () =>
      data.map(value => [
        value.orderId,
        value.orderDate.slice(0, 10),
        value.partNumber,
        value.brand,
        value.priceOrder,
        value.priceSale,
        value.currency,
        value.inwork,
        value.ordered,
        value.purchased,
        value.accepted,
        value.shipped,
        value.refused,
        value.yourReference,
        value.description,
        value.stateDate.slice(0, 16).replace("T", " ")
      ]),
    [data]
  );

  async function handleToExcel() {
    await saveExcel("OrdersStates", columns, outputData);
  }

  return (
    <Page>
      <ActionsGroup>
        <Button
          variant="contained"
          // color="primary"
          className={classes.button}
          onClick={handleAllClick}
        >
          {t("all")}
        </Button>
        <SearchInputWithSelect
          className={classes.searchInput}
          selectItems={filterTypes}
          selectValue={filterType}
          searchValue={filter}
          onSelectChange={handleSearchTypeChange}
          onSearchClick={handleSearch}
          onSearchChange={handleFilterChange}
        />
        <Button
          disabled={!data.length}
          variant="contained"
          // color="primary"
          className={classes.excelButton}
          onClick={handleToExcel}
        >
          {t("export")}
        </Button>
      </ActionsGroup>
      {progress ? (
        <div className={classes.spinnerContainer}>
          {progress ? <Spinner /> : null};
        </div>
      ) : (
      <div className={`${classes.tableContainer} search-table`}>
        <OrdersTable data={data} />
      </div>
    )}
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.ordersPage;
  return {
    searchContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#BEC2C4",
      minHeight: "64px",
      padding: "0 24px"
    },
    tableContainer: theme.tableContainer,
    spinnerContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#BEC2C4",
      minHeight: "64px",
      padding: "0 24px",
      marginTop: theme.spacing.unit * 6,
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    button: {
      backgroundColor: "#C4C6C8",
      color: "#fff",
      "&:hover": {
        backgroundColor: "red"
      }
    },
    excelButton: {
      marginLeft: theme.spacing.unit
    },
    searchInput: {
      marginLeft: theme.spacing.unit
    }
  };
};

export default withStyles(styles)(OrdersPage);
