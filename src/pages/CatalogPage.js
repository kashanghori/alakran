import React, { useEffect, useState, useRef } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Page, CatalogTable, ActionsGroup, SelectFine } from "../components";
import * as offerApi from "../api/offer-api";
import { getCookie } from "../utils/cookies";

const CatalogPage = ({ classes }) => {
  const [isLoggedIn] = useState(!!getCookie("access_token"));

  const [offerList, setOfferList] = useState([]);
  const [offer, setOffer] = useState([]);
  const [offerData, setOfferData] = useState([]);

  const [brandList, setBrandList] = useState([]);
  const [brand, setBrand] = useState([]);

  const initialized = useRef(false);

  async function getOfferList() {
    setOfferList([]);
    const result = await offerApi.offers();

    setOfferList(
      result.map(row => ({
        title: row["text"],
        value: row["logo"]
      }))
    );

    if (result !== null && result.length !== 0) {
      setOffer(result[0].logo);
    }
  }

  async function getBrandList() {
    setBrandList([]);
    const result = await offerApi.brands();

    setBrandList(
      result.map(row => ({
        title: row["text"],
        value: row["logo"]
      }))
    );

    if (result !== null && result.length !== 0) setBrand(result[0].logo);
  }

  async function fetchOfferData(offer, brand) {
    setOfferData([]);

    const result = await offerApi.resources(offer, brand);
    setOfferData(result);
  }

  function handleOfferChange(value) {
    setOffer(value);
  }

  function handleBrandChange(value) {
    setBrand(value);
  }

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      if (!offerList || !offerList.length) getOfferList().then();

      if (!brandList || !brandList.length) getBrandList().then();
    }
  }, []);

  useEffect(() => {
    if (offer && brand) fetchOfferData(offer, brand).then();
  }, [offer, brand]);

  return (
    <Page>
      <ActionsGroup className={classes.searchContainer}>
        <SelectFine
          items={offerList}
          value={offer}
          label="Offer"
          onChange={handleOfferChange}
        />

        <SelectFine
          items={brandList}
          value={brand}
          label="Brand"
          onChange={handleBrandChange}
        />

        <div></div>
      </ActionsGroup>
      <div className={classes.tableContainer}>
        <CatalogTable data={offerData} isLoggedIn={isLoggedIn} />
      </div>
    </Page>
  );
};

const styles = theme => {
  const colors = theme.palette.custom.catalogPage;

  const searchContainer = {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing.unit,
    padding: `0 ${theme.spacing.unit}px`
  };

  return {
    actionsGroup: {
      justifyContent: "flex-end"
    },
    searchContainer: {
      ...searchContainer,
      justifyContent: "space-between"
    },
    showButton: {
      marginRight: theme.spacing.unit
    },
    tableContainer: theme.tableContainer
  };
};

export default withStyles(styles)(CatalogPage);
