import http from './http';

export const totals = async () => {
  const result = await http.get('/balance');
  return result.data;
};

export const topupVariants = async () => {
  const result = await http.get("/balance/topupVariants");
  return result.data;
};
