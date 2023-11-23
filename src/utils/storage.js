function getAllTasks() {
  try {
    return JSON.parse(localStorage.tasks);
  } catch (e) {
    return [];
  }
}

function saveTasks(tasks) {
  if (tasks instanceof Array) {
    localStorage.tasks = JSON.stringify(tasks);
    return true;
  }
  return false;
}

function getTasks(page = 1, perPage = 4, search = "", status = "all") {
  const tasks = getAllTasks();

  let filteredTasks = tasks.filter((task) => {
    return task.title.toLowerCase().includes(search.toLowerCase());
  });
  if (status == "completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  } else if (status == "in-progress") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  } else {
    filteredTasks = tasks;
  }
  const start = (page - 1) * perPage;
  const currentPageTasks = filteredTasks.slice(start, start + perPage);

  return {
    tasks: currentPageTasks,
    totalTasks: {
      all: tasks.length,
      filterd: currentPageTasks.length,
    },
  };
}

function deleteTask(id) {
  const tasks = getAllTasks();
  const taskFiltered = tasks.filter((task) => task.id != id);
  saveTasks(taskFiltered);
}

function editTask(id){
  
}

export { getAllTasks, saveTasks, getTasks,deleteTask };
