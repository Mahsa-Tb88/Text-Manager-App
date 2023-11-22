import { useEffect, useState } from "react";
import AddTask from "./Componens/AddTask/AddTask";
import Filter from "./Componens/Filter/Filter";
import Pagination from "./Componens/Pagination/Pagination";
import Tasklist from "./Componens/Tasklist/Tasklist";
import { getAllTasks, saveTasks } from "./utils/storage";

export default function App() {
  // const tasksss = JSON.parse(localStorage.tasks);
  const [tasks, setTasks] = useState(getAllTasks());
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  return (
    <div className="container">
      <h1 className="text-center my-4">Text Manager App</h1>
      <AddTask tasks={tasks} setTasks={setTasks} />
      <Filter tasks={tasks} setTasks={setTasks} />
      <Tasklist tasks={tasks} />
      <Pagination currentPage={2} totalPage={4} />
    </div>
  );
}
