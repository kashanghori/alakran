import http from './http';

export const offers = async () => {
  const result = await http.get('/offers');
  return result.data;
};

export const brands = async (offer) => {
  const result = await http.get('/offers/brands', {
        params: { offer: offer },
    });
  return result.data;
};

export const resources = async (offer, brand) => {
  const result = await http.get('/offers/resources', {
        params: { offer: offer, brand: brand },
    });
  return result.data;
};


