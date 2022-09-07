import http from './http';

export const invoices = async (params) => {
  const result = await http.get('/balance/statement', { params });
  return result.data;
};

export const invoiceDetails = async (invoiceId) => {
  const result = await http.get('/balance/document', { params: { id: invoiceId } });
  return result.data;
};
