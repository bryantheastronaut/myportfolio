import React from 'react';
import {Link} from 'react-router';
import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import {HorizontalLines} from './HorizontalLines';

let linkStyle = {
  color: '#e08453',
  position: 'relative',
  zIndex: '8888',
  textDecoration: 'none'
};

let navbar = (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Bryan Gilbraith</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1}><Link to='/design' style={linkStyle}>Design</Link></NavItem>
        <NavItem eventKey={2}><Link to='/dev' style={linkStyle}>Development</Link></NavItem>
        <NavItem eventKey={3}><Link to='/writing' style={linkStyle}>Writing</Link></NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export const Header = (props) => {
  return (
    <div>
      {navbar}
      <HorizontalLines />
      {props.children}
    </div>
  );
};
