import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface YieldEntry {
  id: number;
  block: string;
  season: string;
  harvested: number;
  productiveTrees: number;
  avgPerTree: number;
  comparison: string;
}

export function YieldsSection() {
  const [yields, setYields] = useState<YieldEntry[]>([]);
  const [newYield, setNewYield] = useState<YieldEntry>({
    id: 0,
    block: "",
    season: "",
    harvested: 0,
    productiveTrees: 0,
    avgPerTree: 0,
    comparison: "",
  });

  const handleAddYield = () => {
    if (!newYield.block || !newYield.season) return;
    setYields([
      ...yields,
      {
        ...newYield,
        id: Date.now(),
        avgPerTree:
          newYield.productiveTrees > 0
            ? newYield.harvested / newYield.productiveTrees
            : 0,
      },
    ]);
    setNewYield({
      id: 0,
      block: "",
      season: "",
      harvested: 0,
      productiveTrees: 0,
      avgPerTree: 0,
      comparison: "",
    });
  };

  const handleDeleteYield = (id: number) => {
    setYields(yields.filter((entry) => entry.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">📊 Yield Records</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Block</th>
            <th className="p-2">Season</th>
            <th className="p-2">Total Yield</th>
            <th className="p-2">Trees</th>
            <th className="p-2">Avg/Tree</th>
            <th className="p-2">Comparison</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {yields.map((entry, i) => (
            <tr key={entry.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{entry.block}</td>
              <td className="p-2">{entry.season}</td>
              <td className="p-2">{entry.harvested} kg</td>
              <td className="p-2">{entry.productiveTrees}</td>
              <td className="p-2">{entry.avgPerTree.toFixed(2)} kg</td>
              <td className="p-2">{entry.comparison}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => handleDeleteYield(entry.id)}
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
                value={newYield.block}
                onChange={(e) =>
                  setNewYield({ ...newYield, block: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Block"
              />
            </td>
            <td className="p-2">
              <input
                value={newYield.season}
                onChange={(e) =>
                  setNewYield({ ...newYield, season: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Season"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newYield.harvested}
                onChange={(e) =>
                  setNewYield({ ...newYield, harvested: Number(e.target.value) })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Total Yield"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newYield.productiveTrees}
                onChange={(e) =>
                  setNewYield({
                    ...newYield,
                    productiveTrees: Number(e.target.value),
                  })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Trees"
              />
            </td>
            <td className="p-2 text-gray-500">Auto</td>
            <td className="p-2">
              <input
                value={newYield.comparison}
                onChange={(e) =>
                  setNewYield({ ...newYield, comparison: e.target.value })
                }
                className="w-full border rounded px-2 py-1"
                placeholder="Comparison"
              />
            </td>
            <td className="p-2 text-right">
              <button
                onClick={handleAddYield}
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
