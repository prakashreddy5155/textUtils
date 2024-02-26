import '../styles/Navbar.css';
import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar() {
  return (
    
<div className="container">
    <nav>
        <ul>
          <li>
            <Link to="/">TextUtils</Link> 
          </li>

          <li>
            <Link to="/about" >About</Link>
          </li>

          <li>
            <Link to="/PropPropTypes"> PropPropTypes</Link>
          </li>

        </ul>
      </nav>

      </div>
  );
}
