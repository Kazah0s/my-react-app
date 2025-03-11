import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminRequest } from './slice';
import { RootState } from '../../app/Store/store'; 

const ModeratorPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;                                                                                                    

  return (
    <div>
      <h1>Страница модерации</h1>
  
    </div>
  );
};

export default ModeratorPage;