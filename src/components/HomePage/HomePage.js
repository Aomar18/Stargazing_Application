import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
// import tr from '@material-ui/core/tr';
import TableCell from '@material-ui/core/TableCell';
// import Paper from '@material-ui/core/Paper';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  location: state.location,
  person: state.person
});

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type: 'FETCH_LOCATION' });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
  }

  // handleDetails = () => {
  //   this.props.history.push('details');
  // }


  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>

          <h2>
            Welcome, {this.props.user.userName}
          </h2>
          <br />

          <div>
            <h3>

              
              The map below provides a range of local observatories to gather
              more resources on incoming celestial events, and tools for starwatching.
           </h3>

        {/* <iframe 
        src="https://www.google.com/maps/d/embed?mid=1TwgRHcqVYIXHS6yaByCMipCeU08" width="640" height="480"></iframe> */}

          </div>

          <br />
          <h1 className="bortle-scale-info">
            The Bortle scale
            <p className="home-text">
              is a means to measure the brightness of the sky at night using a
           <br />numerical identifier that each provide a
                description of the sky quality.
          <br />
            </p>
          </h1>

          <br />

          <h1 className="NELM-info">
            The NELM index
            <p className="home-text">
              Naked-Eye Limiting Magnitude is the
              identifying marker that allows
        <br />stargazers to compare the relative darkness of
               their current location to a more structured scale
        <br />
              using their eyes alone.
            </p>

          </h1>

          <div className="table-intro"> Below is a table with detail on how the scaling works:</div>
          <br />
<div className="table">
          <Table color="secondary">
            {/* TABLE HEADER INFORMATION */}

            <TableHead>
              <TableCell><i>Bortle Scale value:</i></TableCell>
              <TableCell><i>Description</i></TableCell>
              <TableCell><i>NELM</i></TableCell>
            </TableHead>


            {/* TABLE BODY STARTS HERE */}
            <TableBody>
              <tr>
                <TableCell><h1>1</h1></TableCell>
                <TableCell><h1>Excellent Dark-Sky Site</h1></TableCell>
                <TableCell><h1>7.6–8.0</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>2</h1></TableCell>
                <TableCell><h1>Typical Truly Dark Site</h1></TableCell>
                <TableCell><h1>7.1–7.5</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>3</h1></TableCell>
                <TableCell><h1>Rural Sky</h1></TableCell>
                <TableCell><h1>6.6–7.0</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>4</h1></TableCell>
                <TableCell><h1>Rural-Subarban Transitory Site</h1></TableCell>
                <TableCell><h1>6.1–6.5</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>5</h1></TableCell>
                <TableCell><h1>Suburban Sky</h1></TableCell>
                <TableCell><h1>5.6–6.0</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>6</h1></TableCell>
                <TableCell><h1>Bright Suburban Sky</h1></TableCell>
                <TableCell><h1>5.1-5.5</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>7</h1></TableCell>
                <TableCell><h1>Suburban/urban transition</h1></TableCell>
                <TableCell><h1>4.6-5.0</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>8</h1></TableCell>
                <TableCell><h1>City sky</h1></TableCell>
                <TableCell><h1>4.1-4.5</h1></TableCell>
              </tr>
              <tr>
                <TableCell><h1>9</h1></TableCell>
                <TableCell><h1>Inner-City Sky</h1></TableCell>
                <TableCell><h1>4.0</h1></TableCell>
              </tr>
            </TableBody>
          </Table>
          </div>

          <br />
          <br />
          <br />
          <Link to="/location">Create New Post</Link>
          <br />
          {this.props.location.location.map((post) => {
            return (
              <div className="card-container">
                <div key={post.id}>

                  <div className="outercard">
                    <div className="card">
                      <h4>
                        Author: {this.props.user.userName}
                        </h4>
                      <h4>
                        ID: {post.id}
                        </h4>
                        <h4>
                        Location:   <span className="gold">{post.title}</span>
                      </h4>
                      <img src={post.image_path} alt={post.description} height="300px" width="300px" />
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            )
          })}
          <br />
          <br />
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

