export function Farms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Manage Farms</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2"> Add New Farm</h2>
          <p className="text-[#3b2f2f]">
            Register a new coffee farm with details like name, size, location, and owner info.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📋 Registered Farms</h2>
          <p className="text-[#3b2f2f]">
            View and manage a list of all farms under your account. You can edit or delete farm records.
          </p>
        </div>
      </div>
    </div>
  );
}
