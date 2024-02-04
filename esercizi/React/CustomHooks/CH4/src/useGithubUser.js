
import { useState, useEffect } from 'react';

const useGithubUser = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async (username) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchUser,
    userData,
    error,
    loading,
  };
};

export default useGithubUser;
