import { Container } from '@widgets/Container';
import { DailyChallengeCard } from './DailyChallengeCard';
import { fetchDailyChallengeData } from '../api/FetchDailyChallenge';
import React from "react";

export default async function DailyChallengePage() {

    const dailyChallenge = await fetchDailyChallengeData();

    return (
        <Container>
            <h1 className="text-4xl text-center font-bold text-gray-800 mb-2">
                Дейли челлендж на сегодня:
            </h1>
            <DailyChallengeCard
                id={dailyChallenge.id}
                text={dailyChallenge.text}
                completedCount={dailyChallenge.completedCount}
                isCompleted={dailyChallenge.isCompleted}
            />
        </Container>
    );
}
