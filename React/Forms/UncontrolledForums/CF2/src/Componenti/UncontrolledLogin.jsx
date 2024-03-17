import React from 'react';

class UncontrolledLogin extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log("Username:", username);
    console.log("Password:", password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;
