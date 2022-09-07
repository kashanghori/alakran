import React, { useEffect, useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import { saveExcel } from "../utils/excel";
import { Button } from "@material-ui/core";
import {
  Page,
  BalanceTable,
  BalanceTotalTable,
  ActionsGroup,
  DatePicker,
  BalanceTransferDialog,
  BalanceTopupDialog
} from "../components";
import * as invoiceApi from "../api/invoice-api";
import * as balanceApi from "../api/balance-api";
import { APP_DATE_FORMAT, SERVER_DATE_FORMAT } from "../utils/date";
import { getCookie } from "../utils/cookies";

const BalancePage = ({ classes }) => {
  const [data, setData] = useState([]);
  const [balanceData, setBalanceData] = useState({});
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isBalTransDlgOpen] = useState(false);
  const [isBalTopupDlgOpen, setBalTopupDlgOpen] = useState(false);
  const [isLoggedIn] = useState(!!getCookie("access_token"));

  const { t, i18n } = useTranslation();
  const columns = useMemo(
    () => [
      { name: t("date"), width: 10 },
      { name: t("document"), width: 10 },
      { name: t("reference") },
      { name: t("debit"), width: 12 },
      { name: t("credit"), width: 12 },
      { name: t("weight_kg"), width: 11 },
      { name: t("volume_kg"), width: 11 }
    ],
    [i18n.language]
  );

  const outputData = useMemo(
    () =>
      data.map(value => [
        moment(value.aDate).format(APP_DATE_FORMAT),
        value.reference,
        value.aNumber,
        value.debet,
        value.credit,
        value.grossKG,
        value.volumeKG
      ]),
    [data]
  );

  async function fetchData() {
    const result = await invoiceApi.invoices({
      fromDate: startDate ? startDate.format(SERVER_DATE_FORMAT) : null,
      tillDate: endDate ? endDate.format(SERVER_DATE_FORMAT) : null
    });
    setData(result);
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchBalanceData();
      fetchData();
    }
  }, []);

  async function fetchBalanceData() {
    const result = await balanceApi.totals();
    setBalanceData(result);
  }

  function handleBalanceExport() {
    saveExcel("Balance", columns, outputData);
  }

  const invoiceExportColumns = useMemo(() => [
    { name: "Row", width: 5 },
    { name: "Brand", width: 15 },
    { name: "PartNumber", width: 15 },
    { name: "Description", width: 20 },
    { name: "Quantity", width: 10 },
    { name: "Price", width: 10 },
    { name: "Amount", width: 10 },
    { name: "TaxRate", width: 10 },
    { name: "TaxAmount", width: 10 },
    { name: "Currency", width: 10 },
    { name: "SubstNumber", width: 10 },
    { name: "SubstBrand", width: 10 },
    { name: "Origin", width: 10 },
    { name: "HSCode", width: 12 },
    { name: "WeightKG", width: 10 },
    { name: "VolumeKG", width: 10 },
    { name: "Box", width: 10 },
    { name: "Portion", width: 10 },
    { name: "Reference", width: 15 },
    { name: "Order", width: 10 }
  ]);

  async function handleInvoiceExport(invoice) {
    try {
      const details = await invoiceApi.invoiceDetails(invoice.id);

      if (!details.length) return;

      const data = details.map(value => [
        value.iRow,
        value.brand,
        value.partNumber,
        value.description,
        value.quantity,
        value.price,
        value.amount,
        value.rateTax,
        value.amountTax,
        value.currency,
        value.substitutedNumber,
        value.substitutedBrand,
        value.country,
        value.customsCode,
        value.weightKg,
        value.volumeKg,
        value.box,
        value.portion,
        value.reference,
        value.orderId
      ]);

      saveExcel(`Invoice_${invoice.aNumber}`, invoiceExportColumns, data);
    } catch {
      alert(t("cannot_export_invoice"));
    }
  }

  function handleFilterData() {
    fetchData();
  }

  function toggleBalTransDlg() {
    //setBalTransDlgOpen(!isBalTransDlgOpen);
    window.location.href = "/search/bank";
  }

  function toggleBalTopupDlg() {
    setBalTopupDlgOpen(!isBalTopupDlgOpen);
  }

  return (
    <Page>
      <div className={`${classes.centerContainer} search-table`}>
        <BalanceTotalTable data={balanceData} />
      </div>
      <ActionsGroup className={classes.actionsGroup}>
        <div className={classes.balanceActionsLeft}>
          <DatePicker
            className={`${classes.datePicker} balance-page`}
            classes={{
              input: classes.datePickerInput
            }}
            label={t("start_date")}
            value={startDate}
            InputLabelProps={{
              shrink: true
            }}
            onChange={setStartDate}
          />
          <DatePicker
            className={`${classes.datePicker} balance-page`}
            classes={{
              input: classes.datePickerInput
            }}
            label={t("end_date")}
            value={endDate}
            InputLabelProps={{
              shrink: true
            }}
            onChange={setEndDate}
          />
          <Button
            variant="contained"
            className={classes.showButton}
            onClick={handleFilterData}
          >
            {t("show")}
          </Button>
          <Button
            variant="contained"
            className={classes.exportButton}
            onClick={handleBalanceExport}
          >
            {t("export")}
          </Button>
        </div>
        {balanceData && balanceData.topupId && (
          <Button
            variant="contained"
            className={classes.topUpBalanceButton}
            onClick={toggleBalTopupDlg}
          >
            {t("topup_online")}
          </Button>
        )}
        <a href="/search/bank">
          <Button variant="contained" className={classes.bankTransferButton}>
            {t("bank_transfer")}
          </Button>
        </a>
      </ActionsGroup>
      <div className={`${classes.tableContainer} search-table`}>
        <BalanceTable
          columns={columns}
          data={outputData}
          originalData={data}
          onInvoiceExport={handleInvoiceExport}
        />
      </div>
      <BalanceTransferDialog
        open={isBalTransDlgOpen}
        onClose={toggleBalTransDlg}
      />
      <BalanceTopupDialog
        open={isBalTopupDlgOpen}
        onClose={toggleBalTopupDlg}
        balanceData={balanceData}
        isLoggedIn={isLoggedIn}
      />
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.balancePage;
  const balanceActionsItem = {
    marginRight: theme.spacing.unit
  };
  return {
    actionsGroup: {
      justifyContent: "flex-end"
    },
    centerContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "24px"
    },
    button: {
      backgroundColor: "#2C98F0",
      marginRight: "20px"
    },
    buttonsContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 24px"
    },
    balanceActionsLeft: {
      flex: "1 0 0px",
      display: "flex",
      alignItems: "center"
    },
    balanceActionsRight: {
      flex: "1 0 0px",
      display: "flex",
      justifyContent: "flex-end",
      height: "36px"
    },
    balanceActionsItem,
    datePicker: {
      ...balanceActionsItem,
      maxWidth: "120px"
    },
    datePickerInput: {
      height: "36px"
    },
    showButton: {
      marginRight: theme.spacing.unit,
      backgroundColor: "#C4C6C8",
      color: colors.showButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    topUpBalanceButton: {
      ...balanceActionsItem,
      marginRight: theme.spacing.unit,
      backgroundColor: "#C4C6C8",
      color: colors.topUpBalanceButton.fontColor,
      "&:hover": {
        backgroundColor: colors.topUpBalanceButton.hovered
      }
    },
    bankTransferButton: {
      ...balanceActionsItem,
      backgroundColor: "#C4C6C8",
      color: colors.topUpBalanceButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      },
      [theme.breakpoints.down("xs")]: {
        display: "none"
      }
    },
    exportButton: {
      backgroundColor: "#C4C6C8",
      color: colors.exportButton.fontColor,
      "&:hover": {
        backgroundColor: "red"
      }
    },
    tableContainer: theme.tableContainer
  };
};

export default withStyles(styles)(BalancePage);
