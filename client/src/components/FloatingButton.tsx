import { useLocation } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

export default function FloatingButton() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <button
      className="fixed top-4 left-4 z-50 bg-[#5e8c61] text-white rounded-full p-3 shadow-lg hover:bg-[#4b6d4f] transition-all"
      onClick={() => window.history.back()} 
      title="Go back"
    >
      <ArrowLeftCircle className="w-6 h-6" />
    </button>
  );
}
