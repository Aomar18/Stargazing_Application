import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';


const mapStateToProps = state => ({
  user: state.user,
});

class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
                   

          <h1> Profile Page </h1>

<div>
  favorite posts here....
</div>


<br />
<br />
<br />


<div>
  user posts render here...
</div>

<br />
<br />


<p> pagination of user information also here..</p>


<br />
<br />


<div> link to create new post page here... </div>
<Link to="/location">Create New Post</Link>




<br/>
<br/>


        </div>
      );
    }
    

    return (
      <div>
        <Nav />
        { content }
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProfilePage);
