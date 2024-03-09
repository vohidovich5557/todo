import React from "react";
import { request } from "../../config/request";
import { addData } from '../../config/reducer/todo-reducer';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { Card } from "../../components/card";
import { Input } from "../../components/ui/input";
import { nanoid } from "@reduxjs/toolkit";
import bgImg from '../../assets/bg-img.png';



export const Home = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm();
    const { todoList } = useSelector((state) => state.todo);
    const submit = (data) => {
        dispatch(addData({ ...data, id: nanoid() }))
        reset();
    }
    return (
        <>
            <img src={bgImg} alt="img" className="w-full h-full absolute -z-10" />
            <div className="w-[450px] backdrop-blur-md bg-white/30  h-[600px] shadow-lg shadow-gray-300 ml-auto mr-auto translate-y-16 rounded-[20px] pt-[20px] pb-[20px] pl-[10px] pr-[10px] flex flex-col items-center">
                <h2 className="text-black text-2xl font-extrabold">TODO LIST</h2>
                <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center">
                    <Input variant="secondary" placeholder="Add Task" {...register("task", { required: true })} />
                    <button className="mt-[50px] w-[300px] h-[50px] bg-black text-white text-xl font-bold rounded-[20px]">ADD Task</button>
                </form>
                <div className="w-[400px] h-[300px]  mt-[10px] pt-[10px] overflow-scroll flex flex-col items-center">
                    {todoList?.map((item) => (
                        <Card
                            key={item.id}
                            name={item.task}
                            id={item.id}
                        />
                    ))}
                </div>
                <h2 className="text-black-600 text-2xl font-extrabold mt-[50px]">- - - -ShokhDev - - -</h2>
            </div>
        </>
    )
};