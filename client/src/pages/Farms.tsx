import { useEffect, useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";
import { createFarm, getFarms, updateFarm } from "../services/Api";
import { useFarm } from "../context/FarmContext";
import type { FarmData } from "../types/Farm";

interface Farm {
  _id: string;
  name: string;
  area: number;
  numberOfTrees?: number;
}

export function Farms() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", area: "", numberOfTrees: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [farms, setFarms] = useState<Farm[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentFarm, setCurrentFarm } = useFarm();

  useEffect(() => {
    fetchFarms();
    
    // Load saved farm selection from localStorage
    const savedFarmId = localStorage.getItem('selectedFarmId');
    if (savedFarmId && farms.length > 0) {
      const savedFarm = farms.find(farm => farm._id === savedFarmId);
      if (savedFarm) {
        setCurrentFarm(savedFarm);
      }
    }
  }, []);

  useEffect(() => {
    // Auto-select farm logic
    if (farms.length === 1 && !currentFarm) {
      // If only one farm exists and none selected, auto-select it
      setCurrentFarm(farms[0]);
      localStorage.setItem('selectedFarmId', farms[0]._id);
    } else if (farms.length === 0) {
      // If no farms exist, clear current selection
      setCurrentFarm(null);
      localStorage.removeItem('selectedFarmId');
    }
  }, [farms, currentFarm, setCurrentFarm]);

  const fetchFarms = async () => {
    try {
      setLoading(true);
      const data = await getFarms();
      if (Array.isArray(data)) {
        setFarms(data);
      } else {
        console.error("Farms data is not an array", data);
        setError("Failed to load farms data");
      }
    } catch (err) {
      console.error("Error fetching farms", err);
      setError("Failed to fetch farms. Please check if your backend server is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Farm name is required.");
      return false;
    }

    // Validate area if provided
    if (formData.area && (isNaN(Number(formData.area)) || Number(formData.area) < 0)) {
      setError("Area must be a valid positive number.");
      return false;
    }

    // Validate numberOfTrees if provided
    if (formData.numberOfTrees && (isNaN(Number(formData.numberOfTrees)) || Number(formData.numberOfTrees) < 0)) {
      setError("Number of trees must be a valid positive number.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError("");

    // Convert strings to numbers, handling empty strings properly
    const payload: FarmData = {
      name: formData.name.trim(),
      area: formData.area ? Number(formData.area) : 0,
      numberOfTrees: formData.numberOfTrees ? Number(formData.numberOfTrees) : undefined,
    };

    console.log("Sending farm data to backend:", payload);

    try {
      if (editingId) {
        // Update existing farm
        await updateFarm(editingId, payload);
        await fetchFarms();
        setError("Farm updated successfully!");
      } else {
        // Create new farm
        const createdFarm = await createFarm(payload) as Farm;
        if (createdFarm && createdFarm._id && createdFarm.name && createdFarm.area !== undefined) {
          setFarms((prev) => {
            const updatedFarms = [...prev, createdFarm];
            // If this is the first farm, auto-select it
            if (updatedFarms.length === 1) {
              setCurrentFarm(createdFarm);
              localStorage.setItem('selectedFarmId', createdFarm._id);
            }
            return updatedFarms;
          });
          setError("Farm created successfully!");
        } else {
          throw new Error("Invalid farm data received from server");
        }
      }

      // Reset form
      setFormData({ name: "", area: "", numberOfTrees: "" });
      setEditingId(null);
      setShowForm(false);
      
      // Clear success message after 3 seconds
      setTimeout(() => setError(""), 3000);
      
    } catch (err: any) {
      console.error("Error submitting form", err);
      
      if (err.response?.status === 404) {
        setError("Backend server not found. Please ensure your API server is running on the correct port.");
      } else if (err.response?.status >= 500) {
        setError("Server error. Please try again later.");
      } else if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong while saving the farm. Please check your internet connection and try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (farm: Farm) => {
    setFormData({
      name: farm.name,
      area: farm.area.toString(),
      numberOfTrees: farm.numberOfTrees?.toString() || "",
    });
    setEditingId(farm._id);
    setShowForm(true);
  };

  const handleDelete = async (_id: string) => {
    if (window.confirm("Are you sure you want to delete this farm?")) {
      // Implement delete functionality here
      alert(`Farm deletion for id ${_id} is not implemented yet.`);
    }
  };

  const handleSelectFarm = (farm: Farm) => {
    setCurrentFarm(farm);
    // Persist farm selection to localStorage
    localStorage.setItem('selectedFarmId', farm._id);
  };

  return (
    <div
  className="min-h-screen bg-cover bg-center bg-no-repeat px-6 py-10"
  style={{ backgroundImage: "url('/coffee-plantation.jpg')" }}
>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#3b2f2f]">Manage Farms</h1>
        {currentFarm && (
          <div className="bg-white px-4 py-2 rounded-lg shadow-md">
            <span className="text-sm text-gray-600">Current Farm:</span>
            <span className="ml-2 font-semibold text-[#5e8c61]">{currentFarm.name}</span>
          </div>
        )}
      </div>

      {/* Show message if no farms exist */}
      {farms.length === 0 && !loading && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            Welcome! You don't have any farms registered yet. Please add your first farm below to get started.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        {/* Add New Farm Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg relative">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">➕ Add New Farm</h2>
          <p className="text-[#3b2f2f] mb-4">
            Register a new coffee farm with details.
          </p>

          <button
            onClick={() => {
              setFormData({ name: "", area: "", numberOfTrees: "" });
              setEditingId(null);
              setError("");
              setShowForm((prev) => !prev);
            }}
            disabled={loading}
            className="absolute top-4 right-4 bg-[#a85e3c] text-white rounded-full p-2 shadow hover:bg-[#944c2d] disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <Plus className="w-5 h-5" />
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                  Farm Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a85e3c] focus:border-transparent"
                  required
                  disabled={loading}
                  placeholder="Enter farm name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                  Area (in acres)
                </label>
                <input
                  name="area"
                  type="number"
                  min="0"
                  step="0.1"
                  value={formData.area}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a85e3c] focus:border-transparent"
                  disabled={loading}
                  placeholder="Enter area in acres"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#3b2f2f] mb-1">
                  Number of Trees
                </label>
                <input
                  name="numberOfTrees"
                  type="number"
                  min="0"
                  value={formData.numberOfTrees}
                  onChange={handleChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a85e3c] focus:border-transparent"
                  disabled={loading}
                  placeholder="Enter number of trees"
                />
              </div>

              {error && (
                <div className={`text-sm p-2 rounded ${
                  error.includes('successfully') 
                    ? 'text-green-700 bg-green-50 border border-green-200' 
                    : 'text-red-700 bg-red-50 border border-red-200'
                }`}>
                  {error}
                </div>
              )}

              <div className="flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setError("");
                    setFormData({ name: "", area: "", numberOfTrees: "" });
                    setEditingId(null);
                  }}
                  className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#a85e3c] text-white px-4 py-2 rounded-md hover:bg-[#944c2d] disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {editingId ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    editingId ? "Update Farm" : "Create Farm"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Registered Farms Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📋 Registered Farms</h2>
          <p className="text-[#3b2f2f] mb-4">Click to select and activate a farm profile.</p>

          {loading && farms.length === 0 ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#a85e3c]"></div>
              <span className="ml-2 text-gray-600">Loading farms...</span>
            </div>
          ) : farms.length === 0 ? (
            <p className="text-sm text-gray-500 italic">
              No farms found. Add your first farm to get started!
            </p>
          ) : (
            <ul className="space-y-3 max-h-96 overflow-y-auto">
              {farms.map((farm) => (
                <li
                  key={farm._id}
                  className={`flex justify-between items-center border p-3 rounded-md shadow-sm cursor-pointer transition ${
                    currentFarm?._id === farm._id
                      ? 'bg-emerald-100 border-emerald-300'
                      : 'bg-[#fdfbf9] hover:bg-emerald-50 border-gray-200'
                  }`}
                  onClick={() => handleSelectFarm(farm)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="font-medium text-[#3b2f2f]">{farm.name}</div>
                      {currentFarm?._id === farm._id && (
                        <span className="text-xs bg-emerald-600 text-white px-2 py-1 rounded-full">
                          Active
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-600">
                      Area: {farm.area || "N/A"} acres | Trees: {farm.numberOfTrees || "N/A"}
                    </div>
                  </div>
                  <div className="flex gap-2 ml-2">
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleEdit(farm); 
                      }} 
                      className="text-blue-600 hover:text-blue-800 p-1 rounded transition"
                      title="Edit farm"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        handleDelete(farm._id); 
                      }} 
                      className="text-red-600 hover:text-red-800 p-1 rounded transition"
                      title="Delete farm"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Backend Connection Help */}
      {error && error.includes('Backend server not found') && (
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-medium text-yellow-800 mb-2">Backend Setup Required</h3>
          <p className="text-yellow-700 text-sm mb-2">
            Your frontend is trying to connect to API endpoints that don't exist. You need to:
          </p>
          <ul className="text-yellow-700 text-sm list-disc ml-4 space-y-1">
            <li>Start your backend server (typically Node.js/Express)</li>
            <li>Ensure it's running on the correct port</li>
            <li>Configure Vite proxy settings to forward API calls to your backend</li>
            <li>Or update the API base URL in your axios configuration</li>
          </ul>
        </div>
      )}
    </div>
  );
}