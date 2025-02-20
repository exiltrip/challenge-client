'use client'

export const Logout = () => {
    localStorage.clear()
    document.location.reload()
}