export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Dashboard Overview</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {/* Placeholder cards */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Farms </h2>
          <p className="text-[#3b2f2f]">Manage registered coffee farms and locations.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Records </h2>
          <p className="text-[#3b2f2f]">Track inputs, workers, yields, and field activities.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Finance </h2>
          <p className="text-[#3b2f2f]">Monitor income, expenses, and farm profitability.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Users </h2>
          <p className="text-[#3b2f2f]">Manage farm owners, workers, and user roles.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Reports </h2>
          <p className="text-[#3b2f2f]">Visual insights and performance metrics.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold text-[#5e8c61] mb-2"> Training </h2>
          <p className="text-[#3b2f2f]">Access best practices in coffee farming.</p>
        </div>
      </div>
    </div>
  );
}
