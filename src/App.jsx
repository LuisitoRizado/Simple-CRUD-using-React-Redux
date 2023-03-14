
//Llamamos al estado
import {useSelector} from 'react-redux'
import { TasksList } from './components/TasksList'
import { TaskForm } from './components/TaskForm'
import  {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  //llaamos al useSelector, el cual tiene acceso a todo el estado
  return (
    <div className="bg-zinc-900 h-screen text-white">

     <div className="flex items-center justify-center h-full">
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<TasksList />} />
      <Route path='/create-task' element={<TaskForm />} />
      <Route path='/edit-task/:id' element={<TaskForm />} />

      </Routes>
      </BrowserRouter>
     </div>
     

    </div>
  )
}

export default App

//Primero instalamos redux
//Segundo, creamos el store, que es donde estarán nuestros estados
