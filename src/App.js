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


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              path='home'
              element={<Home />}
            >
            </Route>
            <Route
              path='go-out'
              element={<GoOut />}
            >
            </Route>
            <Route
              path='stay-in'
              element={<StayIn />}
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
              element={<Weather />}
            >
            </Route>
          </Routes>
          <Nav />
        </Router>
      </>
    )
  }
}

export default App;