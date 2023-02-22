import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import { v4 } from "uuid";

function App() {

  const [tasks, setTasks] = useState([])

  const handleNewTask = (event, taskDesc) => {
    event.preventDefault()

    if (processTaskDescription(taskDesc) !== false) {
      setTasks([...tasks, {
        id: v4(),
        desc: taskDesc,
        completed: false
      }])
    } else {
      alert("Enter a valid task!")
    }
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) => (
        id === task.id ? {...task, completed: !task.completed} : task
      ))
    )
  }

  const processTaskDescription = (desc) => {
    const newDesc = desc.trim()
    if (newDesc === '') {
      return false
    } else {
      return newDesc
    }
  }

  return (
    <div>
      <Header handleNewTask={handleNewTask} />
      {tasks.map((task) => {
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
