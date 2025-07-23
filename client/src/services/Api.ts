import axios from "axios";
import type { FarmData } from "../types/Farm";

// Set Axios base URL once for cleaner code
axios.defaults.baseURL = "http://localhost:5000/api"; // ✅ Pointing to backend

// Users
export const fetchUsers = async () => {
  const response = await axios.get("/users");

  if (!Array.isArray(response.data)) {
    console.error("fetchUsers: Expected array but got:", response.data);
    return [];
  }

  return response.data;
};

export const deleteUser = async (id: string) => {
  await axios.delete(`/users/${id}`);
};

// Farms
export const getFarms = async () => {
  const response = await axios.get("/farms");

  if (!Array.isArray(response.data)) {
    console.error("getFarms: Expected array but got:", response.data);
    return [];
  }

  return response.data;
};

export const createFarm = async (farmData: FarmData) => {
  console.log("Sending farm data to backend:", farmData);
  const response = await axios.post("/farms", farmData);
  return response.data;
};

export const updateFarm = async (
  id: string,
  updatedData: { name: string; area?: number }
) => {
  const response = await axios.put(`/farms/${id}`, updatedData);
  return response.data;
};

// Optional: export everything under a default object
export default {
  fetchUsers,
  deleteUser,
  getFarms,
  createFarm,
  updateFarm,
};
