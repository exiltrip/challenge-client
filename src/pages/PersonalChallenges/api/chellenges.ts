export interface Challenge {
    id: number;
    text: string;
    done: boolean;
}

let chellenges: Challenge[] = [
    { id: 1, text: 'Прочитать 20 страниц любой книги', done: false },
    { id: 2, text: 'Познакомиться с кем нибудь на улице)', done: false },
    { id: 3, text: 'Сделать 500 отжиманий за час!', done: false },
];

export async function fetchActiveChallengesApi() {
    return new Promise<Challenge[]>((resolve) => {
        setTimeout(() => {
            const active = chellenges.filter((c) => !c.done);
            resolve(active);
        }, 500);
    });
}

export async function createNewChallengeApi() {
    return new Promise<Challenge>((resolve) => {
        setTimeout(() => {
            const newChallenge = {
                id: Date.now(),
                text: 'Выгулять чужую собаку бесплатно!',
                done: false,
            };

            chellenges = [newChallenge, ...chellenges];
            resolve(newChallenge);
        }, 1000);
    });
}

export async function completeChallengeApi(challengeId: number) {
    return new Promise<number>((resolve) => {
        setTimeout(() => {
            chellenges = chellenges.map((ch) =>
                ch.id === challengeId ? { ...ch, done: true } : ch
            );
            resolve(challengeId);
        }, 500);
    });
}
