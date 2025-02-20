'use client';

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface StatsChartProps {
    labels: string[];
    completedData: number[];
    inProgressData: number[];
}

export function StatsChart({
                               labels,
                               completedData,
                               inProgressData,
                           }: StatsChartProps) {
    const data = {
        labels,
        datasets: [
            {
                label: 'Выполненные челленджи',
                data: completedData,
                borderColor: 'rgba(34,197,94,1)', // Tailwind green-500
                backgroundColor: 'rgba(34,197,94,0.2)',
            },
            {
                label: 'Активные челленджи',
                data: inProgressData,
                borderColor: 'rgba(239,68,68,1)', // Tailwind red-500
                backgroundColor: 'rgba(239,68,68,0.2)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Статистика по челленджам',
            },
        },
    };

    return <Line data={data} options={options}/>;
}
