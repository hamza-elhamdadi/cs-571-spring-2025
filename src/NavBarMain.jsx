import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './NavBarMain.css'


// const NavBarMain = () => {
//     return <>
//       <p className='page-name'>CS 571 - Data Visualization and Exploration</p>
//       <p className='page-name page-subname'>Spring 2025 - UMass Amherst </p>
//       <nav className="mx-auto navbar navbar-expand navbar-light sticky-top">
//         <div className="ms-auto navbar-nav">
//           <NavLink className='nav-link page-name active' to='/'>Home</NavLink>
//           <NavLink className='nav-link page-name' to="/syllabus">Syllabus</NavLink>
//           <NavLink className='nav-link page-name' to="/schedule">Schedule</NavLink>
//           <NavLink className='nav-link page-name' to="/project">Project</NavLink>
//         </div>
//       </nav>
//     </>
//   };



const NavBarMain = () => {
  const [isVisible, setVisibility] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  function toggleVisibility(){ setVisibility(!isVisible) };
  function handleWindowSizeChange(){ setWidth(window.innerWidth) };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  })
  
  const isMobile = width <= 768;

  if (isMobile){
    return <div class="topnav">
              <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
              <p className="nav-link page-name out-menu active" to="/">CS 571 - Data Visualization and Exploration</p>
              <p className="page-name page-subname">Spring 2025 - UMass Amherst</p>
              <div style={{display: isVisible ? 'block' : 'none'}} id="links">
                <NavLink className="nav-link page-name in-menu" to="/">Home</NavLink>
                <NavLink className="nav-link page-name in-menu" to="/syllabus">Syllabus</NavLink>
                <NavLink className="nav-link page-name in-menu" to="/schedule">Schedule</NavLink>
                <NavLink className="nav-link page-name in-menu" to="/project">Project</NavLink>
              </div>
              <a href="javascript:void(0)" class="page-name icon" onClick={toggleVisibility} >
                <i className="fa fa-bars"></i>
              </a>
            </div>
  } else {
    return <div>
              <>
                <p className='page-name'>CS 571 - Data Visualization and Exploration</p>
                <p className='page-name page-subname'>Spring 2025 - UMass Amherst </p>
                <nav className="mx-auto navbar navbar-expand navbar-light sticky-top">
                  <div className="ms-auto navbar-nav">
                    <NavLink className='nav-link page-name active' to='/'>Home</NavLink>
                    <NavLink className='nav-link page-name' to="/syllabus">Syllabus</NavLink>
                    <NavLink className='nav-link page-name' to="/schedule">Schedule</NavLink>
                    <NavLink className='nav-link page-name' to="/project">Project</NavLink>
                  </div>
                </nav>
              </>
            </div>
  }

  
}

export default NavBarMain;
