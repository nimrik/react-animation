import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Header extends Component {


    render() {
        return (
            <nav className="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">List</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Header;