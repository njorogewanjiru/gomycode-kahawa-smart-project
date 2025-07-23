import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface IrrigationRecord {
  id: number;
  date: string;
  method: string;
  waterSource: string;
  area: string;
  mulch: string;
}

export function IrrigationMulchingSection() {
  const [records, setRecords] = useState<IrrigationRecord[]>([]);
  const [newRecord, setNewRecord] = useState<IrrigationRecord>({
    id: 0,
    date: "",
    method: "",
    waterSource: "",
    area: "",
    mulch: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.method || !newRecord.waterSource) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      method: "",
      waterSource: "",
      area: "",
      mulch: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🚿 Irrigation & Mulching</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Method</th>
            <th className="p-2">Water Source</th>
            <th className="p-2">Area Irrigated</th>
            <th className="p-2">Type of Mulch</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.method}</td>
              <td className="p-2">{r.waterSource}</td>
              <td className="p-2">{r.area}</td>
              <td className="p-2">{r.mulch}</td>
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
                placeholder="Method"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.waterSource}
                onChange={(e) => setNewRecord({ ...newRecord, waterSource: e.target.value })}
                placeholder="Water Source"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.area}
                onChange={(e) => setNewRecord({ ...newRecord, area: e.target.value })}
                placeholder="Area Irrigated"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.mulch}
                onChange={(e) => setNewRecord({ ...newRecord, mulch: e.target.value })}
                placeholder="Mulch Type"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2 text-right">
              <button onClick={handleAdd} className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded">
                <FaPlus />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
