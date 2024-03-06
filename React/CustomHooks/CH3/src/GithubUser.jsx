
import React from 'react';
import useGithubUser from './useGithubUser';

const GithubUser = ({ username }) => {
  const { userData, error } = useGithubUser(username);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Login: {userData.login}</p>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} />
    </div>
  );
};

export default GithubUser;
