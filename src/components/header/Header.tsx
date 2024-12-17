import { Nav } from "../nav/Nav";

export const Header = () => {
  return (
    <header className="header section">
      <Nav />
      <div className="header__content container">
        <div className="header__logo">
          
        </div>
        <div className="header__text">
          <p className="header__greeting">¡Hola!👋</p>
          <h1 className="header__heading">Soy <span>Bruno Vidales</span></h1>
          <p className="header__description">Me especializo en desarrollo web enfocado al Front End.</p>
          <a className="header__link" href="#">Conctáctame</a>
        </div>
       </div>
      <div>
        <img src="/flecha.png" alt="Icono flecha" />
      </div>
    </header>
  );
};
