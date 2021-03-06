import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './header.scss';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo ukad"/>
            </div>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/product'>Product</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
