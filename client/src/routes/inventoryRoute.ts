import { RouteObject } from "react-router-dom";
import { Inventory } from "../pages/Inventory";

const InventoryRoute: RouteObject = {
  path: "/inventory",
  element: <Inventory />,
};

export default InventoryRoute;
