import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface YieldRecord {
  id: number;
  block: string;
  totalYield: string;
  productiveTrees: number;
  averagePerTree: string;
  comparison: string;
}

export function YieldRecordsSection() {
  const [records, setRecords] = useState<YieldRecord[]>([]);
  const [newRecord, setNewRecord] = useState<YieldRecord>({
    id: 0,
    block: "",
    totalYield: "",
    productiveTrees: 0,
    averagePerTree: "",
    comparison: "",
  });

  const handleAdd = () => {
    if (!newRecord.block || !newRecord.totalYield) return;
    setRecords([...records, { ...newRecord, id: Date.now() }]);
    setNewRecord({
      id: 0,
      block: "",
      totalYield: "",
      productiveTrees: 0,
      averagePerTree: "",
      comparison: "",
    });
  };

  const handleDelete = (id: number) => {
    setRecords(records.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🧮 Yield Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Block</th>
            <th className="p-2">Total Yield</th>
            <th className="p-2">Productive Trees</th>
            <th className="p-2">Average/Tree</th>
            <th className="p-2">Comparison</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {records.map((r, i) => (
            <tr key={r.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{r.block}</td>
              <td className="p-2">{r.totalYield}</td>
              <td className="p-2">{r.productiveTrees}</td>
              <td className="p-2">{r.averagePerTree}</td>
              <td className="p-2">{r.comparison}</td>
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
                value={newRecord.block}
                onChange={(e) => setNewRecord({ ...newRecord, block: e.target.value })}
                placeholder="Block"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.totalYield}
                onChange={(e) => setNewRecord({ ...newRecord, totalYield: e.target.value })}
                placeholder="Total yield"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newRecord.productiveTrees}
                onChange={(e) =>
                  setNewRecord({ ...newRecord, productiveTrees: parseInt(e.target.value) || 0 })
                }
                placeholder="Trees"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.averagePerTree}
                onChange={(e) => setNewRecord({ ...newRecord, averagePerTree: e.target.value })}
                placeholder="Avg/tree"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newRecord.comparison}
                onChange={(e) => setNewRecord({ ...newRecord, comparison: e.target.value })}
                placeholder="Comparison"
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
