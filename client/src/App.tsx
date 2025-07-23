import { Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./components/NavBar"
import FloatingButton from "./components/FloatingButton"
import Footer from "./components/Footer"
import { FarmProvider } from "./context/FarmContext"
import {AuthLayout} from "./auth/AuthLayout"
import Login from "./auth/Login"
import {RegisterWorker} from "./auth/RegisterWorker"
import {RegisterClient} from "./auth/RegisterClient"
import {ForgotPassword} from "./auth/ForgotPassword"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <FarmProvider>
      <Routes>
        {/* Auth Pages */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register-worker" element={<RegisterWorker />} />
          <Route path="register-client" element={<RegisterClient />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Main Layout for App */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen bg-[#f5efe6] text-[#3b2f2f]">
              <Navbar />
              <FloatingButton />
              <main className="flex-grow p-4">
                <AppRoutes />
                <Outlet />
              </main>
              <Footer />
            </div>
          }
        />

        {/* 404 Fallback */}
        <Route path="*" element />
      </Routes>
    </FarmProvider>
  )
}
