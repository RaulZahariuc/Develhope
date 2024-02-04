import { useState, useEffect } from 'react';

const useGithubUser = (username) => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('User not found');
        }
        const data = await response.json();
        setUserData(data);
        setError(null);
      } catch (error) {
        setUserData(null);
        setError(error.message);
      }
    };

    if (username) {
      fetchUserData();
    }
  }, [username]);

  return {
    userData,
    error,
  };
};

export default useGithubUser;
