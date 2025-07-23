import type { RouteObject } from "react-router-dom";
import { About } from "../pages/About";

const AboutRoute: RouteObject = {
  path: "/about",
  element: <About />,
};

export default AboutRoute;
