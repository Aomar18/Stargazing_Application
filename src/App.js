import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Particles from 'react-particles-js';
import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LocationForm from './components/LocationForm/LocationForm';
// import AdminPage from './components/AdminPage/AdminPage';
import DetailsPage from './components/DetailsPage/DetailsPage';
import ScrollDialog from './components/ScrollDialog/ScrollDialog.js';
import './styles/main.css';

const particleOpt = {
  "particles": {
    "number": {
      "value": 10,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "star",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 7,
      "direction": "bottom-left",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
    
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
     
    }
  },

}

const App = () => (
  <div>
    
    <Header title="Project Base" />

    <Particles params={particleOpt}/>
   
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route
          path="/home"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        
        <Route
          path="/user"
          component={HomePage}
        />
        <Route
          path="/profile"
          component={ProfilePage}
        />
        <Route
          path="/location"
          component={LocationForm}
        />
        <Route
          path="/details/:id"
          component={DetailsPage}
        /> 

        <Route 
        path="/dialog"
        component={ScrollDialog}
        />


        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404: PAGE NOT FOUND</h1>} />

      </Switch>
    </Router>

    
  </div>

  
);



export default App;
