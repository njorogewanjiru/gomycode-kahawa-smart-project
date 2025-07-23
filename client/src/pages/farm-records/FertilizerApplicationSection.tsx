import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface FertilizerRecord {
  id: number;
  date: string;
  type: string;
  quantity: number;
  method: string;
  target: string;
  worker: string;
}

export function FertilizerApplicationSection() {
  const [records, setRecords] = useState<FertilizerRecord[]>([]);
  const [newRecord, setNewRecord] = useState<FertilizerRecord>({
    id: 0,
    date: "",
    type: "",
    quantity: 0,
    method: "",
    target: "",
    worker: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.type || !newRecord.quantity) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      type: "",
      quantity: 0,
      method: "",
      target: "",
      worker: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🌾 Fertilizer Application</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Method</th>
            <th className="p-2">Target Area</th>
            <th className="p-2">Worker</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.type}</td>
              <td className="p-2">{r.quantity}</td>
              <td className="p-2">{r.method}</td>
              <td className="p-2">{r.target}</td>
              <td className="p-2">{r.worker}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => handleDelete(r.id)}
                  className="text-red-500 hover:text-red-700"
                >
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
                value={newRecord.type}
                onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Type"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newRecord.quantity}
                onChange={(e) =>
                  setNewRecord({ ...newRecord, quantity: Number(e.target.value) })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Qty"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.method}
                onChange={(e) => setNewRecord({ ...newRecord, method: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Method"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.target}
                onChange={(e) => setNewRecord({ ...newRecord, target: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Target Area"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.worker}
                onChange={(e) => setNewRecord({ ...newRecord, worker: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Worker"
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
