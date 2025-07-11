import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import {
  getFarms,
  createFarm,
  updateFarm,
  deleteFarm,
} from "./services/Api"; // Backend API functions

interface Farm {
  _id: string;
  name: string;
  area: string;
}

export function Farms() {
  const [showForm, setShowForm] = useState(false);
  const [showFarmList, setShowFarmList] = useState(false);
  const [formData, setFormData] = useState({ name: "", area: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [farms, setFarms] = useState<Farm[]>([]);
  const [error, setError] = useState("");

  // Load farms from backend
  useEffect(() => {
    fetchFarms();
  }, []);

  const fetchFarms = async () => {
    try {
      const data = await getFarms();
      setFarms(data);
    } catch (err) {
      console.error("Error fetching farms", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setError("Name is required.");
      return;
    }

    try {
      if (editingId) {
        await updateFarm(editingId, formData);
      } else {
        await createFarm(formData);
      }
      await fetchFarms(); // Refresh the list
      setFormData({ name: "", area: "" });
      setEditingId(null);
      setError("");
      setShowForm(false);
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const handleEdit = (farm: Farm) => {
    setFormData({ name: farm.name, area: farm.area });
    setEditingId(farm._id);
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Delete this farm?")) {
      try {
        await deleteFarm(id);
        await fetchFarms();
      } catch (err) {
        console.error("Error deleting farm", err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-8">Manage Farms</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* Add New Farm */}
        <div className="relative bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">➕ Add New Farm</h2>
          <p className="text-[#3b2f2f]">Register a new coffee farm with details.</p>

          <button
            onClick={() => {
              setFormData({ name: "", area: "" });
              setEditingId(null);
              setShowForm((prev) => !prev);
            }}
            className="absolute bottom-4 right-4 bg-[#a85e3c] text-white rounded-full p-2 shadow hover:bg-[#944c2d]"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>

        {/* Registered Farms */}
        <div
          className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition"
          onClick={() => setShowFarmList((prev) => !prev)}
        >
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📋 Registered Farms</h2>
          <p className="text-[#3b2f2f]">Click to view and manage your farms.</p>
        </div>

        {/* List */}
        {showFarmList && (
          <div className="col-span-2 bg-white p-6 rounded-xl shadow-lg mt-4">
            <h3 className="text-lg font-semibold text-[#3b2f2f] mb-4">Registered Farms</h3>
            {farms.length === 0 ? (
              <p className="text-sm text-gray-500 italic">No Farms Here</p>
            ) : (
              <ul className="space-y-3">
                {farms.map((farm) => (
                  <li
                    key={farm._id}
                    className="flex justify-between items-center border p-3 rounded-md bg-[#fdfbf9] shadow-sm"
                  >
                    <div>
                      <span className="font-medium text-[#3b2f2f]">{farm.name}</span>
                      <div className="text-sm text-gray-600">Area: {farm.area || "N/A"}</div>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(farm)} className="text-blue-600">
                        <Pencil size={18} />
                      </button>
                      <button onClick={() => handleDelete(farm._id)} className="text-red-600">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Form */}
        {showForm && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4 w-full max-w-md bg-white shadow-xl rounded-xl p-6 z-50 border">
            <h3 className="text-lg font-semibold text-[#3b2f2f] mb-4">
              {editingId ? "Edit Farm" : "Add Farm"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-[#a85e3c]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3b2f2f] mb-1">Area</label>
                <input
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-[#a85e3c]"
                />
              </div>

              {error && <p className="text-sm text-red-500 -mt-2">{error}</p>}

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-[#a85e3c] text-white px-4 py-2 rounded-md hover:bg-[#944c2d] transition"
                >
                  {editingId ? "Update" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
