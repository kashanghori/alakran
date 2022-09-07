import http from './http';

export const deliveries = async (onlyActive, onlySorting) => {
  const result = await http.get('/delivery/tariffs', null, {
    params: {onlyActive: onlyActive, onlyInUse: onlySorting}
  });
  return result.data;
};
