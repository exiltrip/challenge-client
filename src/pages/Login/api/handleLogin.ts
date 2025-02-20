'use client'
import {redirect} from "next/navigation";

export const HandleLogin = (login: string, password: string) => {

    alert("login")

    localStorage.setItem('token', "123123")
    localStorage.setItem('isLoggedIn', "true")
    redirect("/")
}