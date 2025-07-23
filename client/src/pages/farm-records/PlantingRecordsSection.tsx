import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface PlantingRecord {
  id: number;
  date: string;
  variety: string;
  seedlings: number;
  source: string;
  method: string;
  location: string;
}

export function PlantingRecordsSection() {
  const [records, setRecords] = useState<PlantingRecord[]>([]);
  const [newRecord, setNewRecord] = useState<PlantingRecord>({
    id: 0,
    date: "",
    variety: "",
    seedlings: 0,
    source: "",
    method: "",
    location: "",
  });

  const handleAddRecord = () => {
    if (!newRecord.date || !newRecord.variety || !newRecord.seedlings) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      variety: "",
      seedlings: 0,
      source: "",
      method: "",
      location: "",
    });
  };

  const handleDeleteRecord = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🌱 Planting Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Variety</th>
            <th className="p-2">Seedlings</th>
            <th className="p-2">Source</th>
            <th className="p-2">Method</th>
            <th className="p-2">Location</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.variety}</td>
              <td className="p-2">{r.seedlings}</td>
              <td className="p-2">{r.source}</td>
              <td className="p-2">{r.method}</td>
              <td className="p-2">{r.location}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => handleDeleteRecord(r.id)}
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
                value={newRecord.variety}
                onChange={(e) => setNewRecord({ ...newRecord, variety: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Variety"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newRecord.seedlings}
                onChange={(e) =>
                  setNewRecord({ ...newRecord, seedlings: Number(e.target.value) })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Seedlings"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.source}
                onChange={(e) => setNewRecord({ ...newRecord, source: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Source"
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
                value={newRecord.location}
                onChange={(e) => setNewRecord({ ...newRecord, location: e.target.value })}
                className="w-full border rounded px-2 py-1"
                placeholder="Location"
              />
            </td>
            <td className="p-2 text-right">
              <button
                onClick={handleAddRecord}
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
