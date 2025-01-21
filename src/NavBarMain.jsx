import { NavLink } from 'react-router-dom';

import Nav from 'react-bootstrap/esm/Nav';
import NavBar from 'react-bootstrap/esm/NavBar';

const NavBarMain = () => {
    return <>
      <p className='page-name'>CS 571 - Data Visualization and Exploration</p>
      <p className='page-name page-subname'>Spring 2025 - UMass Amherst </p>
      <NavBar className='mx-auto' variant='light' sticky='top'>
        <Nav className='ms-auto'>
          <NavLink className='nav-link page-name active' to='/'>Home</NavLink>
          <NavLink className='nav-link page-name' to="/syllabus">Syllabus</NavLink>
          <NavLink className='nav-link page-name' to="/schedule">Schedule</NavLink>
        </Nav>
        <Nav className='mr-auto'>
          
          
        </Nav>
      </NavBar>
    </>
  };

export default NavBarMain;
