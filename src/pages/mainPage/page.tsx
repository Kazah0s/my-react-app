import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store/store';
import Header from '../../views/header';
import NavBar from '../../app/components/navBar';
import AdvBlock from '../../app/components/advBlock';

const MainPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  return (
    <div>
      <Header />
      <NavBar />
      <AdvBlock />
    </div>
  );
};

export default MainPage;