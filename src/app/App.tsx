import React from 'react';
<<<<<<< HEAD
import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import UserPage from './pages/UserPage';
import AdminPage from './pages/AdminPage'; 
import Аdvertisement from './features/components/Advertisement';

export const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />
        {/* <Route path="/user" element={<UserPage />} /> */}
        {/* <Route path="/admin" element={<AdminPage />} /> */}
      </Routes>
    </Router>
  );
=======
import Аdvertisement from './pages/adminPage/components/Advertisement';

export const App = () => {
  return(
    <div className='App'>
      <h1>Hello, React with TypeScript!</h1>
      <Аdvertisement />
    </div>
  )
>>>>>>> 08c08570ff38da3501e1efa9e049cc8ec2f39802
};

