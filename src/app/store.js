import {configureStore} from '@reduxjs/toolkit'
//importamos el slice
import tasksReducer from '../features/tasks/taskSlice'
//Estado completo
export const store = configureStore({
    reducer:{
    tasks: tasksReducer

    }
})

//Crear un reducer

