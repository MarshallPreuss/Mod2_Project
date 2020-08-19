import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
    <nav>
      <ul>
      <li>
      <Link to={"/"} className="homeBut">
      Home
    </Link>
      </li>
      <li>
      <Link to={"/events"} className="homeBut">
      Events
    </Link>
      </li>
      <li>
      <Link to={"/categories"} className="homeBut">
      Categories
    </Link>
      </li>
      
      </ul>
    </nav>
    );
}

export default Nav;