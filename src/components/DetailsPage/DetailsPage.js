import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    user: state.user,
    details: state.details.details

});

class DetailsPage extends Component {

    componentDidMount() {
        let post = this.props.match.params.id
        this.getByPost();
        this.props.dispatch({ type: 'BY_POST', payload: post })
        console.log(this.props.match.params.id);
    }


    getLocation = () => {
        this.props.dispatch({ type: 'FETCH_LOCATION' })
    }


    getById = () => {
        console.log('in getById, user id:')
        this.props.dispatch({ type: 'BY_ID' })
    }



    getByPost = () => {
        console.log('in getById, user id:')
        this.props.dispatch({ type: 'BY_POST', payload: this.props.match.params.id })
    }


    render() {
        return (<div>  <Nav />

            <p>This is the Details page </p>

            {this.props.details.map((post) => {
                return (
                    <div className="card-container">
                        <div key={post.id}>

                            <div className="outercard-details">
                                <div className="card-details">
                                    
                                    <img src={post.image_path}
                                        alt={post.description}
                                        className="image-details" />
                                </div>
                                <div className="deta">
                                <p> Post ID# :{post.id}</p>
                                        <h1>Title:{post.title}</h1>
                                        <h1>Description:{post.description}</h1> 
                                        <h1>Address:{post.address}</h1> 
                                        <h1>Bortle Value:{post.bortle_value}</h1> 
                                        <h1>NELM index:{post.nelm}</h1> 
                                        <h1>Longitude:{post.longitude}</h1> 
                                        <h1>Latitude:{post.latitude}</h1> 


</div>
                                    
                            </div>
                        </div>
                    </div>
                )
            })}







        </div>
        )
    }
}

export default connect(mapStateToProps)(DetailsPage);