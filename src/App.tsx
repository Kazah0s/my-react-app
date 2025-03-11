import React from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { MainPage } from './pages/mainPage'


export const App = () => {
  return (
    <Router>
      <Routes >
        <Route path='/'  Component={MainPage} />
      </Routes>
    </Router>
  );
}