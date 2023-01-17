import React from "react";
import { useRoutes } from "react-router-dom";
import TodoHomeScreen from "../TodoHomeScreen";
import EnterInfo from "../TodoInfo/EnterInfo";

const TodoRoutes = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <TodoHomeScreen />,
    },
    {
      path: "/enterinfo",
      element: <EnterInfo />,
    },
  ]);

  return elements;
};

export default TodoRoutes;
