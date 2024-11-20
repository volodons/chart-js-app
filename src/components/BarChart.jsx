import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, RadialLinearScale);

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Cyan', 'Magenta', 'Lime', 'Pink'],
    datasets: [
        {
            label: 'Quantity',
            data: [12, 19, 3, 5, 2, 3, 7, 8, 6, 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 255, 255, 0.2)',
                'rgba(255, 0, 255, 0.2)',
                'rgba(0, 255, 0, 0.2)',
                'rgba(255, 192, 203, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 255, 255, 1)',
                'rgba(255, 0, 255, 1)',
                'rgba(0, 255, 0, 1)',
                'rgba(255, 192, 203, 1)'
            ],
            borderWidth: 1
        }
    ]
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Example Bar Chart'
        }
    }
};

const BarChart = () => {
    return <Bar data={data} options={options} />;
};

export default BarChart;
