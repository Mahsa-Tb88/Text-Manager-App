import { useEffect, useState } from "react";
import { getTasks } from "../../utils/storage";
import "./Filter.scss";
export default function Filter({ setTasks }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  function searchHandler(e) {
    setSearchValue(e.target.value);
  }
  function filterHandler(e) {
    console.log(e.target.value);
    setSelectedRadio(e.target.value);
  }
  useEffect(() => {
    const filteredTasks = getTasks(1, 3, searchValue, selectedRadio);
    setTasks(filteredTasks.tasks);
  }, [searchValue, selectedRadio]);
  return (
    <div className="filter flex-column flex-md-row align-items-md-center ">
      <div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            id="all-tasks"
            onChange={filterHandler}
            value="all"
          />
          <label className="form-check-label" htmlFor="all-tasks">
            All Tasks
          </label>
        </div>

        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            id="completed-task"
            value="completed"
            onChange={filterHandler}
          />
          <label className="form-check-label" htmlFor="completed-task">
            completed
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="status"
            id="in-progress-task"
            value="in-progress"
            onChange={filterHandler}
          />
          <label className="form-check-label" htmlFor="in-progress-task">
            In progress
          </label>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="serach..."
          className="form-control"
          value={searchValue}
          onChange={searchHandler}
        />
      </div>
    </div>
  );
}
