import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Paper from '@material-ui/core/Paper';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  location: state.location
});

class HomePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({ type:'FETCH_LOCATION' });
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

          <h2>
            Welcome, {this.props.user.userName}hmed!
            </h2>
          <br />

          <div>
            <h2>
             *** Stargazers is an application that provides you with a means to..... ****


  </h2>
          </div>

          <p> static information about observatories - 4 posts GOES HERE!!</p>
          <br/>
          <div className="bortle-scale-info">
            <p> The Bortle scale is a means to measure the brightness of the sky at night using a
  <br />
              numerical identifier that each provide a description of the sky quality.
  <br />
            </p>
          </div>

          <br />

          <div className="NELM-info">
            <p>The NELM index (Naked-Eye Limiting Magnitude) is the identifying marker that allows
        <br />
              stargazers to comapare the relative darkness of their current location to a more structured scale
        <br />
              using their eyes alone.
            </p>

          </div>

          <div className="table-intro"> Below is a table with detail on how the scaling works:</div>
          <br />
          <Table color="secondary">
            {/* TABLE HEADER INFORMATION */}

            <TableHead>
              <TableCell>Bortle Scale value:</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>NELM</TableCell>
            </TableHead>


            {/* TABLE BODY STARTS HERE */}
            <TableBody>
              <TableRow>
                <TableCell><h1>1</h1></TableCell>
                <TableCell>Excellent Dark-Sky Site </TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>2</h1></TableCell>
                <TableCell>Typical Truly Dark Site</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>3</h1></TableCell>
                <TableCell>Rural Sky</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>4</h1></TableCell>
                <TableCell>Rural-Subarban Transitory Site</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>5</h1></TableCell>
                <TableCell>Bright Suburban Sky</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>6</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>7</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>8</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell><h1>9</h1></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <br />
          <br />
          <br />




          {this.props.location.location.map((post) => {
            return (

              <div key={post.id}>
                <Paper >
                  <div className="card">
                    <h4>{post.title}</h4>
                    <img src={post.image_path} alt={post.description} height="300px" width="300px" />
                  </div>
                </Paper>
                <br />
              </div>
            )
          })}

          <p>

          </p>
          <br />
          <br />
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

