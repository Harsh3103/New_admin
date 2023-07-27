import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import Reports from './Reports';

const Sidebar = () => {
  useEffect(() => {
    // Initialize Bootstrap's dropdown functionality
    const dropdownToggleElements = document.querySelectorAll('.dropdown-toggle');
    dropdownToggleElements.forEach((element) => {
      element.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement.classList.contains('show')) {
          targetElement.classList.remove('show');
        } else {
          targetElement.classList.add('show');
        }
      });
    });
  }, []);

  return (
    <div>
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBih65t2n8CtRUgwYOxSUy_i7mXikr0zAGcVqlElI&s" className="img-fluid" alt="Logo" />
            <span>Hoping Minds</span>
          </h3>
        </div>
        <ul className="list-unstyled components">

        {/* <li className="">
            <Link to="/" className="login">
              <i className="material-icons">Login</i>
              <span>Login</span>
            </Link>
          </li> */}

          <li className="">
            <Link to="/" className="dashboard">
              <i className="material-icons">dashboard</i>
              <span>Dashboard</span>
            </Link>
          </li>

          <div className="small-screen navbar-display">
            {/* Other menu items */}
          </div>

        
          <li className="">
            <Link to="/Cource">
              <i className="material-icons">library_books</i>
              <span>Courses</span>
            </Link>
          </li>
          <li className="">
            <Link to="/Reports">
              <i className="material-icons">library_books</i>
              <span>Reports</span>
            </Link>
          </li>
          <li className="">
            <Link to="./Profile">
              <i className="material-icons">library_books</i>
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
