import axios from "axios";

const PP_API_URL = "https://api-gateway.sandbox.ngenius-payments.com";
const PP_API_KEY = "MTNkNDcwZTYtNGYxYy00YjQ3LWIxYzgtYjNmOTkyY2RiZmU2OmFlMTUwMmU1LWRiZGYtNGU1Zi1iYTVjLWMyMDVjNjU5MGMwMQ==";
const PP_OUTLET_REFERENCE = "8e976692-f5a1-486b-b32e-e1c7466932b4"

const $api = axios.create({
  baseURL: PP_API_URL,
  withCredentials: true
});

export const createOrder = async (amount, currency, email) => {
    let response = await $api.post("/identity/auth/access-token", null, {
      headers: {
        "Authorization": "Basic "+PP_API_KEY,
        "Content-Type": "application/vnd.ni-identity.v1+json"
      }
    });

    const {access_token} = response.data;

    response = await $api.post(`/transactions/outlets/${PP_OUTLET_REFERENCE}/orders`
      ,{action: "PURCHASE", amount: {currencyCode: currency, value: amount*100}, emailAddress: email}
      ,{
        headers: {
          "Authorization": "Bearer "+access_token,
          "Content-Type": "application/vnd.ni-payment.v2+json",
          "Accept": "application/vnd.ni-payment.v2+json"
        }
    });

    const url = response._links.payment;
    const reference = response.reference;

    return {url, reference};
};
