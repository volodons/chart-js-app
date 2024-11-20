import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/bar-chart">Bar Chart</Link>
                </li>
                <li>
                    <Link to="/line-chart">Line Chart</Link>
                </li>
                <li>
                    <Link to="/pie-chart">Pie Chart</Link>
                </li>
                <li>
                    <Link to="/doughnut-chart">Doughnut Chart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;
