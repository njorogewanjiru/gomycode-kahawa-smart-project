export function FarmRecords() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf6] to-[#e2dbd2] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Farm Records</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">☑️ Inputs</h2>
          <p className="text-[#3b2f2f]">
            Track fertilizers, pesticides, tools, and other resources applied to your coffee farm.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">👨🏽‍🌾 Workers</h2>
          <p className="text-[#3b2f2f]">
            Manage labor records, wages, attendance, and assigned field tasks.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📦 Yields</h2>
          <p className="text-[#3b2f2f]">
            Log harvest quantities, cherry quality, and dates to monitor production trends.
          </p>
        </div>
      </div>
    </div>
  );
}
