import React, { useState } from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = () => {
  const [username, setUsername] = useState('');
  const { fetchUser, userData, error, loading } = useGithubUser();

  const handleFetchUser = () => {
    fetchUser(username);
  };

  return (
    <div>
      <label>
        Enter Github username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <button onClick={handleFetchUser}>Fetch User</button>

      {loading && <div>Loading...</div>}

      {error && <div>Error: {error}</div>}

      {userData && (
        <div>
          <h2>{userData.name}</h2>
          <p>Login: {userData.login}</p>
          <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
        </div>
      )}
    </div>
  );
};

export default GithubUser;
