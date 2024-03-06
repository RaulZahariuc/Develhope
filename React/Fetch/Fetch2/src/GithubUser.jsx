
// GithubUser.jsx
import React from 'react';

const GithubUser = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Login: {user.login}</p>
      <img src={user.avatar_url} alt={`${user.login}'s avatar`} />
    </div>
  );
};

export default GithubUser;

