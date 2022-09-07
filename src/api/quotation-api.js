import http from './http';

/*
  Quotation
 */
export const process = async (query, maxDays, onlyBest, currency, quotationId) => {
  const response = await http.post('/quotation/process', query, {
    params: {
        maxDays: maxDays,
        onlyDays: false,
        onlyBest: onlyBest,
        currency: currency,
        quotationId: quotationId
    },
  });
  return response.data;
};

export const confirm = async (quotationId, data) => {
  await http.post('/quotation/confirm', data, {
    params: { quotationId },
  });
};

export const toBasket = async (quotationId) => {
  await http.post('/quotation/toBasket', null, {
    params: { quotationId },
  });
};

export const confirmAndToBasket = async (quotationId, data = []) => {
  //if (!data.length) return;
  //await confirm(quotationId, data);
  await confirm(quotationId, data.map(value => {return {id:value.id, quantity:value.quantity}}));
  await toBasket(quotationId);
};

export const select  = async (quotationId, currency) => {

    const response = await http.get('/quotation/select', {
        params: {quotationId: quotationId, currency: currency}
    });

    return response.data;
};
