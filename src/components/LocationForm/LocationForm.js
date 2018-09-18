import React, { Component } from 'react';

import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
// import ReactFilestack from 'filestack-react';

const mapStateToProps = state => ({

});


class LocationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            longitude: '',
            latitude: '',
            description: '',
            address: '',
            date: '',

        };
    }

    // getImageURL = (result) => {
    //     console.log('filestack submitted', result.filesUploaded);
    //     alert('Image added!');
    //     this.setState({
    //         ...this.state,
    //         image_path: result.filesUploaded[0].url
    //     })
    //     console.log(this.state.image_url);
    // }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value,
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_ITEM', payload: this.state });
    };

    handleCancel = () => {
        this.props.history.push('profile');
    }


    render() {
        return (
            <div>
                <Nav />
                <h1> Create a Location Post</h1>

                <form className="locform" onSubmit={this.handleSubmit}>
                    <div>
                        <InputLabel>Title of location: </InputLabel>
                        <br />
                        <Input value={this.state.title} type="text" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Longitude: </InputLabel>
                        <br />
                        <Input value={this.state.longitude} type="text" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Latitude: </InputLabel>
                        <br />
                        <Input value={this.state.latitude} type="text" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Description: </InputLabel>
                        <br />
                        <Input value={this.state.description} type="text" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Location Address: </InputLabel>
                        <br />
                        <Input type="text" value={this.state.address} onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Date: </InputLabel>
                        <br />
                        <Input type="date" value={this.state.date} onChange={this.handleChange} />
                    </div>
                    <br />

                    <span>
                        <Button type="submit"
                            color="primary"
                            variant="contained"
                        >Submit
                    </Button>
                    </span>
                    <span>
                        <Button color="secondary"
                            variant="contained"
                            onClick={this.handleCancel}>
                            Cancel</Button>
                    </span>




                </form>


            </div>

        )
    }


}

export default connect(mapStateToProps)(LocationForm)