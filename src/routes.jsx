import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import BarChartPage from './pages/BarChartPage';
import LineChartPage from './pages/LineChartPage';
import PieChartPage from './pages/PieChartPage';
import DoughnutChartPage from './pages/DoughnutChartPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/bar-chart" element={<BarChartPage />} />
                <Route path="/line-chart" element={<LineChartPage />} />
                <Route path="/pie-chart" element={<PieChartPage />} />
                <Route path="/doughnut-chart" element={<DoughnutChartPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
