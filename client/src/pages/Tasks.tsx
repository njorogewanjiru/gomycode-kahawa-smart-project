export default function Tasks() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#fdfaf6] to-[#e2dbd2] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#3b2f2f] mb-6">Farm Tasks</h1>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🗂️ Task Assignments</h2>
          <p className="text-[#3b2f2f]">
            Assign daily or seasonal tasks to farm workers. Track what needs to be done and who's responsible.
          </p>
          {/* 📌 Task form or assignment list placeholder */}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">✅ Completion Tracking</h2>
          <p className="text-[#3b2f2f]">
            Monitor completed tasks, mark progress, and ensure timely execution of farm duties.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📅 Seasonal Planning</h2>
          <p className="text-[#3b2f2f]">
            Plan key farming operations like planting, pruning, fertilizing, and harvesting by season.
          </p>
        </div>
      </div>
    </div>
  );
}
