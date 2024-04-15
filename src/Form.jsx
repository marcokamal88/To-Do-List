/* eslint-disable no-unused-vars */
import { useTodoContext } from "./provider";
import useAddTask  from "./useAddTask";
const Form = () => {
  const { setTasks, newtasks, setNewTask } = useTodoContext();

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
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
      <button onClick={useAddTask()} >Add</button>
    </div>
  );
};

export default Form;
