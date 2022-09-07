import http from './http';

export const currencies = async () => {
  const result = await http.get('/dictionary/currencies');
  return result.data;
};

export const countries = async () => {
  const result = await http.get('/dictionary/countries');
  return result.data;
};

export const languages = async () => {
  const result = await http.get('/dictionary/languages');
  return result.data;
};


