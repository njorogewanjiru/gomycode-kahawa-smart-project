interface KahawaItemProps {
  id?: string;
  title: string;
  completed: boolean;
}

export default function KahawaItem({ title, completed }: KahawaItemProps) {
  return (
    <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4">
      <h3 className={`font-medium ${completed ? "line-through text-gray-500" : "text-[#3b2f2f]"}`}>
        {title}
      </h3>

      <div className="flex gap-2">
        <button className="px-4 py-2 bg-[#a85e3c] text-white rounded hover:bg-[#7c4b2b]">
          Edit
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
