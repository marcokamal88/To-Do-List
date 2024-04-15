/* eslint-disable no-unused-vars */
import { useTodoContext } from "./provider";

const Form = () => {
  const {setTasks, newtasks, setNewTask } = useTodoContext();
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddTask = () => {
    if (newtasks.trim() !== "") {
      setTasks((T) => [...T, newtasks]);
      setNewTask("");
    }
  };
  return (
    <div className="form">
      <h2>To Do list</h2>
      <input
        type="text"
        placeholder="Add New task"
        onChange={handleInputChange}
        value={newtasks}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};
export default Form;
