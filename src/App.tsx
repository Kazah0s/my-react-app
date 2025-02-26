import React from 'react';
// import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
// import {regAutPage} from './pages/RegAutPage';
// import {mainPage} from './pages/mainPage'; 
import Registration from './features/register/Registration'
import {mainPage} from './pages/moderatorPage'
import {regAutPage} from './pages/mainPage'


export const App = () => {
  return (

    <Router>
      <Routes>


        {/* <Route path="/user" element={<mainPage />} /> */}
        {/* <Route path="/admin" element={<regAutPage />} /> */}
      </Routes>
    </Router>
  );
}


// <div>
// <h1>Страница регистрации</h1>
// <Registration />
// </div>