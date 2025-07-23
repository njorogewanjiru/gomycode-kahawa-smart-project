import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

export function WorkersActivitiesSection() {
  const [workers, setWorkers] = useState([
    {
      id: 1,
      name: "John",
      age: 28,
      role: "Harvester",
      description: "Works full-time during harvest",
    },
    {
      id: 2,
      name: "Mary",
      age: 34,
      role: "Sprayer",
      description: "Applies pesticides weekly",
    },
  ]);

  const [newWorker, setNewWorker] = useState({
    name: "",
    age: "",
    role: "",
    description: "",
  });

  const handleDeleteWorker = (id: number) => {
    setWorkers(workers.filter((w) => w.id !== id));
  };

  const handleAddWorker = () => {
    if (!newWorker.name || !newWorker.age || !newWorker.role) return;
    setWorkers([
      ...workers,
      {
        id: Date.now(),
        name: newWorker.name,
        age: parseInt(newWorker.age),
        role: newWorker.role,
        description: newWorker.description,
      },
    ]);
    setNewWorker({ name: "", age: "", role: "", description: "" });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">👨🏽‍🌾 Workers</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Name</th>
            <th className="p-2">Age</th>
            <th className="p-2">Role</th>
            <th className="p-2">Description</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {workers.map((w, i) => (
            <tr key={w.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{w.name}</td>
              <td className="p-2">{w.age}</td>
              <td className="p-2">{w.role}</td>
              <td className="p-2">{w.description}</td>
              <td className="p-2 text-right">
                <button
                  onClick={() => handleDeleteWorker(w.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}

          <tr className="bg-gray-100">
            <td className="p-2 text-gray-500">+</td>
            <td className="p-2">
              <input
                type="text"
                value={newWorker.name}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, name: e.target.value })
                }
                placeholder="Name"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="number"
                value={newWorker.age}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, age: e.target.value })
                }
                placeholder="Age"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                value={newWorker.role}
                onChange={(e) =>
                  setNewWorker({ ...newWorker, role: e.target.value })
                }
                placeholder="Role"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2">
              <input
                type="text"
                value={newWorker.description}
                onChange={(e) =>
                  setNewWorker({
                    ...newWorker,
                    description: e.target.value,
                  })
                }
                placeholder="Description"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2 text-right">
              <button
                onClick={handleAddWorker}
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
