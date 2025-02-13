import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from '../Store/slices/userSlice';
import { RootState } from '../Store/store';

const userPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.counter.user);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;                                                                                                    

  return (
    <div>
      <h1>user Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default userPage;