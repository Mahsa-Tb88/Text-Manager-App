import Task from "../Task/Task";
import "./Tasklist.scss";

export default function Tasklist({ tasks }) {
  
  return (
    <ul className="list-group tasks-list">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}
