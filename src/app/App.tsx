import React from 'react';
// import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
// import {regAutPage} from './pages/RegAutPage';
// import {mainPage} from './pages/mainPage'; 
import Registration from './pages/RegAutPage/features/input/Registration'


export const App = () => {
  return (
        <div>
          <h1>Страница регистрации</h1>
          <Registration />
        </div>

  );
}


// <Router>
// <Routes>


//   {/* <Route path="/user" element={<mainPage />} /> */}
//   {/* <Route path="/admin" element={<regAutPage />} /> */}
// </Routes>
// </Router>