'use client'
import {Container} from "@widgets/Container";
import {HandleLogin} from "@pages/Login/api/handleLogin";
import {useState} from "react";
import {Button, Input} from "@headlessui/react";
import Link from "next/link";

interface LoginData {
    password: string;
    login: string;
}

export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginData>({"login": "", "password": ""})

    const handleLoginDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setLoginData((state) => ({...state, [event.target.name]: event.target.value}))
    }

    return (
        <Container className="flex flex-col justify-center gap-y-8 items-center h-full">
            <h1 className="text-2xl text-gray-800 font-medium">Авторизация</h1>
            <div onSubmit={() => HandleLogin(loginData.login, loginData.password)}
                 className="shadow flex bg-gray-50 flex-col p-8 gap-2 rounded-md">
                <label htmlFor="login" className="text-md text-gray-500">логин</label>
                <Input value={loginData.login} onChange={handleLoginDataChange} name="login"
                       className="w-full outline-none border-1 border border-indigo-600 rounded-md p-1" type="email"/>
                <label htmlFor="password" className="text-md text-gray-500 mt-4">пароль</label>
                <Input value={loginData.password} onChange={handleLoginDataChange} name="password"
                       className="w-full outline-none border-1 border border-indigo-600 rounded-md p-1"
                       type="password"/>
                <Button onClick={() => HandleLogin(loginData.login, loginData.password)}
                        className="bg-indigo-600 text-white py-2 duration-500 rounded-md hover:bg-indigo-800 mt-4">Войти
                </Button>
            </div>
            <span>Нет аккаунта? <Link className="text-indigo-600" href="/auth/register">Зарегестрироваться</Link></span>
        </Container>
    )
}