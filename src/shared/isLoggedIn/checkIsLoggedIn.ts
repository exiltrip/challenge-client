export const checkIsLoggedIn = (): string | null => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem('isLoggedIn');
    } else {
        return null;
    }
};