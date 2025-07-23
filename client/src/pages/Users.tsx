import { useEffect, useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { fetchUsers, deleteUser } from "../api/userApi";
import type { User } from "../types";

export function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [grantedPermissions, setGrantedPermissions] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchUsers();
        console.log("Fetched users:", data);

        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error("❌ Unexpected data format from fetchUsers:", data);
          setUsers([]);
        }
      } catch (err) {
        console.error("❌ Failed to fetch users:", err);
        setUsers([]);
      }
    };

    load();
  }, []);

  const handleDelete = async (id: string | undefined) => {
    if (!id) return;
    if (confirm("Are you sure you want to delete this user?")) {
      await deleteUser(id);
      setUsers((prev) => prev.filter((u) => (u._id || u.id) !== id));
    }
  };

  const permissions = {
    "🧑‍🌾 Farm Management": [
      "view_farms",
      "create_farm",
      "edit_farm",
      "delete_farm",
    ],
    "📋 Farm Records": [
      "view_records",
      "create_record",
      "edit_record",
      "delete_record",
    ],
    "🛠️ Inventory": [
      "view_inventory",
      "add_tool",
      "update_tool_quantity",
      "delete_tool",
      "manage_inputs",
      "manage_stock_levels",
    ],
    "💰 Finance": [
      "view_finance",
      "add_transaction",
      "edit_transaction",
      "delete_transaction",
    ],
    "👥 User Management": [
      "view_users",
      "create_user",
      "assign_roles",
      "delete_user",
    ],
    "📚 Training": [
      "view_training",
      "upload_training_content",
      "edit_training_content",
    ],
    "📈 Reports": ["view_reports", "generate_report", "export_data"],
    "🧪 Tasks": [
      "view_tasks",
      "create_task",
      "assign_task",
      "update_task_status",
    ],
    "🛡️ Admin Controls": [
      "access_dashboard",
      "manage_permissions",
      "view_logs",
    ],
  };

  const togglePermission = (perm: string) => {
    setGrantedPermissions((prev) =>
      prev.includes(perm)
        ? prev.filter((p) => p !== perm)
        : [...prev, perm]
    );
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10 text-[#3b2f2f]"
      style={{
        backgroundImage: "url('/ripe-coffee-berries.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">User Management</h1>

      {/* Users List */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">👥 Users List</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2">#</th>
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2 text-right">Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id || u.id} className="hover:bg-gray-50 border-b">
                  <td className="p-2">{i + 1}</td>
                  <td className="p-2">{u.name}</td>
                  <td className="p-2">{u.email}</td>
                  <td className="p-2 text-right">
                    <button
                      onClick={() => handleDelete(u._id || u.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Roles */}
      <div className="bg-white p-6 rounded-xl shadow-md mb-6">
        <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🔐 Roles</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              emoji: "👑",
              role: "Admin",
              desc: "Full access to all features. Can manage users, farms, finances, reports, etc.",
            },
            {
              emoji: "🏠",
              role: "Farm Owner",
              desc: "Manages their own farm(s). Can view reports, assign tasks, monitor finances.",
            },
            {
              emoji: "🧑‍🌾",
              role: "Farm Worker",
              desc: "Assigned to a specific farm. Can view tasks, record activities, update progress.",
            },
            {
              emoji: "💼",
              role: "Accountant",
              desc: "Manages finance-related features: income, expenses, and budget tracking.",
            },
            {
              emoji: "📚",
              role: "Trainer",
              desc: "Can upload or manage training content and materials for farm workers.",
            },
            {
              emoji: "🌱",
              role: "Agronomist",
              desc: "Can provide insights, reports, or recommendations based on farm data.",
            },
            {
              emoji: "💰",
              role: "Buyer",
              desc: "Can view available harvest data and farm info to make purchase inquiries.",
            },
          ].map(({ emoji, role, desc }) => (
            <div
              key={role}
              className="border border-teal-700 rounded-lg p-4 shadow-sm bg-[#f9f9f9]"
            >
              <h3 className="text-lg font-bold text-teal-700 mb-1">
                {emoji} {role}
              </h3>
              <p className="text-sm text-[#3b2f2f]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Permissions */}
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">🛡️ Permissions</h2>

        <input
          type="text"
          placeholder="Search user by name..."
          className="w-full mb-4 p-2 border border-teal-400 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
        />

        <div className="space-y-6">
          {Object.entries(permissions).map(([category, perms]) => (
            <div key={category}>
              <div className="text-lg font-semibold text-teal-700 mb-2 border-t border-b py-2">
                {category}
              </div>
              <div className="space-y-2">
                {perms.map((perm) => (
                  <div
                    key={perm}
                    className="flex items-center justify-between border border-teal-700 rounded px-3 py-2"
                  >
                    <span>{perm}</span>
                    <button
                      onClick={() => togglePermission(perm)}
                      className={`w-6 h-6 flex items-center justify-center border rounded-full ${
                        grantedPermissions.includes(perm)
                          ? "border-green-500 text-green-500"
                          : "border-gray-400 text-gray-400"
                      }`}
                    >
                      <FaCheck size={12} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
