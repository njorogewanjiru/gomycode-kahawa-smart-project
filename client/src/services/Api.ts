import axios from "axios";
import type { FarmData } from "../types/Farm";

// Users
export const fetchUsers = async () => {
  const response = await axios.get("/api/users");

  // Ensure the response is an array
  if (!Array.isArray(response.data)) {
    console.error("fetchUsers: Expected array but got:", response.data);
    return [];
  }

  return response.data;
};

export const deleteUser = async (id: string) => {
  await axios.delete(`/api/users/${id}`);
};

// Farms
export const getFarms = async () => {
  const response = await axios.get("/api/farms");

  // Ensure the response is an array
  if (!Array.isArray(response.data)) {
    console.error("getFarms: Expected array but got:", response.data);
    return [];
  }

  return response.data;
};

export const createFarm = async (farmData: FarmData) => {
  console.log("Sending farm data to backend:", farmData);
  const response = await axios.post("/api/farms", farmData);
  return response.data;
}; // ✅ This closing brace was missing

export const updateFarm = async (
  id: string,
  updatedData: { name: string; area?: number }
) => {
  const response = await axios.put(`/api/farms/${id}`, updatedData);
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
