import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#f5efe6] text-[#3b2f2f]">
      {/* SideBar (hidden on small screens) */}
      <SideBar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <Header />

        {/* Routed Pages */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
