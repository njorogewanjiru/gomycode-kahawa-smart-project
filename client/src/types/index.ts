
export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "farmer" | "worker";
  farmId?: string;
}

export interface Farm {
  id: string;
  name: string;
  size: number; // in acres/hectares
  location: string;
  ownerId: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  assignedTo: string; // worker ID
  status: "pending" | "in-progress" | "completed";
  dueDate?: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  type: "tool" | "input";
  quantity: number;
  unit: string;
  addedDate: string;
}

export interface FinanceRecord {
  id: string;
  type: "income" | "expense";
  amount: number;
  category: string;
  date: string;
  description?: string;
}
