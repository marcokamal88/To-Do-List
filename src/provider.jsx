/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
const todoContext = createContext();
const Provider = ({ children }) => {
  const [tasks, setTasks] = useState(["go to home", "play football"]);
  const [newtasks, setNewTask] = useState(null);
  const values = {
    tasks,
    setTasks,
    newtasks,
    setNewTask,
  };
  return <todoContext.Provider value={values}>{children}</todoContext.Provider>;
};
export const useTodoContext = () => useContext(todoContext);

export default Provider;
