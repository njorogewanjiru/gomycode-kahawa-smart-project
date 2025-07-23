import { useEffect, useState } from "react";
import {
  getTransactions,
  createTransaction,
  deleteTransaction,
} from "../services/transactions";
import { FaTrash } from "react-icons/fa";

interface Transaction {
  _id: string;
  type: "income" | "expense";
  category: string;
  amount: number;
  date: string;
  note?: string;
}

export function Finance() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [formData, setFormData] = useState<{
    type: "income" | "expense";
    category: string;
    amount: number;
    date: string;
    note?: string;
  }>({
    type: "income",
    category: "",
    amount: 0,
    date: "",
    note: "",
  });

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    try {
      const data = await getTransactions();
      setTransactions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Failed to fetch transactions", err);
      setTransactions([]); // fallback to empty array
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.category || !formData.amount || !formData.date) {
      alert("Please fill in all required fields (category, amount, date).");
      return;
    }

    try {
      await createTransaction({ ...formData, amount: Number(formData.amount) });
      setFormData({
        type: "income",
        category: "",
        amount: 0,
        date: "",
        note: "",
      });
      loadTransactions();
    } catch (err) {
      console.error("Failed to create transaction", err);
      alert("Failed to save transaction.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this transaction?")) return;

    try {
      await deleteTransaction(id);
      loadTransactions();
    } catch (err) {
      console.error("Failed to delete transaction", err);
      alert("Failed to delete transaction.");
    }
  };

  const incomeTotal = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenseTotal = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = incomeTotal - expenseTotal;

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10"
      style={{ backgroundImage: "url('/coffee-harvesting.jpg')" }}
    >
      <div className="backdrop-brightness-95 bg-gradient-to-b from-[#f5efe6]/80 to-[#e8dccf]/80 rounded-xl p-4">
        <h1 className="text-3xl font-bold text-teal-700 mb-6 text-center">
          Finance Overview
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Income Overview</h2>
            <p className="text-2xl text-green-600 font-bold">+ KES {incomeTotal}</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Expenses Overview</h2>
            <p className="text-2xl text-red-600 font-bold">- KES {expenseTotal}</p>
            <p className="mt-1 text-sm text-gray-600 italic">Includes pesticides</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold text-teal-700 mb-2">Balance Summary</h2>
            <p className="text-2xl font-bold text-gray-800">
              {balance >= 0 ? "KES " + balance : "- KES " + Math.abs(balance)}
            </p>
          </div>
        </div>

        {/* Add Transaction Form */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-10">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">➕ Add Transaction</h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>

            <input
              type="text"
              name="category"
              placeholder="Category (e.g. Pesticides)"
              value={formData.category}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
              required
            />

            <input
              type="number"
              name="amount"
              placeholder="Amount"
              value={formData.amount}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
              required
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2"
              required
            />

            <textarea
              name="note"
              placeholder="Optional Note"
              value={formData.note}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 sm:col-span-2"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-gray-700 text-white px-6 py-2 rounded-md hover:opacity-90 sm:col-span-2"
            >
              Save Transaction
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-teal-700 mb-4">📜 Transaction History</h2>

          {transactions.length === 0 ? (
            <p className="text-gray-600">No transactions yet.</p>
          ) : (
            <ul className="space-y-4">
              {transactions.map((t) => (
                <li
                  key={t._id}
                  className="border-b pb-2 flex items-center justify-between text-[#3b2f2f]"
                >
                  <div>
                    <p className="font-medium">{t.category}</p>
                    <p className="text-sm text-gray-500">
                      {t.type === "income" ? "+" : "-"}KES {t.amount} on {t.date}
                      {t.note && ` - ${t.note}`}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
