import http from "./http";

export const totals = async () => {
  const result = await http.get("/balance");
  return result.data;
};

export const topupVariants = async () => {
  const result = await http.get("/balance/topupVariants");
  return result.data;
};
export const importFile = async (file, token) => {
  const result = await http.post(
    "/balance/importStocks",
    { file },
    {
      params: {
        access_token: token
      }
    }
  );
  return result;
};
