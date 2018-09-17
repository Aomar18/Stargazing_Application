import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../components/Nav/Nav';


const mapStateToProps = state => ({

  });


class LocationForm extends Component {
constructor(props){
super(props)



}

handleChange = (event) => {
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value,
    });
}
handleSubmit = (event) => {
    event.preventDefault();
        this.props.dispatch({type: 'ADD_ITEM', payload: this.state});
};




render(){
return(
<div>
<Nav />

    <form>
         <div>
            <label htmlFor="username">
              
            </label>
          </div>

    </form>

</div>

)
}


}

export default connect(mapStateToProps)(LocationForm)