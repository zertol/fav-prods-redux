import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const navigation = () => {
    return (
        <header className="main-header">
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" exact>All Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/favorites">Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default navigation;