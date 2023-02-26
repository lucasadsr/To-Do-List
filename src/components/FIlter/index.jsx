import styles from './Filter.module.css'

const Filter = ({ name, activated, handleFilterStatus }) => {
    return (
        <div>
            <li
                className={activated ? styles.activated : ''}
                onClick={() => handleFilterStatus(name)}
            >
                {name}
            </li>
        </div>
    )
}

export default Filter