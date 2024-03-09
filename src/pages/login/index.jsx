import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../config/request";
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components/ui/input';
import loginImg from '../../assets/login-img.png';
import Cookies from "js-cookie";




export const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    React.useEffect(() => {
        if (Cookies.get("token-todo")) {
            navigate("/app", { replace: true });
        }
    }, [])
    const [login, setLogin] = React.useState(false);
    const submit = (data) => {
        if (login) {
            request.post('/login', data).then((res) => {
                Cookies.set("token-todo", res.data.accessToken);
                navigate('/app', { replace: true });
            })

            return;
        }

        request.post('/register', data).then((res) => {
            Cookies.set("token-todo", res.data.accessToken);
            navigate('/app', { replace: true });
        })

    }
    return (
        <>
            <img src={loginImg} alt="loginImg" className="w-full h-full -z-10 absolute" />
            <div className="w-full h-[100vh]">
                <div className="w-[400px] h-[600px] flex flex-col items-center rounded-[20px] px-[10px] py-[10px]  ml-auto mr-auto translate-y-10 backdrop-blur-md bg-white/30 ">
                    {login ? <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center justify-center pt-[120px]">
                        <h2 className="text-2xl text-black font-bold mb-[10px]">LogIn</h2>
                        <Input variant="secondary" placeholder="Email" type="email" helperText={errors?.email?.message} {...register("email", { required: true })} />
                        <Input variant="secondary" placeholder="Password" type="password" helperText={errors?.password?.message} {...register("password", { required: true })} />
                        <button className="mt-[50px] mb-[20px] w-[250px] h-[60px] rounded-[20px] bg-black text-white text-xl active:bg-white active:text-black active:border-2 active:border-black">LogIn</button>
                        <div className="flex items-center gap-[30px]">
                            <p className="">If you don`t have account?</p>
                        </div>
                    </form> :
                        <form onSubmit={handleSubmit(submit)} className="flex flex-col items-center pt-[50px]">
                            <h2 className="text-2xl text-black font-bold mb-[10px]">Register</h2>
                            <Input variant="secondary" type="email" placeholder="Email" helperText={errors?.email?.message} {...register("email", { required: true })} />
                            <Input variant="secondary" type="password" placeholder="Password" helperText={errors?.password?.message} {...register("password", { required: true })} />
                            <Input variant="secondary" type="text" placeholder="firstName" helperText={errors?.firstName?.message} {...register("firstName", { required: true })} />
                            <Input variant="secondary" type="text" placeholder="lastName" helperText={errors?.lastName?.message} {...register("lastName", { required: true })} />
                            <button className="mt-[50px] mb-[20px] w-[250px] h-[60px] rounded-[20px] bg-black text-white text-xl active:bg-white active:text-black active:border-2 active:border-black">Register</button>
                            <div className="flex items-center gap-[30px]">
                                <p className="">If you don`t have account?</p>
                            </div>
                        </form>}
                    <button onClick={() => setLogin(!login)} className="underline">{login ? "register" : "login"}</button>
                </div>
            </div>
        </>
    )
};