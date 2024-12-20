import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from "aos";
import "aos/dist/aos.css";
import Networks from '../nav/Networks';
import { skills } from '../../data/db';

export const Main = () => {

    useEffect(() => {
      // Inicializamos el AOS al cargar el componente.
      AOS.init({
        duration: 1000, // Duración de la animación
        once: false, // Animación solo la primera vez.
      });
    }, []);

  return (
    <main className="main spacing container">
      <section id="about-me" className="about-me spacing">
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

      <section id="skills" data-aos="fade-right" className="skills spacing">
        <h2><span>S</span>kills</h2>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={6}
          loop={true}
          autoplay={{
            delay: 2000, // Cambia este valor según tu preferencia
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {
            skills.map(skill => (
              <SwiperSlide key={skill.id}  className="skills__skill">
                <div className="skills__img">
                  <img src={skill.img} alt={`Imagen ${skill.name}`} />
                </div>
                <p className="skills__name">{skill.name}</p>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </section>
    </main>
  );
};
