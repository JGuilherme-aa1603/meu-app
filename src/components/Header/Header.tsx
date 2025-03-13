import React from 'react';
import LoginButton from './LoginButton/LoginButton.tsx';
import './Header.css';

function Header () {

  return (
    <header className="header__container">
      <div className="userImage__container"></div>
      <input 
        id="search"
        type="text" 
        placeholder="Buscar..." 
      />
      <LoginButton />
    </header>
  )
}

export default Header;