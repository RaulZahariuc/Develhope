

import React from 'react';
import useFormInput from './useFormInput';

const LoginForm = () => {
  const username = useFormInput('');
  const password = useFormInput('');

  const handleLogin = () => {
    console.log('Username:', username.value);
    console.log('Password:', password.value);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form>
        <label>
          Username:
          <input type="text" {...username} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" {...password} />
        </label>
        <br />
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

