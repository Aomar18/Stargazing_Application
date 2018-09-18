import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link  } from 'react-router-dom';
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
      this.props.history.push('user');
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

       <h2>
            Welcome, {this.props.user.userName}hmed!
            </h2>
          <br/>


<br/>
<br/>
<br/>

<div>
  <info>
    Stargazers is an application that allows users to yada yada..... 

  </info>
</div>

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
<br/>
<br/>
<Link to="/location">Create New Post</Link>





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

