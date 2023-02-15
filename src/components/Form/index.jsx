import styles from './Form.module.css'

const Input = () => {
  return (
    <form className={styles.box}>
      <input className={styles.input} type="text" name="task" placeholder='Enter your task...' />
      <input type="submit" value="Add" className={styles.button} />
    </form>
  )
}

export default Input