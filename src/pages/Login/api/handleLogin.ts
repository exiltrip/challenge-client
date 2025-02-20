'use client'
import {redirect} from "next/navigation";

export const HandleLogin = (login: string, password: string) => {

    // заглушка, тк пока что перменные неюз
    console.log(login, password);
    alert("login")

    localStorage.setItem('token', "123123")
    localStorage.setItem('isLoggedIn', "true")
    document.location.href="/"
}