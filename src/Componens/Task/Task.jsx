import "./Task.scss";

export default function Task({ task, handleDelete, handleEdit, HandleToggle }) {
  const statusClasses = [
    "status",
    task.completed ? "bg-success" : "bg-secondary",
  ].join(" ");
  const toggleClasses = [
    "btn",
    task.completed ? "btn-secondary" : "btn-success",
  ].join(" ");

  return (
    <li className="list-group-item d-flex flex-column flex-md-row task ">
      <div>
        <span className="title-box">{task.title}</span>
        <span className={statusClasses}>
          {task.completed ? "completed" : "In progress"}
        </span>
      </div>
      <div className="actions">
        <button className={toggleClasses} onClick={HandleToggle}>
          Toggle
        </button>
        <button className="btn btn-primary mx-2" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}
