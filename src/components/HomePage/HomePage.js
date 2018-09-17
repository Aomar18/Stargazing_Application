import React, { Component } from 'react';
import { connect } from 'react-redux';

import Nav from '../../components/Nav/Nav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>

          Welcome, {this.props.user.userName}hmed!
          <br/>


<br/>
<br/>
<br/>


<p>
  -------------
</p>

<p> static information about observatories - 4 posts
</p>

<p>
  -------------
</p>


<br/>
<br/>
<br/>

<p>
  -------------
</p>

<p>user posts render here</p>

<p>
  -------------
</p>







<button onClick={this.logout} > Sign Out </button>
        </div>
      );
    }

    return (
      <div>
        <Nav className="navnav" />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(HomePage);

