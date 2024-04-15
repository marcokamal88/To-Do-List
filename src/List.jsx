/* eslint-disable no-unused-vars */
import { useTodoContext } from "./provider";

const List = () => {
  const {tasks, setTasks} = useTodoContext();

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
  );
};
export default List;
