import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Paper from '@material-ui/core/Paper';


const mapStateToProps = state => ({
  user: state.user,
  location: state.location
});

class ProfilePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    // this.getLocation();
    this.getById();
    this.props.dispatch({ type: 'BY_ID'})
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }


  getLocation = () => {
    this.props.dispatch({ type: 'FETCH_LOCATION' })
  }


  getById = () => {
    console.log('in getById, user id:')
    this.props.dispatch({ type: 'BY_ID'})
  }

  render() {
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          

          <h1> Profile Page </h1>

          <div className="card-container-pp">
            {this.props.location.location.map((post) => {
              return (

                <div key={post.id}>
                  <Paper >
                    <div className="card">
                      <span>
                        <p>Name of location:</p>
                        <h4>{post.title}</h4>
                        <p>Description:</p>
                        <h4>{post.description}</h4>
                        <h4><p>Bortle Scale Value:</p>{post.bortle_value}</h4>

                        <img src={post.image_path} alt={post.description} height="400px" width="400px" />
                      </span>
                    </div>


                  </Paper>
                  <br />
                </div>
              )
            })}





            <Paper>
              <div className="card">
                user posts here....
                    </div>
            </Paper>

            <p> pagination of user information also here..</p>
            <p> 1 , 2 , 3 , 4</p>


            <br />
            <br />


            <div> link to create new post page here... </div>

            <Link to="/location">Create New Post</Link>




            <br />
            <br />


          </div>
        </div>
      );
    }


    return (
      <div>

        <Nav />
        {content}
      </div>
    );
  }
}
// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(ProfilePage);
