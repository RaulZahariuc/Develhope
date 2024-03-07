import React, { useState } from 'react';

export function Login({ onLogin }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  });

  function handleData(e) {
    const { name, value, checked, type } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleLoginButton() {
    // Assuming `onLogin` is a function passed as a prop
    if (onLogin) {
      onLogin(data);
    }
  }

  function handleReset() {
    setData({
      username: '',
      password: '',
      rememberMe: false,
    });
  }

  const { username, password, rememberMe } = data;
  const disabled = username === '' || password === '';

  return (
    <div>
      <h1>My Form:</h1>
      <input
        type="text"
        name="username"
        value={username}
        onChange={handleData}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={handleData}
        placeholder="Password"
      />
      <label>
        Remember me:
        <input
          type="checkbox"
          name="rememberMe"
          checked={rememberMe}
          onChange={handleData}
        />
      </label>
      <button onClick={handleLoginButton} disabled={disabled}>
        Login
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
