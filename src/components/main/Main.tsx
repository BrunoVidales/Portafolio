import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Networks from '../nav/Networks';

export const Main = () => {

    useEffect(() => {
      // Inicializamos el AOS al cargar el componente.
      AOS.init({
        duration: 1000, // Duración de la animación
        once: false, // Animación solo la primera vez.
      });
    }, []);

  return (
    <main className="main section container">
      <section id="about-me" className="about-me">
        <div data-aos="fade-right" className="about-me__content">
            <h2 className="about-me__title"><span>S</span>obre mí</h2>
            <div className="about-me__texts">
              <p className="about-me__paragraph">Soy <span>Bruno Vidales</span>, un  desarrollador web apasionado por aprender nuevas tecnologías y   herramientas.</p>
              <p className="about-me__paragraph">Actualmente, estoy profundizando en   <span>React y TypeScript</span>, herramientas con las que busco   construir interfaces de usuario modernas y optimizadas.</p>
              <p className="about-me__paragraph">En este momento, <span>formo parte del  proyecto Oracle One en Alura Latam</span>, donde continúo mejorando  mis habilidades y creciendo como desarrollador.</p>
              <Networks />
            </div>
        </div>
        <div data-aos="fade-left" className="about-me__dev">
          <img src="/svg/decoration/dev.svg" alt="Imagen desorrallador" />
        </div>
      </section>
    </main>
  );
};
