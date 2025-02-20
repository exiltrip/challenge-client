let userInterests: string[] = ['Айти', 'Спорт', 'Книги'];

export async function fetchInterestsApi() {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            resolve([...userInterests]);
        }, 500);
    });
}

export async function updateInterestsApi(interests: string[]) {
    return new Promise<string[]>((resolve) => {
        setTimeout(() => {
            userInterests = [...interests];
            resolve(userInterests);
        }, 700);
    });
}
