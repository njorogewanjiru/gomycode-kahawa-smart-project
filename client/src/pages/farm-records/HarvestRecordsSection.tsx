import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface Harvest {
  id: number;
  date: string;
  quantity: string;
  pickers: string;
  ripeness: string;
  rejected: string;
}

export function HarvestRecordsSection() {
  const [harvests, setHarvests] = useState<Harvest[]>([]);
  const [newHarvest, setNewHarvest] = useState<Harvest>({
    id: 0,
    date: "",
    quantity: "",
    pickers: "",
    ripeness: "",
    rejected: "",
  });

  const handleAdd = () => {
    if (!newHarvest.date || !newHarvest.quantity || !newHarvest.pickers) return;
    setHarvests([...harvests, { ...newHarvest, id: Date.now() }]);
    setNewHarvest({
      id: 0,
      date: "",
      quantity: "",
      pickers: "",
      ripeness: "",
      rejected: "",
    });
  };

  const handleDelete = (id: number) => {
    setHarvests(harvests.filter((h) => h.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🍒 Harvest Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Pickers</th>
            <th className="p-2">Ripeness</th>
            <th className="p-2">Rejected</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {harvests.map((h, i) => (
            <tr key={h.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{h.date}</td>
              <td className="p-2">{h.quantity}</td>
              <td className="p-2">{h.pickers}</td>
              <td className="p-2">{h.ripeness}</td>
              <td className="p-2">{h.rejected}</td>
              <td className="p-2 text-right">
                <button onClick={() => handleDelete(h.id)} className="text-red-500 hover:text-red-700">
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
                value={newHarvest.date}
                onChange={(e) => setNewHarvest({ ...newHarvest, date: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newHarvest.quantity}
                onChange={(e) => setNewHarvest({ ...newHarvest, quantity: e.target.value })}
                placeholder="e.g. 50kg"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newHarvest.pickers}
                onChange={(e) => setNewHarvest({ ...newHarvest, pickers: e.target.value })}
                placeholder="Number"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newHarvest.ripeness}
                onChange={(e) => setNewHarvest({ ...newHarvest, ripeness: e.target.value })}
                placeholder="Ripeness level"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                value={newHarvest.rejected}
                onChange={(e) => setNewHarvest({ ...newHarvest, rejected: e.target.value })}
                placeholder="e.g. 2kg"
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
