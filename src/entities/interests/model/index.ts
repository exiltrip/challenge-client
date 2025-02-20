import { createStore, createEffect, sample } from 'effector';
import {
    fetchInterestsApi,
    updateInterestsApi,
} from '@/pages/PersonalChallenges/api/interests';

export const fetchInterestsFx = createEffect<void, string[], Error>(async () => {
    return await fetchInterestsApi();
});

export const updateInterestsFx = createEffect<string[], string[], Error>(
    async (newInterests) => {
        return await updateInterestsApi(newInterests);
    }
);

export const $interests = createStore<string[]>([]);

$interests
    .on(fetchInterestsFx.doneData, (_, interests) => interests)
    .on(updateInterestsFx.doneData, (_, interests) => interests);

export const $interestsError = createStore<string | null>(null);

sample({
    clock: fetchInterestsFx.failData,
    fn: (err) => err.message,
    target: $interestsError,
});
