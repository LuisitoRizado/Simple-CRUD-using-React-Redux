import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import {v4 as uuid} from 'uuid'
import  {useNavigate, useParams} from 'react-router-dom'

export const TaskForm = () => {
  //un dispatch es una funcion que permite dispara eventos desde el slice
  const dispatch = useDispatch();
  const params = useParams();
  const tasks = useSelector(state=>state.tasks)
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate()
  //Guardar los datos escritos en los inputs
  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) =>{
    e.preventDefault();
    //vamos a comprobar si estamos editando o creando
    if(params.id){
      dispatch(editTask(task))
    }
    else{

      dispatch(addTask({
        ...task,
        id:uuid()
  
      }));
    }
    
    //Una vez  se agregue la tarea al state, nos regresamos
    navigate('/')

  }

  useEffect(() => {
    //Una vez cargue, vamos a buscar entre el arreglo de tareas el id
    console.log(params)
    //Comprobamos si esta el id
    if(params.id){
      setTask(
      tasks.find(task=>task.id===params.id)
      );
    }
  }, [])
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit} className='bg-zinc-800 max-w-sm p-4'>
        <label htmlFor="title" className="block text-sm font-bold mb-1">Task</label>
      <input type="text"  name="title" placeholder="title" value={task.task} onChange={handleChange} className='w-full p-2 rounded-md bg-zinc-600 mb-2'/>
      <label htmlFor="description" className="block text-xs font-bold">Description</label>
      <textarea
        rows=""
        name="description"
        cols=""
        className='w-full p-2 rounded-md bg-zinc-600 mb-2'
        placeholder="description"
        onChange={handleChange}
        value={task.description}
      ></textarea>
      <button className="bg-green-600 rounded-md p-2">Guardar</button>
      </form>
    </div>
  );
};
