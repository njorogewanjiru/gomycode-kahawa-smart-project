import axios from "axios";

export interface TransactionData {
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
  note?: string;
}

export interface Transaction extends TransactionData {
  _id: string;
}

export const getTransactions = async (): Promise<Transaction[]> => {
  const response = await axios.get<Transaction[]>("/api/transactions");
  return response.data;
};

export const createTransaction = async (
  data: TransactionData
): Promise<Transaction> => {
  const response = await axios.post<Transaction>("/api/transactions", data);
  return response.data;
};

export const deleteTransaction = async (id: string): Promise<void> => {
  await axios.delete(`/api/transactions/${id}`);
};
