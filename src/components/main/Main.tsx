import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/autoplay';

import AOS from "aos";
import "aos/dist/aos.css";
import Networks from '../nav/Networks';
import { skills } from '../../data/db';
import { hobbies } from '../../data/db';

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
        <div data-aos="fade-right" data-aos-duration="1500" className="about-me__content">
            <h2 className="about-me__title"><span>S</span>obre mí</h2>
            <div className="about-me__texts">
              <p className="about-me__paragraph">Soy <span>Bruno Vidales</span>, un  desarrollador web apasionado por aprender nuevas tecnologías y   herramientas.</p>
              <p className="about-me__paragraph">Actualmente, estoy profundizando en   <span>React y TypeScript</span>, herramientas con las que busco   construir interfaces de usuario modernas y optimizadas.</p>
              <p className="about-me__paragraph">En este momento, <span>formo parte del  proyecto Oracle One en Alura Latam</span>, donde continúo mejorando  mis habilidades y creciendo como desarrollador.</p>
              <Networks />
            </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1500" className="about-me__dev">
          <img src="/svg/decoration/dev.svg" alt="Imagen desorrallador" />
        </div>
      </section>

      <section id="skills" data-aos="fade-right" data-aos-duration="1500" className="skills spacing">
        <h2><span>S</span>kills</h2>
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 3 }, // Pantallas pequeñas
            480: { slidesPerView: 6 }, // Teléfonos
          }}
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
           
      <section id="hobbies" data-aos="fade-right" data-aos-duration="1500" className="hobbies spacing">
          <h2><span>H</span>obbies</h2>
          <Swiper
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, 
              480: { slidesPerView: 2, spaceBetween: 20  }, 
            }}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {
              hobbies.map(hobbie => (
                <SwiperSlide key={hobbie.id} className="hobbies__card">
                  <img className="hobbies__img" src={hobbie.img} alt={`Imagen ${hobbie.name}`} />
                  <div className="hobbies__content">
                    <p className="hobbies__name">{hobbie.name}</p>
                    <p className="hobbies__description">{hobbie.description}</p>
                  </div>  
                </SwiperSlide>
              ))
            }
          </Swiper>
      </section>
    </main>
  );
};
