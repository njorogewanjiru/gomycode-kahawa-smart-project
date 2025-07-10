export function Finance() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf6] to-[#e2dbd2] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Finance Tracker</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📥 Income</h2>
          <p className="text-[#3b2f2f]">
            Record sales from coffee, seedlings, and other sources. Attach receipts or buyer references.
          </p>
          {/* 📌 Add income entry form or table here */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📤 Expenses</h2>
          <p className="text-[#3b2f2f]">
            Log expenses like fertilizer, labor, tools, and transport. Helps track profitability.
          </p>
          {/* 📌 Add expense input and list component here */}
        </div>
      </div>
    </div>
  );
}
