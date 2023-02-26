import styles from './Task.module.css'
import { BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

const Task = ({ task, handleDeleteTask, handleTaskStatus }) => {
    return (
        <div className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
            <p className={styles.task_des}>{task.desc}</p>
            <div className={styles.icons}>
                <button onClick={() => handleTaskStatus(task.id)}>
                    <BsCheckCircleFill
                        size={36}
                        color="white"
                    />
                </button>
                <button onClick={() => handleDeleteTask(task.id)}>
                    <BsFillTrashFill
                        size={36}
                        color="white"
                    />
                </button>
            </div>
        </div>
    )
}

export default Task