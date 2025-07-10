import { useState } from "react";

export function AddKahawaForm() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //You can connect this to backend or state store
    console.log({ title, completed });
    setTitle("");
    setCompleted(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold text-[#3b2f2f]">Add New Task</h2>

      <div>
        <label className="block text-sm text-[#5e8c61] mb-1">Title</label>
        <input
          type="text"
          className="w-full px-4 py-2 border border-[#ccc] rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Prune Block A"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <span className="text-sm text-[#3b2f2f]">Completed?</span>
      </div>

      <button
        type="submit"
        className="bg-[#a85e3c] text-white px-6 py-2 rounded-md hover:bg-[#7c4b2b]"
      >
        Save Task
      </button>
    </form>
  );
}
