'use client'
import React from "react";

export const ProtectedComponent = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        return("")
    }
    else {
        return children;
    }
}