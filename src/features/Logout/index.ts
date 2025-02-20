'use client'

export const Logout = () => {

    if (typeof window !== 'undefined') {
        localStorage.clear()
        document.location.reload()
    }
}