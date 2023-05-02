import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Date Night</Navbar.Brand>
        <NavItem><Link to="home" style={{color: 'black'}} className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="weather" style={{color: 'black'}} className="nav-link">Weather</Link></NavItem>
        <NavItem><Link to="go-out" style={{color: 'black'}} className="nav-link">Going Out</Link></NavItem>
        <NavItem><Link to="stay-in" style={{color: 'black'}} className="nav-link">Staying In</Link></NavItem>
        <NavItem><Link to="recipes" style={{color: 'black'}} className="nav-link">Recipes</Link></NavItem>
        <NavItem><Link to="profile" style={{color: 'black'}} className="nav-link">Profile</Link></NavItem>
        <NavItem><Link to="team" style={{color: 'black'}} className="nav-link">Team</Link></NavItem>
      </Navbar>
    )
  }
}
export default Nav;