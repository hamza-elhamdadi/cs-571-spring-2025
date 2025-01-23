import { NavLink } from 'react-router-dom';

const NavBarMain = () => {
    return <>
      <p className='page-name'>CS 571 - Data Visualization and Exploration</p>
      <p className='page-name page-subname'>Spring 2025 - UMass Amherst </p>
      <nav className="mx-auto navbar navbar-expand navbar-light sticky-top">
        <div className="ms-auto navbar-nav">
          <NavLink className='nav-link page-name active' to='/'>Home</NavLink>
          <NavLink className='nav-link page-name' to="/syllabus">Syllabus</NavLink>
          <NavLink className='nav-link page-name' to="/schedule">Schedule</NavLink>
        </div>
      </nav>
    </>
  };

export default NavBarMain;
