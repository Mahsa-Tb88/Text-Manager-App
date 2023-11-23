import {
  deleteTask,
  getAllTasks,
  getTasks,
  saveTasks,
} from "../../utils/storage";
import Task from "../Task/Task";
import "./Tasklist.scss";

export default function Tasklist({
  tasks,
  setTasks,
  handleEdit,
  selectedRadio,
}) {
  function handleDelete(id) {
    const newTask = tasks.filter((task) => task.id !== id);
    deleteTask(id);
    setTasks(newTask);
  }
  function HandleToggle(id) {
    const allTasks = getAllTasks();
    const index = allTasks.findIndex((task) => task.id == id);
    const task = { ...allTasks[index] };
    task.completed = !task.completed;
    const newTasks = [...allTasks];
    newTasks[index] = task;
    saveTasks(newTasks);
    const updatedTask = getTasks(1, 32, "", selectedRadio);
    setTasks(updatedTask.tasks);
  }
  return (
    <ul className="list-group tasks-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={() => handleDelete(task.id)}
          handleEdit={() => handleEdit(task.id)}
          HandleToggle={() => HandleToggle(task.id)}
        />
      ))}
    </ul>
  );
}
