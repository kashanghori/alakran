import http from './http';

/*
  Shipment
 */
export const order = async (id, data) => {
  const response = await http.put('/shipments/order', data, {
    params: { id }
  });
  return response.data;
};
