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
      desc: taskDesc
    }])
    console.log(taskDesc)
  }

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div>
      <Header handleNewTask={handleNewTask} />
      {tasks.map((task) => {
        return (
          <Task key={task.id} description={task.desc} handleDeleteTask={handleDeleteTask} id={task.id} />
        )
      })}
    </div>
  );
}

export default App;
