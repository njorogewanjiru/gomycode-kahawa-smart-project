import { useState } from "react";
import {
  Wrench,
  Scissors,
  Truck,
  Trash2,
  Plus,
  Package,
  Circle,
} from "lucide-react";
import {
  GiFertilizerBag,
  GiWateringCan,
  GiStack,
  GiCoffeeBeans,
} from "react-icons/gi";
import { FaCut } from "react-icons/fa";

type Item = {
  name: string;
  icon: React.ElementType;
  quantity: number;
};

export function Inventory() {
  const [tools, setTools] = useState<Item[]>([
    { name: "Hoe", icon: Wrench, quantity: 0 },
    { name: "Machete", icon: FaCut, quantity: 0 },
    { name: "Shears", icon: Scissors, quantity: 0 },
  ]);

  const [inputs, setInputs] = useState<Item[]>([
    { name: "Fertilizer", icon: GiFertilizerBag, quantity: 0 },
    { name: "Pesticide", icon: GiWateringCan, quantity: 0 },
    { name: "Compost", icon: Package, quantity: 0 },
  ]);

  const [stock, setStock] = useState<Item[]>([
    { name: "Sacks", icon: GiStack, quantity: 0 },
    { name: "Coffee Beans", icon: GiCoffeeBeans, quantity: 0 },
    { name: "Transport", icon: Truck, quantity: 0 },
  ]);

  const increment = (setFn: any, name: string) =>
    setFn((prev: Item[]) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

  const decrement = (setFn: any, name: string) =>
    setFn((prev: Item[]) =>
      prev.map((item) =>
        item.name === name && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

  const deleteItem = (setFn: any, name: string) => {
    if (confirm(`Are you sure you want to delete ${name}?`)) {
      setFn((prev: Item[]) => prev.filter((item) => item.name !== name));
    }
  };

  const addItem = (setFn: any) => {
    const name = prompt("Enter name of new item:");
    if (name) {
      setFn((prev: Item[]) => [
        ...prev,
        { name, icon: Circle, quantity: 0 },
      ]);
    }
  };

  const renderTable = (
    title: string,
    items: Item[],
    setFn: React.Dispatch<React.SetStateAction<Item[]>>
  ) => (
    <div className="bg-white/80 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-teal-700 mb-4">{title}</h2>
      <table className="w-full text-sm table-auto">
        <thead className="bg-[#f0f0f0] text-[#3b2f2f]">
          <tr>
            <th className="px-3 py-2 text-left w-16">Icon</th>
            <th className="px-3 py-2 text-left min-w-[150px]">Name</th>
            <th className="px-3 py-2 text-left min-w-[150px]">Quantity</th>
            <th className="px-3 py-2 text-left w-16">Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ name, icon: Icon, quantity }) => (
            <tr key={name} className="border-t hover:bg-gray-100">
              <td className="px-3 py-2 w-16 text-left">
                <Icon className="w-5 h-5 text-[#5e8c61]" />
              </td>
              <td className="px-3 py-2 min-w-[150px] text-left font-medium">
                {name}
              </td>
              <td className="px-3 py-2 min-w-[150px] text-left">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrement(setFn, name)}
                    className="w-6 h-6 text-white rounded bg-gradient-to-t from-red-500 via-red-600 to-red-700 hover:opacity-90 text-sm"
                  >
                    -
                  </button>
                  <span className="min-w-[20px] text-center">{quantity}</span>
                  <button
                    onClick={() => increment(setFn, name)}
                    className="w-6 h-6 text-white rounded bg-gradient-to-t from-emerald-600 via-emerald-500 to-slate-700 hover:opacity-90 text-sm"
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="px-3 py-2 w-16 text-left">
                <button
                  onClick={() => deleteItem(setFn, name)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => addItem(setFn)}
        className="mt-4 text-white px-4 py-2 rounded bg-gradient-to-t from-emerald-600 via-emerald-500 to-slate-700 hover:opacity-90"
      >
        <Plus className="inline-block w-5 h-5 mr-1" /> Add Item
      </button>
    </div>
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center px-4 sm:px-6 py-10"
      style={{ backgroundImage: "url('/boni.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-teal-700 mb-6 bg-white/80 px-4 py-2 rounded-xl inline-block">
        Inventory Management
      </h1>

      <div className="space-y-8">
        {renderTable("🔧 Tools & Equipment", tools, setTools)}
        {renderTable("🧪 Inputs & Materials", inputs, setInputs)}
        {renderTable("📦 Stock Levels", stock, setStock)}
      </div>
    </div>
  );
}

export default Inventory;
