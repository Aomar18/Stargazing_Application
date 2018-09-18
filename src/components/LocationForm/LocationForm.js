import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

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




    render() {
        return (
            <div>
                <Nav />
                <h1> Create a Location Post</h1>

                <form className="locform" onSubmit={this.handleSubmit}>
                    <div>
                        <InputLabel>Title of location: </InputLabel>
                        <br/>
                        <Input value={this.state.title} type="text" onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Longitude: </InputLabel>
                        <br/>
                        <Input value={this.state.longitude} type="text" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <InputLabel>Latitude: </InputLabel>
                        <br/>
                        <Input value={this.state.latitude} type="text" onChange={this.handleChange}/>
                    </div>
                    <br />
                    <div>
                        <InputLabel>Description: </InputLabel>
                        <br/>
                        <Input value={this.state.description} type="text"onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Location Address: </InputLabel>
                       <br/>
                        <Input type="text" value={this.state.address}  onChange={this.handleChange} />
                    </div>
                    <br />
                    <div>
                        <InputLabel>Date: </InputLabel>
                        <br />
                        <Input type="date" value={this.state.date} onChange={this.handleChange} />
                    </div>
                    <br />
                    <Button type="submit"
                        color="tertiary"
                        variant="contained"
                    >Submit
                    </Button>

                    <Link to="/profile">Cancel</Link>


                </form>

            </div>

        )
    }


}

export default connect(mapStateToProps)(LocationForm)