import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import { v4 } from "uuid";

function App() {

  const [tasks, setTasks] = useState([])

  const handleNewTask = (event, taskDesc) => {
    event.preventDefault()
    setTasks([...tasks, {
      id: v4(),
      desc: taskDesc,
      completed: false
    }])
    console.log(taskDesc)
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
