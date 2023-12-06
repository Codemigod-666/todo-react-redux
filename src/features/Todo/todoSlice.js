import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            let instance = {
                id: Date.now().toString(),
                task: action.payload,
                update: false,
                completed: false,
                deleted: false
            }

            state.todos.push(instance);
        },

        updateCompleted: (state, action) => {
            let newArray = [...state.todos];
            let index = newArray.findIndex((item) => {
                return item.id === action.payload.id;
            });

            newArray[index].completed = true;
            state.todos = newArray;
        },

        updateDelete: (state, action) => {
            let newArray = [...state.todos];
            let index = newArray.findIndex((item) => {
                return item.id === action.payload.id;
            })
            newArray[index].deleted = true;
            state.todos = newArray;
        },
        updateTodo: (state, action) => {
            let newArray = [...state.todos];
            let index = newArray.findIndex((item) => {
                return item.id === action.payload.itemss.id;
            });

            newArray[index].task = action.payload.text;

        },
        setUpdate: (state, action) => {
            let newArray= [...state.todos];
            let index = newArray.findIndex((item) => {
                return item.id === action.payload.id;
            });

            newArray[index].update = !newArray[index].update;
        }
    }
})


export const {addTodo, updateCompleted,setUpdate, updateDelete, updateTodo} = todoSlice.actions;
export default todoSlice.reducer; 