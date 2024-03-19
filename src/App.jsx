import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(["go to home", "play football"]);
  const [newTask, setNewTask] = useState(null);
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks((T) => [...T, newTask]);
      setNewTask("");
    }
  };
  const handleDelete = (indx) => {
    setTasks(tasks.filter((_, i) => i !== indx));
  };
  const handleUp = (indx) => {
    if (indx > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[indx], updatedTasks[indx - 1]] = [
        updatedTasks[indx - 1],
        updatedTasks[indx],
      ];
      setTasks(updatedTasks);
    }
  };
  const handleDown = (indx) => {
    if (indx < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[indx], updatedTasks[indx + 1]] = [
        updatedTasks[indx + 1],
        updatedTasks[indx],
      ];
      setTasks(updatedTasks);
    }
  };

  return (
    <>
      <div>
        <h2>To Do list</h2>
        <input
          type="text"
          placeholder="Add New task"
          onChange={handleInputChange}
          value={newTask}
        />
        <button onClick={handleAddTask}>Add</button>
        <ol>
          {tasks.map((task, indx) => (
            <li key={indx}>
              <span>{task}</span>
              <button onClick={() => handleDelete(indx)}> Delete</button>
              <button onClick={() => handleUp(indx)}> up</button>
              <button onClick={() => handleDown(indx)}> down</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default App;
