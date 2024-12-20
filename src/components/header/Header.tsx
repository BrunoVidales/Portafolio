import { useEffect } from "react";
import { Nav } from "../nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {

  useEffect(() => {
    // Inicializamos el AOS al cargar el componente.
    AOS.init({
      duration: 1000, // Duración de la animación
      once: false, // Animación solo la primera vez.
    });
  }, []);

  return (
    <header className="header spacing">
      <Nav />
      <div className="header__content container">
        <div  className="header__logo"></div>
        <div data-aos="flip-right" data-aos-duration="2500" className="header__texts">
          <p className="header__greeting">¡Hola!👋</p>
          <h1 className="header__heading">Soy <span>Bruno Vidales</span></h1>
          <p className="header__description">Me especializo en desarrollo web enfocado al Front End.</p>
          <a className="header__button" href="#">Conctáctame</a>
        </div>
       </div>
    </header>
  );
};
