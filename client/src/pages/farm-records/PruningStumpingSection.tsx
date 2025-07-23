import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface PruningRecord {
  id: number;
  date: string;
  type: string;
  numberOfTrees: number;
  section: string;
  notes: string;
}

export function PruningStumpingSection() {
  const [records, setRecords] = useState<PruningRecord[]>([]);
  const [newRecord, setNewRecord] = useState<PruningRecord>({
    id: 0,
    date: "",
    type: "",
    numberOfTrees: 0,
    section: "",
    notes: "",
  });

  const handleAdd = () => {
    if (!newRecord.date || !newRecord.type || !newRecord.numberOfTrees) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      date: "",
      type: "",
      numberOfTrees: 0,
      section: "",
      notes: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">✂️ Pruning & Stumping Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Type</th>
            <th className="p-2"># Trees</th>
            <th className="p-2">Section</th>
            <th className="p-2">Notes</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.type}</td>
              <td className="p-2">{r.numberOfTrees}</td>
              <td className="p-2">{r.section}</td>
              <td className="p-2">{r.notes}</td>
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
                value={newRecord.type}
                onChange={(e) => setNewRecord({ ...newRecord, type: e.target.value })}
                placeholder="Type"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newRecord.numberOfTrees}
                onChange={(e) => setNewRecord({ ...newRecord, numberOfTrees: parseInt(e.target.value) })}
                placeholder="# Trees"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.section}
                onChange={(e) => setNewRecord({ ...newRecord, section: e.target.value })}
                placeholder="Section"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.notes}
                onChange={(e) => setNewRecord({ ...newRecord, notes: e.target.value })}
                placeholder="Notes"
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
