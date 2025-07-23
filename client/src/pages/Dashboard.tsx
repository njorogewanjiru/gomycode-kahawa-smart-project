import { Link } from "react-router-dom";
import {
  ClipboardList,
  Tractor,
  DollarSign,
  Users,
  MapPin,
  CheckSquare,
  GraduationCap,
  BarChart3,
  UserCircle,
  Info
} from "lucide-react";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5efe6] to-[#e8dccf] px-6 py-10 text-lime-700"
    style={{
        backgroundImage: "url('/ripe-coffee-berries.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <h1 className="text-3xl font-bold text-center text-cyan-400 mb-12">Dashboard Overview</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ to, title, Icon }) => {
          const isAbout = title === "About";

          return (
            <Link
              to={to}
              key={title}
              className={`group bg-white p-6 rounded-xl shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg active:bg-[#d4ede1] cursor-pointer flex items-center gap-4 ${
                isAbout ? "col-span-full justify-center mx-auto w-fit" : ""
              }`}
            >
              <Icon className="w-6 h-6 text-[#5e8c61] group-hover:text-[#3b2f2f]" />
              <h2 className="text-xl font-semibold text-[#3b2f2f] group-hover:text-[#5e8c61]">
                {title}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const cards = [
  { to: "/records", title: "Farm Records", Icon: ClipboardList },
  { to: "/finance", title: "Finance", Icon: DollarSign },
  { to: "/inventory", title: "Inventory", Icon: Tractor },
  { to: "/users", title: "Users", Icon: Users },
  { to: "/farms", title: "Farms", Icon: MapPin },
  { to: "/tasks", title: "Tasks", Icon: CheckSquare },
  { to: "/training", title: "Training", Icon: GraduationCap },
  { to: "/reports", title: "Reports", Icon: BarChart3 },
  { to: "/profile", title: "Profile", Icon: UserCircle },
  { to: "/about", title: "About", Icon: Info },
];
export default Dashboard;
