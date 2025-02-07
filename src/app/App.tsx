import React from 'react';
import './style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage'; 
import Аdvertisement from './features/components/Advertisement';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

