import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Routes,
} from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import NavBar from './NavBar';

const MainRoutes: React.FC = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route index element={<HomePage />} />
            </Routes>
        </Router>
    );
};

export default MainRoutes;