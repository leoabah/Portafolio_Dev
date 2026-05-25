import { motion } from 'framer-motion'
import React from 'react'

function Hero() {
  return (
    <section className="hero">

       <div className='container hero__content'>

        <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:1 }}
        className="hero__text"
        >
            <p className='hero__intro'>Hola ,soy </p>
           
            <h1>
                <span className="white">Frontend</span>
                   
                <span className="blue">
                    Developer Jr
                    </span>
            </h1>
             
            <p className='description'>
                Frontend Developer Jr. apasionado por la experiencia de usuario y el diseño responsivo . Cuento con un sólido portafolio de proyectos académicos y personales construidos con HTML5, CSS3, Sass y React. Experto en maquetación adaptable mediante Flexbox y CSS Grid , e integración eficiente de APIs . En constante formación en tecnologías backend para convertirme en Full Stack Developer.
            </p>
            <div className='tags'>
                <span>Moderno</span>
                <span>Responsive</span>
                <span>Funcional</span>
                <span>UI/UX</span>
            </div>

        </motion.div>

            <div className='hero__card'>
                <div className="icon">
                    <img src="@/assets/icons/heroIcon.png" alt="icono de codigo dev" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero