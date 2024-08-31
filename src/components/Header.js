import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul className="left">
    
      </ul>
      <ul className="right">
        <li>
          <Link to="/">Create Employee</Link>
        </li>
        <li>
          <Link to="/employee-list">Employee List</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
