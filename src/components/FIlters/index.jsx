import styles from './Filters.module.css'
import Filter from '../FIlter'

const Filters = ( { handleFilterStatus, filters }) => {

    return (
        <div className={styles.filters}>
            <p>Filters: </p>
            <ul>
                {filters.map((filter) => (
                    <Filter
                        key={filter.name}
                        name={filter.name}
                        activated={filter.activated}
                        handleFilterStatus={handleFilterStatus}
                    />
                ))}
            </ul>
        </div>
    )
}

export default Filters