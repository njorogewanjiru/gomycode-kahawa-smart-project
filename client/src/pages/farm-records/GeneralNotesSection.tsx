import { useState } from "react";
import { FaTrash, FaPlus } from "react-icons/fa";

interface GeneralNote {
  id: number;
  date: string;
  note: string;
}

export function GeneralNotesSection() {
  const [notes, setNotes] = useState<GeneralNote[]>([]);
  const [newNote, setNewNote] = useState({ date: "", note: "" });

  const handleAdd = () => {
    if (!newNote.date || !newNote.note) return;
    setNotes([...notes, { ...newNote, id: Date.now() }]);
    setNewNote({ date: "", note: "" });
  };

  const handleDelete = (id: number) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-[#5e8c61] mb-4">📌 General Notes</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="border-b">
            <th className="p-2">#</th>
            <th className="p-2">Date</th>
            <th className="p-2">Note</th>
            <th className="p-2 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n, i) => (
            <tr key={n.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{i + 1}</td>
              <td className="p-2">{n.date}</td>
              <td className="p-2">{n.note}</td>
              <td className="p-2 text-right">
                <button onClick={() => handleDelete(n.id)} className="text-red-500 hover:text-red-700">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
          <tr className="bg-gray-100">
            <td className="p-2">+</td>
            <td className="p-2">
              <input
                type="date"
                value={newNote.date}
                onChange={(e) => setNewNote({ ...newNote, date: e.target.value })}
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2" colSpan={2}>
              <input
                type="text"
                value={newNote.note}
                onChange={(e) => setNewNote({ ...newNote, note: e.target.value })}
                placeholder="Note (e.g. Pest outbreak in block A)"
                className="w-full border rounded px-2 py-1"
              />
            </td>
            <td className="p-2 text-right">
              <button
                onClick={handleAdd}
                className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded"
              >
                <FaPlus />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
