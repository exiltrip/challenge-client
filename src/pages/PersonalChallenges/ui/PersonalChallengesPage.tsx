'use client';

import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import {
    $challenges,
    $challengesLoading,
    fetchChallengesFx,
    createChallengeFx,
    completeChallengeFx
} from '@/entities/chellenges/model';
import { fetchInterestsFx } from '@/entities/interests/model';

import { ActiveChallengesList } from './ActiveChellengesList';
import { InterestsModal } from './InterestModal';
import { StatsChart } from './StatsChart';
import {Container} from "@widgets/Container";

export function PersonalChallengesPage() {
    const challenges = useStore($challenges);
    const isChallengesLoading = useStore($challengesLoading);

    const [isModalOpen, setIsModalOpen] = React.useState(false);

    useEffect(() => {
        fetchChallengesFx();
        fetchInterestsFx();
    }, []);

    const handleCreateNewChallenge = async () => {
        try {
            const newChallenge = await createChallengeFx();
            alert('Новый челлендж: ' + newChallenge.text);
        } catch (error) {
            console.error(error);
            alert('Ошибка при создании челленджа');
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return (
        <Container>
            <h1 className="text-2xl font-bold mb-4 text-indigo-600">
                Личные челленджи
            </h1>

            <div className="mb-4">
                <button
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                    onClick={handleCreateNewChallenge}
                >
                    Взять новый челлендж!
                </button>
            </div>

            <div className="mb-8">
                <button
                    className="bg-white text-indigo-600 border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition"
                    onClick={openModal}
                >
                    Настроить интересы
                </button>
            </div>

            {isModalOpen && <InterestsModal Close={closeModal} />}

            <ActiveChallengesList
                completeChellenge={completeChallengeFx}
                challenges={challenges}
                isLoading={isChallengesLoading}
            />

            <div className="mt-8">
                <h2 className="text-xl font-semibold mb-2 text-indigo-600">
                    Статистика (пример)
                </h2>
                <StatsChart
                    labels={['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']}
                    completedData={[2, 3, 4, 5, 6, 7, 7]}
                    inProgressData={[1, 1, 2, 2, 1, 3, 2]}
                />
            </div>
        </Container>
    );
}
