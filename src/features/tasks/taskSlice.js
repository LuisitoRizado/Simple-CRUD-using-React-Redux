import {createSlice} from '@reduxjs/toolkit';
const initialState = [
    {
        id:"1",
        task:"Task 1",
        description:"Task 1 description",
        completed:false
    },{
        id:"2",
        task:"Task 2",
        description:"Task 2 description",
        completed:false
    }
]
export const taskSlice = createSlice({
    //Primero necesita un nombre
    name:'tasks',
    //Ahora un estado inicial (Cuando inicie la aplicacion)
    initialState,
    reducers:{
        //dentro de esta propiedad van las funciones que va a tener 
        //el slice ( modificaciones )
        addTask : (state , action)=>{
            state.push(action.payload);
        },
        deleteTask:(state, action)=>{
            //Vamos a buscar el payload (valor) dentro del arreglo
            const taskFound = state.find(task=>task.id===action.payload)
            if(taskFound){
                //lo quitamos del arreglo
                state.splice(state.indexOf(taskFound), 1)
            }
        },
        editTask:(state,action)=>{
            //En este, vamos a editar
            const {id,title,description} = action.payload;
            const foundTask = state.find(task=>task.id===id)
            if(foundTask){
                foundTask.title = title;
                foundTask.description = description;
            }
        }

    }
})

//exportamos sus propiedades
export default taskSlice.reducer
export const {addTask, deleteTask,editTask} = taskSlice.actions;