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

  return (
    <div>
      <Header handleNewTask={handleNewTask} />
      {tasks.map((task) => {
        return (
          <Task key={task.id} description={task.desc} />
        )
      })}
    </div>
  );
}

export default App;
