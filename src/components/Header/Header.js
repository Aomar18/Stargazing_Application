import React, { Component } from 'react';
import { triggerLogout } from '../../redux/actions/loginActions';
import {connect} from 'react-redux';


const mapStateToProps = state => ({
  user: state.user,
});



class Header extends Component {

  logout = () => {
    this.props.dispatch(triggerLogout());
  }


  render() {
    let welcome = null;
    if (this.props.user.userName) {
      welcome = (
        <div className="welcome-body">
          <div className="welcome"> Greetings, {this.props.user.userName} </div> 
          <button className="welcomeButton" onClick={this.logout}>Log out</button>
          
        </div>
      )
    }


    return (
      <div className="instructions">
        <div clasName="inside-instructions">
          <h1 className="chrome">▁ ▂ ▄ ▅ ▆ ▇ █ vαntαgє pσínt █ ▇ ▆ ▅ ▄ ▂ ▁</h1>

          {welcome}


        </div>
      </div>
    )

  }
}
export default connect(mapStateToProps)(Header);
