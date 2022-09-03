import React from 'react';
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li><Link to="/">Home</Link></li>
            <li><HashLink smooth to='/#about' >About</HashLink></li>
            <li><HashLink smooth to="/#services">Services</HashLink></li>
            <li><Link to="/portfolio">Our Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>

        </ul>
    )
}
export default Nav;
