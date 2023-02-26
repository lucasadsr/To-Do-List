import './Header.module.css'
import Form from '../Form'
import Filters from '../FIlters'

const Header = ({ handleNewTask, handleFilterStatus, filters }) => {
  return (
    <header>
      <h1>To do list</h1>
      <Form handleNewTask={handleNewTask} />
      <Filters handleFilterStatus={handleFilterStatus} filters={filters} />
    </header>
  )
}

export default Header