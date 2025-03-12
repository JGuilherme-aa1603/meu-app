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
      <button id="login__button"></button> 
    </header>
  )
}

export default Header;