import { useState } from 'react'
import styles from './Form.module.css'

const Form = ({ handleNewTask }) => {

  const [taskDesc, setTaskDesc] = useState('')

  const handleTask = (event) => {
    setTaskDesc(event.target.value)
  }

  return (
    <form
      onSubmit={(event) => { handleNewTask(event, taskDesc); setTaskDesc('') }}
      className={styles.box}
    >
      <input
        value={taskDesc}
        onChange={handleTask}
        className={styles.input}
        type="text"
        name="task"
        placeholder='Enter your task...'
      />
      <input
        type="submit"
        value="Add"
        className={styles.button}
      />
    </form>
  )
}

export default Form