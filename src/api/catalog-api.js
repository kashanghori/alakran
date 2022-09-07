import http from './http';

export const catalogs = async () => {
  const result = await http.get('/catalogs');
  return result.data;
};

export const brands = async (catalog) => {
  const result = await http.get('/catalogs/brands', {
        params: { catalog: catalog },
    });
  return result.data;
};

export const resources = async (catalog, brand) => {
  const result = await http.get('/catalogs/resources', {
        params: { catalog: catalog, brand: brand },
    });
  return result.data;
};


