import axios from "axios";
import type { User } from "../types";

// Get all users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("/api/users");
  return response.data;
};


// Get a single user by ID
export const fetchUserById = async (id: string): Promise<User> => {
  const response = await axios.get<User>(`/api/users/${id}`);
  return response.data;
};


// Update a user
export const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const response = await axios.put<User>(`/api/users/${id}`, data);
  return response.data;
};


// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`/api/users/${id}`);
};
