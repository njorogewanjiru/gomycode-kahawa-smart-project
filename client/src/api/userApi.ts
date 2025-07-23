import axios from "axios";

// Get all users
export const fetchUsers = async () => {
  const response = await axios.get("/api/users");
  // Normalize users to always have both id and _id for frontend compatibility
  return (response.data as any[]).map((user: any) => ({
    ...user,
    id: user.id || user._id,
    _id: user._id || user.id,
  }));
};

// Delete a user
export const deleteUser = async (id: string) => {
  await axios.delete(`/api/users/${id}`);
};
