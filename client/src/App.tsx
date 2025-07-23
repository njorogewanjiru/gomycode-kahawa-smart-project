import { Outlet } from "react-router-dom"
import Navbar from "./components/NavBar"
// import SideBar from "./components/SideBar"
import AppRoutes from "./routes/AppRoutes"
import FloatingButton from "./components/FloatingButton"
import { FarmProvider } from "./context/FarmContext"
import Footer from "./components/Footer" // ✅ Import Footer

export default function App() {
  return (
    <FarmProvider> {/* ✅ Wrap everything in FarmProvider */}
      <Navbar />
      <FloatingButton />

      <div className="flex flex-col min-h-screen bg-[#f5efe6] text-[#3b2f2f]">
        {/* <SideBar /> */}
        <main className="flex-grow p-4">
          <AppRoutes />
          <Outlet />
        </main>

        <Footer /> {/* ✅ Add Footer at the bottom */}
      </div>
    </FarmProvider>
  )
}
