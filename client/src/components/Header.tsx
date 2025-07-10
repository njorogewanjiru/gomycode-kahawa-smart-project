import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-[#3b2f2f] text-[#f5efe6] shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* App Name */}
        <div className=" bg-slate-600 font-bold text-[#f5efe6]">
          <Link to="/" className="hover:text-[#a85e3c] transition">
            Kahawa Smart
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="mt-3 md:mt-0 space-x-4 text-sm md:text-base">
          <Link to="/" className="hover:text-[#a85e3c] transition">
            Home
          </Link>
          <Link to="/training" className="hover:text-[#a85e3c] transition">
            Training
          </Link>
          <Link to="/about" className="hover:text-[#a85e3c] transition">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
export default Header;