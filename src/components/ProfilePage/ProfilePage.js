import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Link from '@material-ui/core/Link';




const mapStateToProps = state => ({
  user: state.user,
  location: state.location
});

class ProfilePage extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    // this.getLocation();
    this.getById();
    this.props.dispatch({ type: 'BY_ID' })
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
    this.props.dispatch({ type: 'BY_ID' })
  }

  deletePost = (postId) => {
    console.log('Delete post:', postId);
    const action = {type:'DELETE_GARDEN',payload:postId};
    console.log('action' , action);
    this.props.dispatch(action);
};

  handleClick = (event) => {
    console.log('Post', event.target.value);
    this.props.dispatch({ type: 'DELETE_POST', payload: this.location });
    
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
                  <Grid container spacing={8}>
                    <Grid item xs={4}>
                      <div className="outercard">
                        <div className="card">
                          <span>
                            <p>Name of location:{post.title}</p>
                            <p>Description:{post.description}</p>
                            <p>Bortle Scale Value:{post.bortle_value}</p>

                            {/* <Link to={`/details/${post.id}`}>POSTPOSTPOST</Link> */}


                            <img src={post.image_path} 
                            alt={post.description} height="200px"
                             width="200px"
                              onClick={ () => this.props.history.push(`/details/${post.id}`)}/>
                           
                            <br/>
                            
                            
                          </span>
                            <Button onClick={this.handleClick}>
                            Remove Post 
                            </Button>
                        </div>
                      </div>

                    </Grid>
                  </Grid>
                  <br />

                  <br />
                </div>
              )
            })}
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
