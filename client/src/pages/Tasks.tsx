import { useState } from "react"

type Task = {
  id: number
  name: string
  workers: string[]
  description: string
  startDate: string
  endDate?: string
  duration?: string
}

export default function Tasks() {
  const [taskName, setTaskName] = useState("")
  const [taskDesc, setTaskDesc] = useState("")
  const [workers, setWorkers] = useState(["", "", ""])
  const [completionTasks, setCompletionTasks] = useState<Task[]>([])

  const [seasonal, setSeasonal] = useState({
    planting: "",
    pruning: "",
    fertilizing: "",
    harvesting: "",
    herbicide: "",
  })

  const handleAssignTask = () => {
    const newTask: Task = {
      id: Date.now(),
      name: taskName,
      workers,
      description: taskDesc,
      startDate: new Date().toLocaleDateString(),
    }
    setCompletionTasks(prev => [...prev, newTask])
    setTaskName("")
    setTaskDesc("")
    setWorkers(["", "", ""])
  }

  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        backgroundImage: "url('/coffee-sorting.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="text-3xl font-bold text-cyan-500 text-center mb-6">Farm Tasks</h1>

      <div className="space-y-6">

        {/* Task Assignment */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">🗂️ Task Assignments</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleAssignTask()
            }}
            className="space-y-4"
          >
            <input
              type="text"
              required
              placeholder="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            />
            <textarea
              required
              placeholder="Task Description"
              value={taskDesc}
              onChange={(e) => setTaskDesc(e.target.value)}
              className="w-full p-2 rounded border border-gray-300"
            ></textarea>
            <div className="space-y-2">
              {workers.map((worker, i) => (
                <input
                  key={i}
                  type="text"
                  required
                  placeholder={`Worker ${i + 1}`}
                  value={worker}
                  onChange={(e) =>
                    setWorkers(prev => {
                      const updated = [...prev]
                      updated[i] = e.target.value
                      return updated
                    })
                  }
                  className="w-full p-2 rounded border border-gray-300"
                />
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5e8c61] text-white px-4 py-2 rounded hover:bg-[#4b6e4d]"
            >
              Assign Task
            </button>
          </form>
        </div>

        {/* Completion Tracking */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">✅ Completion Tracking</h2>
          <div className="space-y-4">
            {completionTasks.map((task, index) => (
              <div key={task.id} className="border-b pb-4">
                <h3 className="text-lg font-semibold">{index + 1}. {task.name}</h3>
                <p><strong>Description:</strong> {task.description}</p>
                <p><strong>Workers:</strong></p>
                <ol className="list-decimal pl-5">
                  {task.workers.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ol>
                <p><strong>Start Date:</strong> {task.startDate}</p>
                <p className="text-sm text-gray-600 italic">
                  ⏳ Period taken: counting from start...
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Planning */}
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-[#5e8c61] mb-2">📅 Seasonal Planning</h2>
          <form className="grid gap-4">
            <div className="flex flex-col">
              <label className="font-medium text-[#3b2f2f]">🌱 Planting Date</label>
              <input
                type="date"
                value={seasonal.planting}
                onChange={(e) => setSeasonal(prev => ({ ...prev, planting: e.target.value }))}
                className="p-2 rounded border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-[#3b2f2f]">✂️ Pruning Date</label>
              <input
                type="date"
                value={seasonal.pruning}
                onChange={(e) => setSeasonal(prev => ({ ...prev, pruning: e.target.value }))}
                className="p-2 rounded border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-[#3b2f2f]">💧 Fertilizing Date</label>
              <input
                type="date"
                value={seasonal.fertilizing}
                onChange={(e) => setSeasonal(prev => ({ ...prev, fertilizing: e.target.value }))}
                className="p-2 rounded border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-[#3b2f2f]">☕ Harvesting Date</label>
              <input
                type="date"
                value={seasonal.harvesting}
                onChange={(e) => setSeasonal(prev => ({ ...prev, harvesting: e.target.value }))}
                className="p-2 rounded border border-gray-300"
              />
            </div>

            <div className="flex flex-col">
              <label className="font-medium text-[#3b2f2f]">🧪 Herbicide Application Date</label>
              <input
                type="date"
                value={seasonal.herbicide}
                onChange={(e) => setSeasonal(prev => ({ ...prev, herbicide: e.target.value }))}
                className="p-2 rounded border border-gray-300"
              />
            </div>

            <button
              type="submit"
              className="bg-[#5e8c61] text-white px-4 py-2 rounded hover:bg-[#4b6e4d]"
            >
              Save Plan
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}
