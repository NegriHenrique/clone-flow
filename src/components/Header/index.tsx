import React from 'react';
import './style.css';
import { FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
    return (
        <header>
            <div className="logo"></div>
            <nav>
                <ul>
                    <li>home</li>
                    <li>loja</li>
                    <li>episódios</li>
                    <li>concursos</li>
                    <li>membros</li>
                </ul>
            </nav>
            <div className="links">
                <a href="#" className="btn btn-outline-warning">
                    flowicons
                </a>
                <FaUserCircle color="#FFF"/>
            </div>
        </header>
    );
}

export default Header;