import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdminRequest } from '../Store/slices/adminSlice';
import { RootState } from '../Store/store';

const AdminPage: React.FC = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.admin);

  useEffect(() => {
    dispatch(fetchAdminRequest());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Admin Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default AdminPage;