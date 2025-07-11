import { Outlet } from "react-router-dom";
import Navbar from "./components/NavBar";
import SideBar from "./components/SideBar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen bg-[#f5efe6] text-[#3b2f2f]">
        <SideBar />

        <main className="flex-grow p-4">
          <AppRoutes />
          <Outlet />
        </main>
      </div>
    </>
  );
}
