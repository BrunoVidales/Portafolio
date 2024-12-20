import { useState, useEffect } from "react";
import Networks from "./Networks";


export const Nav = () => {

  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 992) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleClick = () => {
    setMenu(menu => !menu);
  };

  return (
    <nav  className="nav container">
      <a className="nav__bruno" href="#">
        <img src="/logo/nav_logo.png" alt="Bruno Vidales" />
      </a>
      {isMobile && (
        <button
          onClick={handleClick}
          className="nav__menu-open"
        >
          <img src="/svg/menu/menu.svg" alt="Menu" />
        </button>
      )}
      {menu && isMobile && (
        <div className="nav__flex">
          <button
            className="nav__menu-close"
            onClick={handleClick}
          >
            <img src="/svg/menu/cerrar.svg" alt="Menu" />
          </button>
          <div className="nav__sections">
            <a onClick={handleClick} href="#about-me">Sobre Mí</a>
            <a onClick={handleClick} href="#skills">Skills</a>
            <a onClick={handleClick} href="#hobbies">Hobbies</a>
            <a onClick={handleClick} href="#formacion">Formación</a>
            <a onClick={handleClick} href="#proyectos">Proyectos</a>
          </div>
          <Networks />
        </div>
      )}

      {!isMobile && (
        <div className="nav__flex">
          <div className="nav__sections">
            <a href="#about-me">Sobre Mí</a>
            <a href="#skills">Skills</a>
            <a href="#hobbies">Hobbies</a>
            <a href="#formacion">Formación</a>
            <a href="#proyectos">Proyectos</a>
          </div>
          <Networks />
        </div>
      )}
    </nav>
  );
};
