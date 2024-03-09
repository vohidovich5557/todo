import React from "react";
import { deletTodo, editTodo } from '../../config/reducer/todo-reducer';
import { useDispatch } from "react-redux";


export const Card = ({ name, id }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="flex items-center justify-between w-[400px] px-[5px] mb-[20px]">
            <h3 className="text-white font-bold text-xl">{name}</h3>
            <div className="flex items-center gap-[20px]">
            <button className="w-[100px] h-[40px] rounded-[20px] bg-black text-white text-lg" onClick={() => dispatch(deletTodo({ id }))}>DELET</button>
            <button className="w-[100px] h-[40px] rounded-[20px] bg-black text-white text-lg" onClick={() => dispatch(editTodo({ id }))}>EDIT</button>
            </div>
            </div>
        </>
    )
};