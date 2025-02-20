'use client';

import React from 'react';

interface Challenge {
    id: number;
    text: string;
    done: boolean;
}

interface ActiveChallengesListProps {
    isLoading: boolean;
    completeChellenge: (id: number) => void;
    challenges: Challenge[];
}

export function ActiveChallengesList({isLoading, challenges, completeChellenge,}: ActiveChallengesListProps) {
    if (isLoading) {
        return <p>Загрузка активных челленджей...</p>;
    }

    if (!challenges.length) {
        return <p>У вас пока нет активных челленджей.</p>;
    }

    return (
        <div>
            <h2 className="text-xl font-semibold mb-2 text-indigo-600">
                Активные челленджи
            </h2>
            <ul className="list-disc list-inside">
                {challenges.map((ch) => (
                    <li key={ch.id} className="mb-2">
                        <span>{ch.text}</span>
                        {!ch.done && (
                            <button
                                className="ml-2 text-sm bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition"
                                onClick={() => completeChellenge(ch.id)}
                            >
                                Завершить
                            </button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
