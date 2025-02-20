'use client';

import React, { useState } from 'react';

interface InterestsModalProps {
    Close: () => void;
}

const initialInterests = ['Айти', 'Спорт', 'Книги', 'Знакомства'];

export function InterestsModal({ Close }: InterestsModalProps) {
    const [interests, setInterests] = useState<string[]>(initialInterests);
    const [newInterest, setNewInterest] = useState('');

    const handleAddInterest = () => {
        if (!newInterest.trim()) return;
        setInterests((prev) => [...prev, newInterest.trim()]);
        setNewInterest('');
    };

    const handleRemoveInterest = (interestToRemove: string) => {
        setInterests((prev) => prev.filter((i) => i !== interestToRemove));
    };

    const handleSave = async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        alert('Интересы сохранены! ' + JSON.stringify(interests));
        Close();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={Close}>
            <div onClick={event => event.stopPropagation()} className="bg-white p-6 rounded shadow-md max-w-md w-full relative">
                <h2 className="text-xl font-bold mb-4 text-indigo-600">Мои интересы</h2>

                <div className="mb-4">
                    {interests.map((interest, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between mb-2 border-b pb-1"
                        >
                            <span>{interest}</span>
                            <button
                                onClick={() => handleRemoveInterest(interest)}
                                className="text-red-500 text-sm"
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex mb-4">
                    <input
                        type="text"
                        value={newInterest}
                        onChange={(e) => setNewInterest(e.target.value)}
                        placeholder="Новый интерес..."
                        className="border rounded-l px-2 py-1 w-full focus:outline-indigo-600"
                    />
                    <button
                        onClick={handleAddInterest}
                        className="bg-indigo-600 text-white px-3 py-1 rounded-r"
                    >
                        Добавить
                    </button>
                </div>

                <div className="flex justify-end gap-2">
                    <button
                        onClick={Close}
                        className="border border-indigo-600 text-indigo-600 px-4 py-2 rounded hover:bg-indigo-50 transition"
                    >
                        Закрыть
                    </button>
                    <button
                        onClick={handleSave}
                        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </div>
    );
}
