import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './sliceLog';
import { fetchAdvGetRequest  } from './advSlice';
import { RootState } from '../../app/Store/store';
import Header from '../../views/header';
import NavBar from '../../app/components/navBar';
import AdvBlock from '../../app/components/advBlock';

const MainPage = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.user);

  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Header />
      <NavBar />
      <AdvBlock />
    </div>
  );
};

export default MainPage;