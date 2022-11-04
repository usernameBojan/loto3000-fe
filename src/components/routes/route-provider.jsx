import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CustomRoutes from '../../consts/routes/routes';

const RouteProvider = () => (
    <Routes>
        {CustomRoutes.map(route =>
            <Route key={route.path} path={route.path} element={route.element} />
        )}
    </Routes>
)

export default RouteProvider;