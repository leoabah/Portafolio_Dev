import { motion } from 'framer-motion'
import React from 'react'
import { FaCode } from 'react-icons/fa'

const imgSrc = <FaCode style={{ color: "#7c3aed", width: 200, height: 200 }} />

function Hero() {
    
  return (
    <section  id="home" className="hero">

       <div className='container hero__content'>

        <motion.div
        initial={{ opacity:0, y:50 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration:1 }}
        className="hero__text"
        >
            <p className='hero__intro'> Hola ,soy </p>
           
            <h1>
                <span className="white">Frontend</span>
                   
                <span className="blue">
                    Developer Jr
                </span>

            </h1>
             
            <p className='description'>
                Soy un desarrollador frontend junior apasionado por crear experiencias web atractivas y funcionales. Con habilidades en HTML, CSS, JavaScript y React, me esfuerzo por construir interfaces de usuario modernas y responsivas.
                Actualmente me encuentro cursando formación Full Stack para continuar ampliando mis conocimientos en desarrollo web y arquitectura de aplicaciones.
                <br />
                 Mi objetivo es seguir aprendiendo y creciendo en el campo del desarrollo web, contribuyendo con proyectos innovadores y colaborando con equipos creativos.
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
                    {imgSrc}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero