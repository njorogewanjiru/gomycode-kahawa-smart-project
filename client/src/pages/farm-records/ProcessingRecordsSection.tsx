import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface Processing {
  id: number;
  date: string;
  method: string;
  quantity: string;
  equipment: string;
  fermentation: string;
  drying: string;
}

export function ProcessingRecordsSection() {
  const [records, setRecords] = useState<Processing[]>([]);
  const [newRecord, setNewRecord] = useState<Processing>({
    id: 0,
    date: "",
    method: "",
    quantity: "",
    equipment: "",
    fermentation: "",
    drying: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.method || !newRecord.quantity) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      method: "",
      quantity: "",
      equipment: "",
      fermentation: "",
      drying: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🏭 Processing Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Method</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Equipment</th>
            <th className="p-2">Fermentation</th>
            <th className="p-2">Drying</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.method}</td>
              <td className="p-2">{r.quantity}</td>
              <td className="p-2">{r.equipment}</td>
              <td className="p-2">{r.fermentation}</td>
              <td className="p-2">{r.drying}</td>
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
                value={newRecord.method}
                onChange={(e) => setNewRecord({ ...newRecord, method: e.target.value })}
                placeholder="Wet/Dry"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.quantity}
                onChange={(e) => setNewRecord({ ...newRecord, quantity: e.target.value })}
                placeholder="e.g. 80kg"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.equipment}
                onChange={(e) => setNewRecord({ ...newRecord, equipment: e.target.value })}
                placeholder="Equipment used"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.fermentation}
                onChange={(e) => setNewRecord({ ...newRecord, fermentation: e.target.value })}
                placeholder="Fermentation time"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.drying}
                onChange={(e) => setNewRecord({ ...newRecord, drying: e.target.value })}
                placeholder="Drying duration"
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
