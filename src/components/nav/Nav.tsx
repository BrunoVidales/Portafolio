import { useState, useEffect } from "react";

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
    <nav className="nav section container">
      <div>
        <img src="/logo/nav_logo.png" alt="Bruno Vidales" />
      </div>
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
            <a onClick={handleClick} href="#">Sobre Mí</a>
            <a onClick={handleClick} href="#">Skills</a>
            <a onClick={handleClick} href="#">Hobbies</a>
            <a onClick={handleClick} href="#">Formación</a>
            <a onClick={handleClick} href="#">Proyectos</a>
          </div>
          <div className="nav__networks">
            <a href="https://github.com/BrunoVidales" target="_blank">
              <img src="/svg/networks/github.svg" alt="icono github" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bruno-vidales-82534a174/" target="_blank">
            <img src="/svg/networks/linkedin.svg" alt="icono linkedin" />
              Linkedin
            </a>
            <a href="/cv/curriculum_bruno_vidales.pdf" download="Curriculum_Bruno_Vidales">
            <img src="/svg/networks/cv.svg" alt="icono cv" />
              CV
            </a>
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="nav__flex">
          <div className="nav__sections">
            <a href="#">Sobre Mí</a>
            <a href="#">Skills</a>
            <a href="#">Hobbies</a>
            <a href="#">Formación</a>
            <a href="#">Proyectos</a>
          </div>
          <div className="nav__networks">
            <a href="https://github.com/BrunoVidales" target="_blank">
              <img src="/svg/networks/github.svg" alt="icono github" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/bruno-vidales-82534a174/" target="_blank">
              <img src="/svg/networks/linkedin.svg" alt="icono linkedin" />
              Linkedin
            </a>
            <a href="/cv/curriculum_bruno_vidales.pdf" download="Curriculum_Bruno_Vidales">
              <img src="/svg/networks/cv.svg" alt="icono cv" />
              CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
