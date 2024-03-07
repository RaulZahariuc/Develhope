import React from 'react';

class UncontrolledLogin extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.usernameInput = React.createRef();
    this.passwordInput = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.usernameInput.current.value;
    const password = this.passwordInput.current.value;
    console.log("Username:", username);
    console.log("Password:", password);
   
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" ref={this.usernameInput} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" ref={this.passwordInput} />
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default UncontrolledLogin;

