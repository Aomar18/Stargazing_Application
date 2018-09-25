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

                            <div className="outercard">
                                <div className="card">
                                    <h4>
                                        Location:
                                        <span className="gold">{post.title}</span>
                                    </h4>
                                    <img src={post.image_path}
                                        alt={post.description}
                                        height="300px" width="300px" />
                                </div>

                                <br />
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