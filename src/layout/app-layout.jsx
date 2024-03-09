import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from 'js-cookie';




export const AppLayout = () => {
    if(!Cookies.get("token-todo")) return <Navigate to="/" replace />
    return (
        <>
        <Outlet />
        </>
    )
};