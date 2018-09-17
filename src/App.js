import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import HomePage from './components/HomePage/HomePage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import LocationForm from './components/LocationForm/LocationForm';
import AdminPage from './components/AdminPage/AdminPage';
import './styles/main.css';

const App = () => (
  <div>
    <Header title="Project Base" />
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
          path="/admin"
          component={AdminPage}
        /> 


        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404: PAGE NOT FOUND</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
