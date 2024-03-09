import {configureStore} from "@reduxjs/toolkit";
import countReducer  from "./reducer/todo-reducer";
import { saveState } from "./localstore";



export const store = configureStore({
    reducer: {
        todo: countReducer,
    }
});


store.subscribe(() => {
    saveState('todo', store.getState().todo)
})