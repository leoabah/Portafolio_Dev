import {motion} from 'framer-motion';

function Contact() {
    return(
        <section  id="contact" className="contact">
            <div className="container">
                <motion.div
                className="contact__content"
                initial={{opacity:0, y:50}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:.7}}
                viewport={{once:true}}
                >
                    <p className="contact__subtitle">
                        Contacto
                    </p>
                    <h2>
                        ¿Trabajamos juntos?
                    </h2>
                    <p className="contact__description">
                        Actualmente busco mi primera oportunidad profesional como Frontend Developer Jr para seguir creciendo y aportar valor creando experiencias web modernas y funcionales.
                        Si tienes un proyecto en mente o simplemente quieres saludar, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y colaboraciones. 
                    </p>
                    <div className="contact__buttons">
                        <a href="mailto:leoabah@gmail.com?
                         sujbject=Contacto desde portafolio&body=Hola Leo,
                         me gustaría contactarte para..." 
                        className="primaryBtn">
                            Enviar correo
                        </a>
                        <a href="https://github.com/leoabah" 
                            className="secondaryBtn"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                            Ver GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/flabah/" 
                            className="secondaryBtn"
                            target="_blank"
                            rel="noopener noreferrer">
                            Ver LinkedIn
                        </a>
                    </div>

                </motion.div>
            </div>

        </section>
    );
}

export default Contact;