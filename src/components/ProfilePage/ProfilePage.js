import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import ReactFilestack from 'filestack-react';
// import Link from '@material-ui/core/Link';
// MATERIAL STUFF
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';


function Transition(props) {
    return <Slide direction="up" {...props} />;
}

const mapStateToProps = state => ({
    user: state.user,
    location: state.location.location
});

//USED FOR FILESTACK -- 
const options = {
    accept: 'image/*',
    maxFiles: 1,
    storeTo: {
        location: 's3',
    },
};


class ProfilePage extends Component {
    constructor(props) {
        super(props);
        // currentPost: '',
          this.state = {
            
            open: false,
            currentPost: {},
            title: '',
            longitude: '',
            latitude: '',
            description: '',
            bortle_value: '',
            NELM: '',
            constellations_visible: '',
            name_constellation: '',
            address: '',
            userinput_date: '',
            image_path: '',
        };
    }
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
    getImage = (result) => {
        console.log('filestack submitted', result.filesUploaded);
        alert('Image added!');
        this.setState({
            ...this.state,
            image_path: result.filesUploaded[0].url
        })
        console.log(this.state.image_url);
    }



    handleOpen = (post) => {
        this.setState({ open: !this.state.open, currentPost: post })
          
    }
    handleClose = () => {
        this.setState({ open: false })
    }


    // deletePost = (postId) => {
    //     console.log('Delete post:', postId);
    //     const action = { type: 'DELETE_POST', payload: postId };
    //     console.log('action', action);
    //     this.props.dispatch(action);
    // };


    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }
    handleRadioChange = (event) => {
        console.log(event.target.value)
        this.setState({
            ...this.state,
            constellations_visible: event.target.value
        })
    }


    handleDelete = (id) => {
        console.log('Post', id);
        this.props.dispatch({ type: 'DELETE_POST',
         payload: id });

    }

    handleUpdate = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({ type: 'UPDATE_POST',
        payload: this.state })
        
        
      }

    render() {
        let content = null;

        if (this.props.user.userName) {
            content = (
                <div>
                    <h1> Profile Page </h1>
                    <div className="card-container-pp">
                       {this.props.location.map((post) => {

                          <div className="white"> 
                          {JSON.stringify(this.props.location)}
                          </div>

                          return (
                            

                                <div key={post.id}>
                                    <Grid container spacing={8}>
                                        <Grid item xs={4}>
                                            <div className="outercard-profile">
                                                <div className="card">
                                                    <span>
                                                        <p>Name of location:{post.title}</p>
                                                        <p>Description:{post.description}</p>
                                                        <p>Bortle Scale Value:{post.bortle_value}</p>

                                                        {/* <Link to={`/details/${post.id}`}>POSTPOSTPOST</Link> */}
                                                        <img src={post.image_path}
                                                            alt={post.description} height="200px"
                                                            width="200px"
                                                            onClick={() => this.props.history.push(`/details/${post.id}`)} />
                                                        <br />
                                                    </span>



                                                    <Modal
                                                        aria-labelledby="simple-modal-title"
                                                        aria-describedby="simple-modal-description"
                                                        open={this.state.open}
                                                        onClose={this.handleClose}
                                                    >
                                                        <div className="modal-dialog">
                                                            <Dialog
                                                                open={this.state.open}
                                                                TransitionComponent={Transition}
                                                                keepMounted
                                                                onClose={this.handleClose}
                                                                aria-labelledby="alert-dialog-slide-title"
                                                                aria-describedby="alert-dialog-slide-description"
                                                            >
                                                                <form className="dialog-form"onSubmit={this.handleUpdate}>
                                                                    <div>
                                                                        <InputLabel>Title of location: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.title} type="text" onChange={this.handleChange} name="title" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Longitude: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.longitude} type="text" onChange={this.handleChange} name="longitude" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Latitude: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.latitude} type="text" onChange={this.handleChange} name="latitude" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Description: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.description} type="text" onChange={this.handleChange} name="description" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Bortle Value: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.bortle_value} type="text" onChange={this.handleChange} name="bortle_value" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>NELM: </InputLabel>
                                                                        <br />
                                                                        <Input value={this.state.NELM} type="text" onChange={this.handleChange} name="NELM" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Are constellation visible ? </InputLabel>
                                                                        <br />
                                                                        <br />
                                                                        <input value="true" type="radio" onChange={this.handleRadioChange} name="constellations_visible" />
                                                                        <InputLabel>Yes</InputLabel>

                                                                        <br />

                                                                        <input value="false" type="radio" onChange={this.handleRadioChange} name="constellations_visible" />

                                                                        <InputLabel>No</InputLabel>
                                                                    </div>
                                                                    <div>
                                                                        <br />
                                                                        <InputLabel> List all visible constellations:</InputLabel>
                                                                        <br />
                                                                        <Input type="text" value={this.state.name_constellation} onChange={this.handleChange} name="name_constellation" />
                                                                    </div>
                                                                    <div>
                                                                        <br />
                                                                        <InputLabel>Location Address: </InputLabel>
                                                                        <br />
                                                                        <Input type="text" value={this.state.address} onChange={this.handleChange} name="address" />
                                                                    </div>
                                                                    <br />
                                                                    <div>
                                                                        <InputLabel>Date: </InputLabel>
                                                                        <br />
                                                                        <Input type="date" value={this.state.userinput_date} onChange={this.handleChange} name="userinput_date" />
                                                                    </div>
                                                                    <br />
                                                                    <ReactFilestack
                                                                        apikey='A7pk8oI7SPkvSAPpV69qAz'
                                                                        buttonText="Upload an Image"
                                                                        options={options}
                                                                        onSuccess={this.getImage}
                                                                    />
                                                                    <br />
                                                                    <br />
                                                                    <span>

                                                                        <Button type="submit"
                                                                            color="primary"
                                                                            variant="contained"
                                                                        >Submit
                                                                  </Button>

                                                                        <Link to="/profile">Cancel</Link>
                                                                    </span>

                                                                </form>
                                                            </Dialog>
                                                        </div>
                                                    </Modal>


                                                    <Button
                                                        color="primary"
                                                        variant="contained"
                                                        onClick={() => this.handleOpen(post)}>
                                                        EDIT
                                                     </Button>

                                                    {/* onClick={() => this.handleUpdate(post)} */}
                                                   
                                                    <Button
                                                        color="secondary"
                                                        variant="contained"
                                                        onClick={() => this.handleDelete(post.id)}>
                                                        Remove
                                                    </Button>

                                                </div>
                                                <h1 className="profile-text-card" color='red'> Click on image to see details! </h1>
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
