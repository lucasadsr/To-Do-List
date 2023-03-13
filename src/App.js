import { useState, useEffect } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import { v4 } from "uuid";

const LOCAL_STORAGE_KEY = 'tasks'

function App() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filters, setFilters] = useState([
    {
      name: "All",
      activated: true
    },
    {
      name: "Active",
      activated: false
    },
    {
      name: "Completed",
      activated: false
    }
  ]);

  // local storage feature
  useEffect(() => {
    const localStorageTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if(localStorageTasks) {
      setTasks(JSON.parse(localStorageTasks));
    }
  }, []);

  const saveTasks = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  };

  const handleNewTask = (event, taskDesc) => {
    event.preventDefault();

    if (processTaskDescription(taskDesc) !== false) {
      saveTasks([...tasks, {
        id: v4(),
        desc: taskDesc,
        completed: false
      }]);
    } else {
      alert("Enter a valid task!");
    }
  };

  const handleDeleteTask = (id) => {
    saveTasks(tasks.filter(task => task.id !== id));
  };

  const handleTaskStatus = (id) => {
    saveTasks(
      tasks.map((task) => (
        id === task.id ? { ...task, completed: !task.completed } : task
      ))
    );
  };

  const processTaskDescription = (desc) => {
    const newDesc = desc.trim();
    if (newDesc === '') {
      return false;
    } else {
      return newDesc;
    }
  };

  const handleFilterStatus = (name) => {
    setFilters(
      filters.map((filter) => (
        name === filter.name ? { ...filter, activated: true } : { ...filter, activated: false }
      ))
    )
  };

  useEffect(() => {
    const filteredTasks = tasks.filter((task) => {
      if (filters[1].activated) {
        return !task.completed;
      } else if (filters[2].activated) {
        return task.completed;
      }
      return true;
    });
    setFilteredTasks(filteredTasks);
  }, [tasks, filters]);

  return (
    <div>
      <Header
        handleNewTask={handleNewTask}
        handleFilterStatus={handleFilterStatus}
        filters={filters}
      />
      {filteredTasks.map((task) => {
        return (
          <Task
            key={task.id}
            handleDeleteTask={handleDeleteTask}
            handleTaskStatus={handleTaskStatus}
            task={task}
          />
        )
      })}
    </div>
  );
}

export default App;