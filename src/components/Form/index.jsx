import { useState } from 'react'
import styles from './Form.module.css'

const Input = () => {

  const [task, setTask] = useState('')

  const handleTask = (event) => {
    setTask(event.target.value)
  }

  return (
    <form className={styles.box}>
      <input
        value={task}
        onChange={handleTask}
        className={styles.input}
        type="text"
        name="task"
        placeholder='Enter your task...'
      />
      <input type="submit" value="Add" className={styles.button} />
    </form>
  )
}

export default Input