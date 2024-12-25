import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {

  useEffect(() => {
    // Inicializamos el AOS al cargar el componente.
    AOS.init({
      duration: 1000, // Duración de la animación
      once: false, // Animación solo la primera vez.
    });
  }, []);

  return (
    <footer id="contacto"  className="footer spacing container">
        <h2><span>C</span>ontacto</h2>
        <div className="">
            <p>¿Quieres contactarme?</p>
            <div className="footer__contacting"></div>
            <div className="footer__contact">
              <a href="mailto:brunovidales203@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="/svg/networks/gmail.svg" alt="Icono gmail" />
                brunovidales203@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/bruno-vidales-82534a174/" target="_blank" rel="noopener noreferrer">
                <img src="/svg/networks/linkedin.svg" alt="Icono linkedin" />
                Bruno Vidales
              </a>
            </div>
            <p className="footer__copyright">© 2024 Desarrollado con <span>❤</span> por Bruno Vidales </p>
        </div>
    </footer>
  ) 
};
