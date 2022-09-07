import React, { useEffect, useMemo, useState, useRef } from "react";
import querystring from "querystring";
import { withStyles } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import * as quotationApi from "../api/quotation-api";
import * as deliveryApi from "../api/delivery-api";
import * as dictionaryApi from "../api/dictionary-api";
import { parseQuotationExcel } from "../utils/excel";
import { saveExcel } from "../utils/excel";
import { getCookie } from "../utils/cookies";
import { setCookie } from "../utils/cookies";

import { Button, Tabs, Tab, Typography } from "@material-ui/core";
import {
  Page,
  SearchInput,
  SearchTable,
  ActionsGroup,
  Select,
  SelectFine,
  Spinner
} from "../components";

const isBetween = (value, range) => value >= range[0] && value <= range[1];

const deliveryTermLimit = [
  { title: "1", value: 1 },
  { title: "4", value: 4 },
  { title: "7", value: 7 },
  { title: "14", value: 14 },
  { title: "30", value: 30 },
  { title: "60", value: 60 },
  { title: "180", value: 180 }
];

const SearchPage = ({ classes, history, location }) => {
  const [isLoggedIn] = useState(!!getCookie("access_token"));
  const [search, setSearch] = useState("8532126020");
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const [deliveryTerm, setDeliveryTerm] = useState(4);
  const [tab, setTab] = useState(0);
  const [isFileUploading, setFileUploading] = useState(false);

  const [deliveryTariffList, setDeliveryTariffList] = useState([]);
  const [deliveryTariff, setDeliveryTariff] = useState(undefined);

  const [currencyList, setCurrencyList] = useState([]);
  const [currency, setCurrency] = useState(undefined);

  const initialized = useRef(false);

  const [lastQuotationId, setLastQuotationId] = useState(0);

  const [showWarn, setShowWarn] = useState(0);

  const [progress, setProgress] = useState(false);

  async function getDeliveryTariffList() {
    setDeliveryTariffList([]);
    const result = await deliveryApi.deliveries(true, false);

    setDeliveryTariffList(
      result.map(row => ({
        title: row["text"],
        value: row["id"]
      }))
    );

    if (result && result.length !== 0) {
      setDeliveryTariff(result[0].id);
    }
  }

  async function getCurrencyList() {
    const result = await dictionaryApi.currencies();

    setCurrencyList(
      result.map(row => ({
        title: row["code"],
        value: row["code"]
      }))
    );

    if (result.length !== 0) setCurrency(result[0].code);
  }

  const openFileDialog = useRef();

  const columns = useMemo(() => [
    { name: "Brand", width: 15 },
    { name: "PartNumber", width: 15 },
    { name: "Substituted", width: 15 },
    { name: "Description", width: 20 },
    { name: "Quantity", width: 10 },
    { name: "Price", width: 10 },
    { name: "WeightKg", width: 10 },
    { name: "Reference", width: 15 },
    { name: "Booking" },
    { name: "Days" },
    { name: "Currency" },
    { name: "yourPrice" },
    { name: "yourQuantity" },
    { name: "yourDays" },
    { name: "Comment" },
    { name: "StockInfo" }
  ]);

  const outputData = useMemo(
    () =>
      data
        .filter(value => value.confirmed)
        .map(value => [
          value.brand,
          value.partNumber,
          value.price && value.inpPartNumber !== value.partNumber
            ? value.inpPartNumber
            : "",
          value.description,
          value.quantity &&
          (!value.available || value.quantity <= value.available)
            ? value.quantity
            : value.available,
          value.price,
          value.weightKg,
          value.yourReference,
          value.booking,
          value.days,
          value.currency,
          value.price && value.inpPrice < value.price ? value.inpPrice : "",
          value.price && value.inpQuantity > value.available
            ? value.inpQuantity
            : "",
          value.price && value.inpDays < value.days ? value.inpDays : "",
          value.errDesc || "",
          value.stock
        ]),
    [data]
  );

  /**
   * Searching for part number
   */
  useEffect(() => {
    setLastQuotationId(null);
    setData([]);
    if (deliveryTariff) fetchDataBySearch();
  }, [location.search, deliveryTariff]);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (!deliveryTariffList || !deliveryTariffList.length)
        getDeliveryTariffList().then();

      if (!currencyList || !currencyList.length) getCurrencyList().then();
    }
  }, []);

  useEffect(() => {
    fetchOnly().then();
  }, [currency]);

  useEffect(() => {
    setLastQuotationId(null);
    setData([]);
  }, [deliveryTerm, tab]);

  async function fetchData(query, maxDays, onlyBest) {
    setData([]);
    setShowWarn(0);

    let result = [];

    setProgress(true);
    try {
      result = await quotationApi.process(query, maxDays, onlyBest, currency);
    } finally {
      setProgress(false);
    }

    let warn = 0;
    result.forEach(item => {
      item.confirmed = true;
      if (warn < item.err) warn = item.err;
    });

    setShowWarn(warn);
    setData(result);

    if (result && result.length) {
      const { quotationId } = result[0];
      setLastQuotationId(quotationId);
    }
  }

  async function fetchOnly() {
    if (lastQuotationId) {
      let warn = 0;
      let result = [];

      setProgress(true);
      try {
        result = await quotationApi.select(lastQuotationId, currency);

        result.forEach(item => {
          const oldItem = data.find(old => old.id === item.id);
          if (oldItem) {
            item.confirmed = oldItem.confirmed;
            item.quantity = oldItem.quantity;

            if (item.err > warn) warn = item.err;
          }
        });
      } catch (e) {}

      setProgress(false);
      setShowWarn(warn);
      setData(result);
    }
  }

  function handleChangeCurrency(value) {
    setCurrency(value);
    setCookie("currency", value);
  }

  function fetchDataBySearch() {
    const params = querystring.parse(location.search.slice(1));
    if (params.part !== undefined) {
      setSearch(params.part);
      fetchData(
        [{ partNumber: params.part, delivery: deliveryTariff }],
        0,
        false
      ).then();
    }
  }

  function handleSearchInputChange(value) {
    setSearch(value);
  }

  function handleSearchInputSearch() {
    const params = querystring.parse(location.search.slice(1));
    if (params.part === search) {
      fetchDataBySearch();
    } else {
      history.push({
        pathname: "/search",
        search: `?part=${search}`
      });
    }
  }

  function handleDataChange(data) {
    setData(data);
  }

  async function handleTableSelect(id) {
    const newData = data.map(item => {
      return item.id !== id ? item : { ...item, confirmed: !item.confirmed };
    });
    setData(newData);
  }

  async function handleTableSelectAll(confirmed) {
    const newData = data.map(item => {
      return { ...item, confirmed };
    });
    setData(newData);
  }

  async function handleToBasket() {
    if (isLoggedIn)
      try {
        const { quotationId } = data[0];
        if (quotationId && quotationId > 0) {
          await quotationApi.confirmAndToBasket(
            quotationId,
            data.filter(value => value.confirmed && value.quantity > 0)
          );
          setData([]);
          setLastQuotationId(null);
        }
      } catch (e) {
        //alert(e.message);
        //empty
      }
  }

  async function handleToExcel() {
    await saveExcel("Quotation", columns, outputData);
  }

  function handleTabChange(event, value) {
    setTab(value);
  }

  function handleFileOpen() {
    openFileDialog.current.click();
  }

  function handleDeliveryTermChange(value) {
    setDeliveryTerm(value);
  }

  function handleDeliveryTariffChange(value) {
    setDeliveryTariff(value);
  }

  async function handleQuotationExcel(event) {
    setFileUploading(true);
    setProgress(true);
    let excelData = [];
    try {
      const file = event.target.files[0];
      event.target.value = "";
      if (!file) return;
      excelData = await parseQuotationExcel(file);
    } catch (err) {
      alert(err.message);
    }

    if (!excelData.length) {
      setFileUploading(false);
      return;
    }
    try {
      await fetchData(
        excelData.map(row => ({
          partNumber: row["PartNumber"],
          brand: row["Brand"],
          quantity: row["Quantity"],
          price: row["Price"],
          yourReference: row["Reference"],
          booking: row["Booking"],
          delivery: deliveryTariff
        })),
        deliveryTerm,
        true
      );

      setProgress(false);
      setFileUploading(false);
    } catch (err) {
      setProgress(false);
      alert("Cannot process quotation due to the error");
      setFileUploading(false);
    }
  }

  return (
    <Page>
      <Tabs
        className={classes.tabs}
        value={tab}
        centered
        onChange={handleTabChange}
      >
        <Tab
          label={t("by_part_number")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
        <Tab
          label={t("by_excel_file")}
          classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
        />
      </Tabs>

      {tab === 0 ? (
        <div className={classes.searchContainer}>
          <SearchInput
            value={search}
            onChange={handleSearchInputChange}
            onSearch={handleSearchInputSearch}
          />
        </div>
      ) : (
        <div className={classes.searchContainerByFile}>
          <Button
            disabled={isFileUploading}
            className={classes.leftButton}
            variant="contained"
            onClick={handleFileOpen}
          >
            {t("upload")}
          </Button>
          <input
            ref={openFileDialog}
            type="file"
            hidden
            style={{ height: 0, width: 0 }}
            accept=".xlsx"
            onChange={handleQuotationExcel}
          />

          <div className={classes.deliveryTermContainer}>
            <Typography className={classes.deliveryTermLabel} variant="body1">
              {t("max_days")}:
            </Typography>
            <Select
              items={deliveryTermLimit}
              value={deliveryTerm}
              onChange={handleDeliveryTermChange}
              className="max-days"
            />
          </div>

          <Button
            className={classes.rightButton}
            variant="contained"
            component="a"
            href="/quote_template.xlsx"
            download
          >
            {t("template")}
          </Button>
        </div>
      )}

      <ActionsGroup className={classes.actionsGroup}>
        <Button
          disabled={!data.length || isFileUploading || !isLoggedIn}
          className={classes.basketButton}
          variant="contained"
          color="primary"
          onClick={handleToBasket}
        >
          {t("to_cart")}
        </Button>

        <SelectFine
          items={deliveryTariffList}
          value={deliveryTariff}
          /*label="Dispatch"*/
          onChange={handleDeliveryTariffChange}
        />

        <SelectFine
          items={currencyList}
          value={currency}
          /*label='Currency'*/
          onChange={handleChangeCurrency}
        />

        <Button
          disabled={!data.length || isFileUploading}
          className={classes.excelButton}
          variant="contained"
          color="default"
          onClick={handleToExcel}
        >
          {t("export")}
        </Button>
      </ActionsGroup>

      {showWarn ? (
        <div className={classes.warnPanel}>
          <Typography className={classes.warnLabel} variant="h6">
            {showWarn === 5 ? (
              <div>
                {isLoggedIn
                  ? t("demo_prices_complete_registration")
                  : t("demo_prices_log_in")}
                {isLoggedIn ? (
                  <a href="mailto:sales@alarkangt.com">SALES@ALARKANGT.COM</a>
                ) : null}
              </div>
            ) : (
              <div>
                SOME ITEMS YOU CAN PURCHASE WITH NEW LEAD TIMES, PRICES OR
                QUANTITIES. KINDLY CHECK
              </div>
            )}
          </Typography>
        </div>
      ) : null}

      {progress ? (
        <div className={classes.spinnerContainer}>
          {progress ? <Spinner /> : null};
        </div>
      ) : (
        <div className={classes.tableContainer}>
          <SearchTable
            data={data}
            showReference={tab === 1}
            onDataChange={handleDataChange}
            onSelect={handleTableSelect}
            onSelectAll={handleTableSelectAll}
            isLoggedIn={isLoggedIn}
          />
        </div>
      )}
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.searchPage;
  const searchContainer = {
    display: "flex",
    alignItems: "center",
    backgroundColor: colors.tabSelectedBackground,
    height: "72px",
    minHeight: "72px",
    marginBottom: theme.spacing.unit,
    padding: `0 ${theme.spacing.unit}px`
  };
  return {
    tabs: {
      minHeight: 40
    },
    tabRoot: {
      backgroundColor: colors.tabBackground,
      opacity: 1,
      minHeight: 40
    },
    tabSelected: {
      backgroundColor: colors.tabSelectedBackground,
      color: "#fff"
    },
    searchContainer: {
      ...searchContainer,
      justifyContent: "center"
    },
    searchContainerByFile: {
      ...searchContainer,
      justifyContent: "space-between"
    },
    deliveryTermContainer: {
      flex: "1 0 0px",
      display: "flex",
      alignItems: "center",
      marginLeft: theme.spacing.unit
    },
    deliveryTermLabel: {
      color: colors.deliveryTermLabel,
      marginRight: theme.spacing.unit
    },
    actionsGroup: {
      justifyContent: "space-between"
    },
    basketButton: {
      marginRight: theme.spacing.unit,
      backgroundColor: colors.basketButton.default,
      color: colors.basketButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    excelButton: {},
    tableContainer: theme.tableContainer,
    spinnerContainer: {
      ...searchContainer,
      marginTop: theme.spacing.unit * 6,
      justifyContent: "center",
      backgroundColor: "transparent"
    },
    nextContainer: {
      marginLeft: theme.spacing.unit
    },
    downContainer: {
      marginTop: theme.spacing.unit
    },
    leftButton: {
      marginLeft: theme.spacing.unit
    },
    rightButton: {},
    whiteControl: {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "red"
      }
    },
    warnPanel: {
      backgroundColor: colors.table.selectedRow,
      textAlign: "center",
      minHeight: 30,
      padding: "10px",
      marginBottom: theme.spacing.unit
    },
    warnLabel: {
      color: "black"
    }
  };
};

export default withStyles(styles)(SearchPage);
