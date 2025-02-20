'use client'
import {Container} from "@widgets/Container";
import {HandleLogin} from "@pages/Login/api/handleLogin";
import {useState} from "react";

interface LoginData {
    password: string;
    login: string;
}

export default function LoginPage() {
    const [loginData, setLoginData] = useState<LoginData>({"login": "", "password": ""})

    const handleLoginDataChange = (event) => {
        event.preventDefault();
        setLoginData((state) => ({...state, [event.target.name]: event.target.value}))
    }

    return (
        <Container className="flex flex-col justify-center gap-y-8 items-center h-full rounded-md">
            {/*захардкодил чутка отступы тк тейлвайнд вообще чет не хочет gap применять, мб у меня только так на локалке, времени нету разбираться rn*/}
            <h1 className="text-2xl text-gray-800 font-medium">Авторизация</h1>
            <div onSubmit={() => HandleLogin(loginData.login, loginData.password)}
                 className="shadow flex flex-col p-8 gap-2 mt-4">
                <label htmlFor="login" className="text-md text-gray-500">логин</label>
                <input value={loginData.login} onChange={handleLoginDataChange} name="login"
                       className="w-full border-1 border border-indigo-600 rounded-md p-1" type="text"/>
                <label htmlFor="password" className="text-md text-gray-500 mt-4">пароль</label>
                <input value={loginData.password} onChange={handleLoginDataChange} name="password"
                       className="w-full border-1 border border-indigo-600 rounded-md p-1" type="password"/>
                <button onClick={() => HandleLogin(loginData.login, loginData.password)}
                        className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-800 mt-4">Войти
                </button>
            </div>
        </Container>
    )
}