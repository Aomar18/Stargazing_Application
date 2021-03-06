import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  handleCancel = () => {
    this.props.history.push('home');
  }

  render() {
    return (
      <div>
        {this.renderAlert()}
        <form className="register-form" onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div >
            <label htmlFor="username">
              Username:
              <input
                className="reglog"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                className="reglog"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <Button
              id="submit-register"
              type="submit"
              name="submit"
              value="Register"
              variant="contained"
          >Register </Button>

            <Button
             color="secondary"
             variant="contained"
             onClick={this.handleCancel}>
            Cancel</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterPage;

