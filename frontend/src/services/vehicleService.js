import api from "./api";

export const getVehicles = async () => {
  const response = await api.get("/vehicles");
  return response.data;
};

export const searchVehicles = async (filters) => {
  const params = new URLSearchParams();

  if (filters.make.trim())
    params.append("make", filters.make);

  if (filters.model.trim())
    params.append("model", filters.model);

  if (filters.category.trim())
    params.append("category", filters.category);

  if (filters.minPrice)
    params.append("minPrice", filters.minPrice);

  if (filters.maxPrice)
    params.append("maxPrice", filters.maxPrice);

  const response = await api.get(
    `/vehicles/search?${params.toString()}`
  );

  return response.data;
};

export const purchaseVehicle = async (id) => {
  const response = await api.post(`/vehicles/${id}/purchase`);
  return response.data;
};

export const createVehicle = async (vehicleData) => {
  const response = await api.post("/vehicles", vehicleData);
  return response.data;
};

export const updateVehicle = async (id, vehicleData) => {
  const response = await api.put(`/vehicles/${id}`, vehicleData);
  return response.data;
};

export const deleteVehicle = async (id) => {
  const response = await api.delete(`/vehicles/${id}`);
  return response.data;
};

export const restockVehicle = async (id, quantity) => {
  const response = await api.post(`/vehicles/${id}/restock`, {
    quantity,
  });
  return response.data;
};