import { useRef, useState } from "react";
import "./AddTask.scss";
import { getAllTasks, getTasks, saveTasks } from "../../utils/storage";
export default function AddTask({
  setTasks,
  setIsAllTasks,
  isEdit,
  setIsEdit,
  selectedRadio,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const radioRef = useRef();
  function inputHandler(e) {
    setInputValue(e.target.value);
  }
  function addTaskHandler(e) {
    e.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      title: inputValue,
      completed: isCompleted,
    };
    const newTasks = getAllTasks();
    newTasks.push(newTask);
    saveTasks(newTasks);
    radioRef.current.checked = false;
    setIsAllTasks(true);
    const updateTask = getTasks(1, 33, "", selectedRadio);
    setTasks(updateTask.tasks);
    setInputValue("");
    setIsCompleted(false);
    setIsEdit(false);
  }
  return (
    <div>
      <form className="add-task-form">
        <div className="input-group input-group-lg">
          <input
            type="text"
            placeholder="Add a New Task..."
            className="form-control"
            value={inputValue}
            onChange={inputHandler}
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={addTaskHandler}
          >
            {isEdit ? "Edit Task" : "Add Task"}
          </button>
        </div>
        <div className="mt-2 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="completed-check"
            onChange={() => setIsCompleted(!isCompleted)}
            ref={radioRef}
          />
          <label className="form-check-label" htmlFor="completed-check">
            Is Completed?
          </label>
        </div>
      </form>
    </div>
  );
}
