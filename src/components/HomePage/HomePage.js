import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
// import tr from '@material-ui/core/tr';
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
            <h2>
              *** Vantage Point is an application that provides you with a means to..... ****


  </h2>
          </div>

          <p> static information about observatories - 4 posts GOES HERE!!</p>
          <br />
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
                <TableCell><i>Bortle Scale value:</i></TableCell>
                <TableCell><i>Description</i></TableCell>
                <TableCell><i>NELM</i></TableCell>
              </TableHead>


              {/* TABLE BODY STARTS HERE */}
              <TableBody>
                <tr>
                  <TableCell><h1>1</h1></TableCell>
                  <TableCell>Excellent Dark-Sky Site </TableCell>
                  <TableCell>7.6–8.0</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>2</h1></TableCell>
                  <TableCell>Typical Truly Dark Site</TableCell>
                  <TableCell>7.1–7.5</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>3</h1></TableCell>
                  <TableCell>Rural Sky</TableCell>
                  <TableCell>6.6–7.0</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>4</h1></TableCell>
                  <TableCell>Rural-Subarban Transitory Site</TableCell>
                  <TableCell>6.1–6.5</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>5</h1></TableCell>
                  <TableCell>Suburban Sky</TableCell>
                  <TableCell>5.6–6.0</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>6</h1></TableCell>
                  <TableCell>Bright Suburban Sky</TableCell>
                  <TableCell>5.1-5.5</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>7</h1></TableCell>
                  <TableCell>Suburban/urban transition</TableCell>
                  <TableCell>4.6-5.0</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>8</h1></TableCell>
                  <TableCell>City sky</TableCell>
                  <TableCell>4.1-4.5</TableCell>
                </tr>
                <tr>
                  <TableCell><h1>9</h1></TableCell>
                  <TableCell>Inner-City Sky</TableCell>
                  <TableCell>4.0</TableCell>
                </tr>
              </TableBody>
            </Table>
          

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

          <p>

          </p>
          <br />
          <br />






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

