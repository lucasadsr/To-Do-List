import './Header.module.css'
import Form from '../Form'

const Header = ({ handleNewTask }) => {
  return (
    <header>
      <h1>To do list</h1>
      <Form handleNewTask={handleNewTask} />
    </header>
  )
}

export default Header