export function Users() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">User Management</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">👥 Users List</h2>
          <p className="text-[#3b2f2f]">
            View all registered users including farm owners, workers, and administrators.
          </p>
          {/* 📌 Table of users */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🔐 Roles & Permissions</h2>
          <p className="text-[#3b2f2f]">
            Assign or update user roles. Control who can access finance, reports, tasks, and more.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">➕ Add New User</h2>
          <p className="text-[#3b2f2f]">
            Create new user profiles and link them to specific farms.
          </p>
          {/* 📌 New user form component */}
        </div>
      </div>
    </div>
  );
}
