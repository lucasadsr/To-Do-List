import styles from './Task.module.css'
import { BsCheckCircleFill, BsFillTrashFill } from 'react-icons/bs'

const Task = ({ description }) => {
    return (
        <div className={styles.task}>
            <p className={styles.task_des}>{description}</p>
            <div className={styles.icons}>
                <button><BsCheckCircleFill size={36} color="white" /></button>
                <button><BsFillTrashFill size={36} color="white" /></button>
            </div>
        </div>
    )
}

export default Task