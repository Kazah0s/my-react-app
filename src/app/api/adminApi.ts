export const fetchAdminApi = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
    if (!response.ok) {
      throw new Error('Failed to fetch admin');
    }
    return response.json();
  };  