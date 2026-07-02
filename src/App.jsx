import './App.css'
import Serch from './components/search'
import { TodoProvider } from './context/context'
import Tasks from './components/componenttasks/tasks'
import Add from './components/buttons/buttoadd'
import Modal from './components/modal/modal'


function App() {

  return (
    <>
      <TodoProvider>
          <Serch/>
          <Tasks/>
          <Add/>
          <Modal/>
      </TodoProvider>
    </>
  )
}

export default App
