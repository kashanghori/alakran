import axios from "axios";

// export const SMARTTRADE_API_URL = process.env.REACT_APP_SMARTTRADE_API_URL;
export const SMARTTRADE_API_URL = " http://www.alarkanautoparts.com:3030/api ";

export default axios.create({
  baseURL: SMARTTRADE_API_URL,
  withCredentials: true
});
