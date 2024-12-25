import { useState, useEffect } from "react";

export const ButtonScroll = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY; // Obtengo la posición del scroll vertical
            const headerHeight = window.innerHeight; // 100vh
            setIsVisible(scrollTop > headerHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    },[]);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Animación suave
        });
      };

    return (
        <>
            {isVisible && (
            <button
                onClick={scrollToTop}
                style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                padding: '10px',
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semitransparente
                color: '#fff', // Texto blanco
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Sombra para darle profundidad
                transition: 'transform 0.3s ease-in-out', // Animación al hover
                zIndex: 1000,
            }}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.2)') // Escala al pasar el mouse
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)') // Vuelve al tamaño normal
            }
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
                />
            </svg>
            </button>
            )}
        </>
    );
};
