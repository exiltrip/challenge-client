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
                    <div key={ch.id} className="pl-2 mb-2 rounded-md bg-gray-50 max-sm:flex max-sm:justify-between max-sm:text-sm md:text-nowrap md:w-min lg:text-nowrap lg:w-min xl:w-min xl:text-nowrap">
                        <span>{ch.text}</span>
                        {!ch.done && (
                            <button
                                className="ml-2 text-sm bg-indigo-600 text-white px-2 py-1 rounded hover:bg-indigo-700 transition"
                                onClick={() => completeChellenge(ch.id)}
                            >
                                Завершить
                            </button>
                        )}
                    </div>
                ))}
            </ul>
        </div>
    );
}
