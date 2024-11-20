import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    RadialLinearScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, RadialLinearScale);

const LineChart = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Sales',
                data: [65, 59, 80, 81, 56, 55],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Monthly Sales Over Time'
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `Sales: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Sales'
                },
                beginAtZero: true
            }
        }
    };

    const additionalData = {
        labels: ['July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
                label: 'Sales',
                data: [70, 65, 75, 80, 85, 90],
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true
            }
        ]
    };

    const mergedData = {
        labels: [...data.labels, ...additionalData.labels],
        datasets: [
            {
                ...data.datasets[0],
                data: [...data.datasets[0].data, ...additionalData.datasets[0].data]
            }
        ]
    };

    return (
        <div>
            <h2>Line Chart - Sales Over Time</h2>
            <Line data={mergedData} options={options} />
        </div>
    );
};

export default LineChart;
