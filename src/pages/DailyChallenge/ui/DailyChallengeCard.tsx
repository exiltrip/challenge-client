import React from 'react';
import { CompleteChallengeButton } from '@pages/DailyChallenge/ui/ComepleteButton';

interface DailyChallengeProps {
    id: number;
    text: string;
    completedCount: number;
    isCompleted: boolean;
}

export async function DailyChallengeCard({
                                       id,
                                       text,
                                       completedCount,
                                       isCompleted,
                                   }: DailyChallengeProps) {
    return (
        <div className="p-4 bg-white rounded shadow">
            <h1 className="text-xl font-bold text-gray-800 mb-2">
                Дейли челлендж на сегодня:
            </h1>
            <p className="text-gray-800 mb-4">{text}</p>

            <p className="mb-4 text-indigo-600">
                Выполнили сегодня: {completedCount} чел.
            </p>

            <CompleteChallengeButton
                dailyChallengeId={id}
                isDisabled={isCompleted}
            />
        </div>
    );
}
