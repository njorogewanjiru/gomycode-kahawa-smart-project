// import { Link, useLocation } from "react-router-dom";
// import { FaHome, FaBookOpen, FaInfoCircle } from "react-icons/fa";

// const SideBar = () => {
//   const location = useLocation();

//   const links = [
//     { to: "/", label: "Home", icon: <FaHome /> },
//     { to: "/training", label: "Training", icon: <FaBookOpen /> },
//     { to: "/about", label: "About", icon: <FaInfoCircle /> },
//   ];

//   return (
//     <aside className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-gray-700
// w-64 min-h-screen py-8 px-6 hidden md:block shadow-lg">
//       <div className="text-2xl font-bold mb-10 text-center tracking-wide">

//       </div>

//       <nav className="space-y-4">
//         {links.map((link) => (
//           <Link
//             key={link.to}
//             to={link.to}
//             className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition ${location.pathname === link.to
//                 ? "bg-[#5e8c61] text-white"
//                 : "hover:bg-[#4b382a]"
//               }`}
//           >
//             <span>{link.icon}</span>
//             <span>{link.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default SideBar;
