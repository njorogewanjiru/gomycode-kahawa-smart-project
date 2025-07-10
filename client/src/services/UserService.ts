import api from "./Api";
import type { User } from "../types";

// Get all users
export const fetchUsers = async (): Promise<User[]> => {
  const response = await api.get<User[]>("/users");
  return response.data;
};


// Get a single user by ID
export const fetchUserById = async (id: string): Promise<User> => {
  const response = await api.get<User>(`/users/${id}`);
  return response.data;
};


// Update a user
export const updateUser = async (id: string, data: Partial<User>): Promise<User> => {
  const response = await api.put<User>(`/users/${id}`, data);
  return response.data;
};


// Delete a user
export const deleteUser = async (id: string): Promise<void> => {
  await api.delete(`/users/${id}`);
};
