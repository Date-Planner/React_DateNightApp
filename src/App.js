import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import GoOut from './components/GoOut';
import StayIn from './components/StayIn';
import Profile from './components/Profile';
import Team from './components/Team';
import Nav from './components/Nav';
import Weather from './components/Weather';
import Recipes from './components/Recipes';
import { Button } from 'react-bootstrap';

import LoginButton from './components/Login';
import LogoutButton from './components/Logout';
import { withAuth0 } from "@auth0/auth0-react";
import TempProfile from './components/TempProfile';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    // USE THIS COORDINATE SET UP AS NEEDED
    this.state = {
      location: {
        lat: 0,
        lon: 0,
      }
    }
  }


  handleGeolocationAPI = (position) => {
    this.setState({
      location: {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      }
    });

  };

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(this.handleGeolocationAPI);
    //this is cleared every time the page is reset. Need mechanism to cache location for a few minutes while
  }




  render() {
    console.log(this.state.location.lat);
    return (
      <>
        <Router>
          {
            this.props.auth0.isAuthenticated ?
              <>
                <TempProfile />
                <LogoutButton />
                <Button variant="primary" onClick={this.getLocation}>GetLocation</Button>
                {this.state.location.lat ?
                  <>
                    <p>Latitude: {this.state.location.lat}</p>
                    <p>Longitude: {this.state.location.lon}</p>
                  </>
                  : false
                }
                <Routes>
                  <Route
                    exact path='/'
                    element={<Home />}
                  >
                  </Route>
                  <Route
                    path='go-out'
                    element={<GoOut location={this.state.location} />}
                  >
                  </Route>
                  <Route
                    path='stay-in'
                    element={<StayIn location={this.state.location} />}
                  >
                  </Route>
                  <Route
                    path='recipes'
                    element={<Recipes />}
                  >
                  </Route>
                  <Route
                    path='profile'
                    element={<Profile />}
                  >
                  </Route>
                  <Route
                    path='team'
                    element={<Team />}
                  >
                  </Route>
                  <Route
                    path='weather'
                    element={<Weather location={this.state.location} />}
                  >
                  </Route>
                </Routes>
                <Nav />
              </>
              :
             <> <LoginButton />
              <Nav /></>
          }
        </Router>
      </>
    )
  }
}

export default withAuth0(App);