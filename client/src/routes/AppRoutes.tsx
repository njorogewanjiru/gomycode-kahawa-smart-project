import { Routes, Route } from "react-router-dom";
import {Dashboard} from "../pages/Dashboard";
import Training from "../pages/Training";
import {About} from "../pages/About";
import {FarmRecords} from "../pages/FarmRecords";
import {Finance} from "../pages/Finance";
import {Inventory} from "../pages/Inventory";
import {Profile} from "../pages/Profile";
import {Reports} from "../pages/Reports";
import Tasks from "../pages/Tasks";
import {Users} from "../pages/Users";
import {Farms} from "../pages/Farms";
import {AuthLayout} from "../auth/AuthLayout";
import {RegisterClient} from "../auth/RegisterClient";
import {RegisterWorker} from "../auth/RegisterWorker";
import Login from "../auth/Login";
import {ForgotPassword} from "../auth/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/training" element={<Training />} />
      <Route path="/about" element={<About />} />
      <Route path="/farms" element={<Farms />} />
      <Route path="/records" element={<FarmRecords />} />
      <Route path="/finance" element={<Finance />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/users" element={<Users />} />

      {/* Auth-related routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register-client" element={<RegisterClient />} />
        <Route path="/register-worker" element={<RegisterWorker />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}
