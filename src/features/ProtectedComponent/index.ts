'use client'
import React from "react";
import {checkIsLoggedIn} from "@shared/isLoggedIn/checkIsLoggedIn";

export const ProtectedComponent = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    const isLoggedIn = checkIsLoggedIn()
    if (!isLoggedIn) {
        return("")
    }
    else {
        return children;
    }
}