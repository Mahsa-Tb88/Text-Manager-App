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
    return;
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
  } else if ((status = "in-progress")) {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
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

export { getAllTasks,saveTasks,getTasks };
