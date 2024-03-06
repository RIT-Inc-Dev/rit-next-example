import { useEffect } from 'react';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    type ChartData,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
    const dataset: ChartData<'doughnut'> = {
        labels: ['a', 'b', 'c'],
        datasets: [
            {
                label: 'dataset2',
                data: [1, 2, 3],
                backgroundColor: ['red', 'green', 'blue'],
            },
        ],
    };

    return (
        <main>
            <Doughnut data={dataset} />
        </main>
    );
}
