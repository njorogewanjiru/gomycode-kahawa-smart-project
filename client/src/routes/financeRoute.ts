import { RouteObject } from "react-router-dom";
import { Finance } from "../pages/Finance";

const FinanceRoute: RouteObject = {
  path: "/finance",
  element: <Finance />,
};

export default FinanceRoute;
