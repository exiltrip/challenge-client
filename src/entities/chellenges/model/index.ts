import { createStore, createEffect, sample } from 'effector';
import {
    fetchActiveChallengesApi,
    createNewChallengeApi,
    completeChallengeApi,
    Challenge,
} from '@/pages/PersonalChallenges/api/chellenges';

export const fetchChallengesFx = createEffect<void, Challenge[], Error>(
    async () => {
        return await fetchActiveChallengesApi();
    }
);

export const createChallengeFx = createEffect<void, Challenge, Error>(
    async () => {
        return await createNewChallengeApi();
    }
);

export const completeChallengeFx = createEffect<number, number, Error>(
    async (challengeId) => {
        return await completeChallengeApi(challengeId);
    }
);

export const $challenges = createStore<Challenge[]>([]);

$challenges
    .on(fetchChallengesFx.doneData, (_, challenges) => challenges)
    .on(createChallengeFx.doneData, (state, newChallenge) => [
        newChallenge,
        ...state,
    ])
    // .on(completeChallengeFx.doneData, (state, challengeId) =>
    //     state.map((ch) => (ch.id === challengeId ? { ...ch, done: true } : ch))
    // )
    .on(completeChallengeFx.doneData, (state, challengeId) =>
       state.filter(ch => ch.id !== challengeId)
    );


export const $challengesLoading = fetchChallengesFx.pending;
export const $challengesError = createStore<string | null>(null);

sample({
    clock: fetchChallengesFx.failData,
    fn: (err) => err.message,
    target: $challengesError,
});
