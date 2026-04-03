import React, { FC, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: FC = () => {
    const location = useLocation();
    const checkboxRef = useRef<HTMLInputElement>(null);

    const closeMenu = () => {
        if (checkboxRef.current) checkboxRef.current.checked = false;
    };

    return (
        <header className="header">
            <ul className="icon-menu d-none d-lg-block">
                <li className={`icon-box ${location.pathname === '/' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <Link to="/"><h2>Home</h2></Link>
                </li>
                <li className={`icon-box ${location.pathname === '/iniziative' ? 'active' : ''}`}>
                    <i className="fa fa-star"></i>
                    <Link to="/iniziative"><h2>Iniziative</h2></Link>
                </li>
            </ul>
            <nav role="navigation" className="d-block d-lg-none">
                <div id="menuToggle">
                    <input type="checkbox" ref={checkboxRef} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul className="list-unstyled" id="menu">
                        <li className={location.pathname === '/' ? 'active' : ''}>
                            <Link to="/" onClick={closeMenu}>
                                <i className="fa fa-home"></i><span>Home</span>
                            </Link>
                        </li>
                        <li className={location.pathname === '/iniziative' ? 'active' : ''}>
                            <Link to="/iniziative" onClick={closeMenu}>
                                <i className="fa fa-star"></i><span>Iniziative</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
