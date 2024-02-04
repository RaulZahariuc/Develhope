// GithubUsers.jsx
import React, { useState } from 'react';
import GithubUser from './GithubUser';

const GithubUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Error searching for users');
      }
      const data = await response.json();
      setSearchResults(data.items);
      setError(null);
    } catch (error) {
      setSearchResults([]);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Github User Search</h1>
      <form onSubmit={handleSearch}>
        <label>
          Search by username:
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {error && <div>Error: {error}</div>}

      <ul>
        {searchResults.map((user) => (
          <li key={user.id}>
            <GithubUser user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;
