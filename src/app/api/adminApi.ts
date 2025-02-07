export const fetchAdminApi = async () => {
    const response = await fetch('');
    if (!response.ok) {
      throw new Error('Failed to fetch admin');
    }
    return response.json();
  };