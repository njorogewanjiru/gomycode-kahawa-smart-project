import { Link, useLocation } from "react-router-dom";
import { Home, Info, Trees } from "lucide-react";
import { useFarm } from "../context/FarmContext";

export default function Navbar() {
  const location = useLocation();
  const { currentFarm } = useFarm();

  const navLinkClasses = (path: string) =>
    `flex items-center gap-1 px-3 py-2 text-sm font-medium transition ${
      location.pathname === path
        ? "text-white bg-[#a85e3c] rounded"
        : "text-[#3b2f2f] hover:text-[#a85e3c]"
    }`;

  return (
    <nav className="w-full shadow-sm">
      <div className="max-w-7xl bg-gradient-to-t from-emerald-600 via-emerald-500 to-slate-700 mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* Left links */}
        <div className="flex gap-4">
          <Link to="/" className={navLinkClasses("/")}>
            <Home className="w-4 h-4" />
            Home
          </Link>
          <Link to="/about" className={navLinkClasses("/about")}>
            <Info className="w-4 h-4" />
            About
          </Link>
          <Link to="/farms" className={navLinkClasses("/farms")}>
            <Trees className="w-4 h-4" />
            Farms
          </Link>
        </div>

        {/* Center title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-bold text-yellow-100">Kahawa Smart</h1>
        </div>

        {/* Right: Selected Farm */}
        <div className="text-sm text-white font-semibold w-28 text-right truncate">
          {currentFarm ? currentFarm.name : ""}
        </div>
      </div>
    </nav>
  );
}
