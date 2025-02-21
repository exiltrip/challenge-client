import React from 'react';
import { CompleteChallengeButton } from '@pages/DailyChallenge/ui/CompleteButton';

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
        <div className="p-4 bg-white rounded shadow flex flex-col items-center justify-center">

            <p className="text-gray-800 mb-4 text-center">{text}</p>
            <CompleteChallengeButton
                dailyChallengeId={id}
                isDisabled={isCompleted}
            />
            <p className="mb-4 text-indigo-500 text-center">
                Выполнили сегодня: {completedCount} чел.
            </p>


        </div>
    );
}
