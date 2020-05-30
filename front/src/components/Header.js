import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="nav">
          <NavLink to="/" exact activeClassName="is-active" className="button button--nav">Home</NavLink>
          <NavLink to="/list" exact activeClassName="is-active" className="button button--nav">List</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;