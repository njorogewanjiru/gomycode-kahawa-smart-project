import { RouteObject } from "react-router-dom";
import { Tasks } from "../pages/Tasks";

const TasksRoute: RouteObject = {
  path: "/tasks",
  element: <Tasks />,
};

export default TasksRoute;
