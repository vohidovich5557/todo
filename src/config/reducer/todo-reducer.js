import {createSlice} from "@reduxjs/toolkit";
import { loadState } from "../localstore";

const initialState = loadState('todo') || {
    todoList: [],
    count: 0
}

export const todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addData: (state,action) => {
            return {...state, todoList:[...state.todoList, action.payload]}
        },
        deletTodo: (state,action) => {
            return {...state, todoList: state.todoList.filter((item) => item.id !== action.payload.id)}
        },
        editTodo: (state,action) => {
            const newMessage = prompt();
            return {...state, todoList: state.todoList.map((item) => item.id == action.payload.id ? {task: newMessage} : item) }
        }
    }
});

export default todo.reducer;

export const {addData, deletTodo, editTodo} = todo.actions;
