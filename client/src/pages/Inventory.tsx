export function Inventory() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Inventory Management</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🔧 Tools & Equipment</h2>
          <p className="text-[#3b2f2f]">
            Keep track of farm tools such as hoes, machetes, pruning shears, and coffee pulping machines. Log purchase dates and usage status.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🧪 Inputs & Materials</h2>
          <p className="text-[#3b2f2f]">
            Record fertilizers, pesticides, compost, mulch, bags, and other consumables used on the farm.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📦 Stock Levels</h2>
          <p className="text-[#3b2f2f]">
            Monitor available quantities, alert on low stock, and schedule restocking.
          </p>
        </div>
      </div>
    </div>
  );
}
