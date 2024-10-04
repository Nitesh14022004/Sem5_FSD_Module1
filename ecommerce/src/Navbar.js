import React from 'react';

export const Navbar = () => {
    return (
        <div>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    )
}