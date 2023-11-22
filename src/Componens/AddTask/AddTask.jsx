import { useRef, useState } from "react";
import "./AddTask.scss";
import { saveTasks } from "../../utils/storage";
export default function AddTask({ tasks, setTasks }) {
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
    radioRef.current.checked = false;
    setTasks([...tasks, newTask]);
    setInputValue("");
    setIsCompleted(false);
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
            Add Task
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
