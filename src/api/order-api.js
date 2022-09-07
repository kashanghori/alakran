import http from './http';

export const orders = async () => {
  const result = await http.get('/orders');
  return result.data;
};

export const readyBoxes = async (delivery) => {
  const result = await http.get('/orders/ready/boxes', {
    params: { delivery },
  });
  return result.data;
};

export const readyItems = async (boxId) => {
  const result = await http.get('/orders/ready/items', {
    params: {
      boxId
    },
  });
  return result.data;
};

export const readyTotals = async () => {
  const result = await http.get('/orders/ready/totals');
  return result.data;
};

export const states = async (query) => {
  const result = await http.get('/orders/states', {
        params: query
    }
  );
  return result.data;
};
