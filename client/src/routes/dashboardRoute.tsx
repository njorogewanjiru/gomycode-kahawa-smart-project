import type { RouteObject } from "react-router-dom";
import  Dashboard  from "../pages/Dashboard";
const DashboardRoute: RouteObject = {
  path: "/dashboard",
  element: <Dashboard />,
};

export default DashboardRoute;
