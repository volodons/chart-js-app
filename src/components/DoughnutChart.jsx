import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, RadialLinearScale } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const DoughnutChart = () => {
    const data = {
        labels: [
            'Red',
            'Blue',
            'Yellow',
            'Green',
            'Purple',
            'Orange',
            'Pink',
            'Cyan',
            'Magenta',
            'Lime',
            'Indigo',
            'Teal'
        ],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3, 7, 11, 5, 8, 3, 7],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 182, 193, 0.2)',
                    'rgba(0, 255, 255, 0.2)',
                    'rgba(255, 0, 255, 0.2)',
                    'rgba(0, 255, 0, 0.2)',
                    'rgba(75, 0, 130, 0.2)',
                    'rgba(0, 128, 128, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 182, 193, 1)',
                    'rgba(0, 255, 255, 1)',
                    'rgba(255, 0, 255, 1)',
                    'rgba(0, 255, 0, 1)',
                    'rgba(75, 0, 130, 1)',
                    'rgba(0, 128, 128, 1)'
                ],
                borderWidth: 1
            }
        ]
    };

    return <Doughnut data={data} />;
};

export default DoughnutChart;
