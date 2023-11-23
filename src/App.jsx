import { useEffect, useState } from "react";
import AddTask from "./Componens/AddTask/AddTask";
import Filter from "./Componens/Filter/Filter";
import Pagination from "./Componens/Pagination/Pagination";
import Tasklist from "./Componens/Tasklist/Tasklist";
import { getAllTasks, saveTasks } from "./utils/storage";
import Edit from "./Componens/Edit/Edit";

export default function App() {
  const [tasks, setTasks] = useState(getAllTasks());
  const [isAllTasks, setIsAllTasks] = useState(true);
  // const [searchValue, setSearchValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(null);
  function filterHandler(e) {
    setSelectedRadio(e.target.value);
    console.log(e.target.value);
  }
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit(id) {
    const index = tasks.findIndex((task) => task.id == id);
    const newTask = { ...tasks[index] };
    console.log(id);
  }
  return (
    <div className="container">
      <h1 className="text-center my-4">Text Manager App</h1>
      <AddTask
        setTasks={setTasks}
        setIsAllTasks={setIsAllTasks}
        setIsEdit={setIsEdit}
        selectedRadio={selectedRadio}
      />
      <Filter
        tasks={tasks}
        setTasks={setTasks}
        setIsAllTasks={setIsAllTasks}
        isAllTasks={isAllTasks}
        filterHandler={filterHandler}
        selectedRadio={selectedRadio}
        setSelectedRadio={setSelectedRadio}
      />
      <Tasklist
        tasks={tasks}
        setTasks={setTasks}
        handleEdit={handleEdit}
        setSelectedRadio={setSelectedRadio}
        selectedRadio={selectedRadio}
      />
      <Pagination currentPage={2} totalPage={4} />
    </div>
  );
}
