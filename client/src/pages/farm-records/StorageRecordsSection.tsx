import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface StorageRecord {
  id: number;
  location: string;
  bagType: string;
  moisture: string;
  dateStored: string;
  conditions: string;
}

export function StorageRecordsSection() {
  const [records, setRecords] = useState<StorageRecord[]>([]);
  const [newRecord, setNewRecord] = useState<StorageRecord>({
    id: 0,
    location: "",
    bagType: "",
    moisture: "",
    dateStored: "",
    conditions: "",
  });

  const handleAdd = () => {
    if (!newRecord.location || !newRecord.bagType || !newRecord.dateStored) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      location: "",
      bagType: "",
      moisture: "",
      dateStored: "",
      conditions: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">📦 Storage Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Location</th>
            <th className="p-2">Bag Type</th>
            <th className="p-2">Moisture</th>
            <th className="p-2">Date Stored</th>
            <th className="p-2">Conditions</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.location}</td>
              <td className="p-2">{r.bagType}</td>
              <td className="p-2">{r.moisture}</td>
              <td className="p-2">{r.dateStored}</td>
              <td className="p-2">{r.conditions}</td>
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
                value={newRecord.location}
                onChange={(e) => setNewRecord({ ...newRecord, location: e.target.value })}
                placeholder="Location"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.bagType}
                onChange={(e) => setNewRecord({ ...newRecord, bagType: e.target.value })}
                placeholder="Bag type"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.moisture}
                onChange={(e) => setNewRecord({ ...newRecord, moisture: e.target.value })}
                placeholder="Moisture %"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="date"
                value={newRecord.dateStored}
                onChange={(e) => setNewRecord({ ...newRecord, dateStored: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.conditions}
                onChange={(e) => setNewRecord({ ...newRecord, conditions: e.target.value })}
                placeholder="Conditions"
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
