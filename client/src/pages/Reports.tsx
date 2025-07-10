export function Reports() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Reports & Analytics</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📈 Farm Production Trends</h2>
          <p className="text-[#3b2f2f]">
            Visualize yields over time by farm, crop type, or season to identify growth patterns.
          </p>
          {/* 📌 Chart component placeholder */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">💹 Financial Overview</h2>
          <p className="text-[#3b2f2f]">
            Summarized income vs expenses reports to analyze profitability.
          </p>
          {/* 📌 Bar chart or financial summary */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🧑🏽‍🌾 Worker Activity</h2>
          <p className="text-[#3b2f2f]">
            Generate labor reports by task, hours worked, or farm section.
          </p>
        </div>
      </div>
    </div>
  );
}
