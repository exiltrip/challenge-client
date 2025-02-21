'use client';

import React from 'react';
import {completeDailyChallenge} from '../api/CompleteDailyChallenge';

interface CompleteChallengeButtonProps {
    dailyChallengeId: number;
    isDisabled: boolean;
}

export function CompleteChallengeButton({
                                            isDisabled,
                                        }: CompleteChallengeButtonProps) {
    const handleClick = async () => {
        await completeDailyChallenge();
        await alert("дейлик завершен! на данный момент грузятся мок данные, поэтому счетчик не был обновлен.")
    };

    return (
        <button
            onClick={handleClick}
            disabled={isDisabled}
            className={`bg-indigo-600 text-white px-4 py-2 transition-colors duration-200 rounded-md  ${
                isDisabled
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-indigo-700'
            }`}
        >
            Отметить как выполненный
        </button>
    );
}
