import { useTodoContext } from "./provider";

const useAddTask = () => {
  const { setTasks, newtasks, setNewTask } = useTodoContext();
  const handleAddTask = () => {
    if (newtasks == null) {
      return;
    }
    if (newtasks.trim() !== "") {
      console.log(newtasks);
      setTasks((T) => [...T, newtasks]);
      setNewTask("");
    }
  };
  return handleAddTask;
};
export default useAddTask;
