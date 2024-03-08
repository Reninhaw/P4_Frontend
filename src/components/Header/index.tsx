import React from 'react';
import './style.css';

const Header: React.FC = () => {
    return(
        <header className="header">
            <h1>Hello World!</h1>
            <nav>
                <ul>
                    <li><a href="#">RM554145</a></li>
                    <li><a href="#">Nicolas Paiffer do Carmo</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;