import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface SalesDelivery {
  id: number;
  date: string;
  buyer: string;
  quantity: string;
  price: string;
  method: string;
  receipt: string;
}

export function SalesDeliverySection() {
  const [records, setRecords] = useState<SalesDelivery[]>([]);
  const [newRecord, setNewRecord] = useState<SalesDelivery>({
    id: 0,
    date: "",
    buyer: "",
    quantity: "",
    price: "",
    method: "",
    receipt: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.buyer || !newRecord.quantity) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      buyer: "",
      quantity: "",
      price: "",
      method: "",
      receipt: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🚚 Sales & Delivery Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Buyer</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Price/kg</th>
            <th className="p-2">Transport</th>
            <th className="p-2">Receipt #</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.buyer}</td>
              <td className="p-2">{r.quantity}</td>
              <td className="p-2">{r.price}</td>
              <td className="p-2">{r.method}</td>
              <td className="p-2">{r.receipt}</td>
              <td className="p-2 text-right">
                <button onClick={() => handleDelete(r.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td className="p-2">+</td>
            <td className="p-2">
              <input
                type="date"
                value={newRecord.date}
                onChange={(e) => setNewRecord({ ...newRecord, date: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.buyer}
                onChange={(e) => setNewRecord({ ...newRecord, buyer: e.target.value })}
                placeholder="Buyer"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.quantity}
                onChange={(e) => setNewRecord({ ...newRecord, quantity: e.target.value })}
                placeholder="Quantity"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.price}
                onChange={(e) => setNewRecord({ ...newRecord, price: e.target.value })}
                placeholder="Price/kg"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.method}
                onChange={(e) => setNewRecord({ ...newRecord, method: e.target.value })}
                placeholder="Transport"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.receipt}
                onChange={(e) => setNewRecord({ ...newRecord, receipt: e.target.value })}
                placeholder="Receipt #"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2 text-right">
              <button
                onClick={handleAdd}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded"
              >
                <FaPlus />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
