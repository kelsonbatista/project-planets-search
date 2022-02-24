import React from 'react';
import logo from '../../assets/images/starwars1.png';
import './style.css';

function Header() {
  return (
    <header>
      <img
        alt="Intro"
        className="header__logo"
        src={ logo }
      />
    </header>
  );
}

export default Header;
