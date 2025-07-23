import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface PesticideRecord {
  id: number;
  date: string;
  product: string;
  purpose: string;
  dosage: string;
  weather: string;
  reentry: string;
  applicator: string;
}

export function PesticideHerbicideSection() {
  const [records, setRecords] = useState<PesticideRecord[]>([]);
  const [newRecord, setNewRecord] = useState<PesticideRecord>({
    id: 0,
    date: "",
    product: "",
    purpose: "",
    dosage: "",
    weather: "",
    reentry: "",
    applicator: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.product || !newRecord.purpose) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      product: "",
      purpose: "",
      dosage: "",
      weather: "",
      reentry: "",
      applicator: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🧪 Pesticide & Herbicide Application</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Product</th>
            <th className="p-2">Purpose</th>
            <th className="p-2">Dosage</th>
            <th className="p-2">Weather</th>
            <th className="p-2">Re-entry</th>
            <th className="p-2">Applicator</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.product}</td>
              <td className="p-2">{r.purpose}</td>
              <td className="p-2">{r.dosage}</td>
              <td className="p-2">{r.weather}</td>
              <td className="p-2">{r.reentry}</td>
              <td className="p-2">{r.applicator}</td>
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
                value={newRecord.product}
                onChange={(e) => setNewRecord({ ...newRecord, product: e.target.value })}
                placeholder="Product"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.purpose}
                onChange={(e) => setNewRecord({ ...newRecord, purpose: e.target.value })}
                placeholder="Purpose"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.dosage}
                onChange={(e) => setNewRecord({ ...newRecord, dosage: e.target.value })}
                placeholder="Dosage"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.weather}
                onChange={(e) => setNewRecord({ ...newRecord, weather: e.target.value })}
                placeholder="Weather"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.reentry}
                onChange={(e) => setNewRecord({ ...newRecord, reentry: e.target.value })}
                placeholder="Re-entry"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.applicator}
                onChange={(e) => setNewRecord({ ...newRecord, applicator: e.target.value })}
                placeholder="Applicator"
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
