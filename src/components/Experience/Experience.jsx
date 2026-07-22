import { motion } from 'framer-motion';

const  steps =[
    {
        number:"01",
        title:"Diseño UX/UI Moderno",
        text:"Creación de interfaces atractivas y funcionales, centradas en la experiencia del usuario."
    },
    {
        number:"02",
        title:"Desarrollo Frontend",
        text:"Implementación de sitios web responsivos y dinámicos utilizando HTML, CSS, Sass y React."  
    },
    {
        number:"03",
        title:"Integración de APIs",
        text:"Conexión eficiente con servicios externos para enriquecer la funcionalidad de las aplicaciones."
    },
    {
        number:"04",
        title:"Testing y Depuración",
        text:"Aseguramiento de la calidad del software mediante pruebas exhaustivas y resolución de problemas."
    },
    {
        number:"05",
        title:"Optimización de Rendimiento",
        text:"Mejora de la velocidad y eficiencia de las aplicaciones para una experiencia de usuario fluida."
    },
    {
        number:"06",
        title:"Mantenimiento y Soporte",
        text:"Brindar atención continua y soluciones efectivas para garantizar el funcionamiento óptimo de las aplicaciones."
    },
    {
        number:"07",
        title:"Desarrollo Backend",
        text:"Creación y mantenimiento de servidores y bases de datos para soportar las aplicaciones frontend."
    },
    {
        number:"08",
        title:"Seguridad y Autenticación",
        text:"Implementación de medidas de seguridad para proteger los datos y la privacidad de los usuarios."
    },
    {
        number:"09",
        title:"Manejo de bases de datos No SQL",
        text:"Gestión eficiente de datos no relacionales utilizando tecnologías como MongoDB."
    },
    {
        number:"10",
        title:"Despliegue en producción y escalabilidad",
        text:"Implementación de aplicaciones en entornos de producción y planificación para manejar el crecimiento del tráfico y la demanda."
    }
];

function Experience() {
    return(
        <section className="experience">
            <div className="container">
                <motion.div
                className="sectionTitle"
                initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6}}
                viewport={{once:true}}
                >

                   <h2>
                    Mi proceso de 
                    <span> desarollo</span>
                   </h2>
                </motion.div>
                <div className="timeline">
                    {steps.map((step,index)=>(
                        <motion.div
                        key={index}
                        className="timeline__item"
                        initial={{opacity:0,y:40}}
                        whileInView={{opacity:1,y:0}}
                        transition={{delay:index * 0.15}}
                        viewport={{once:true}}
                        >
                            <div className="timeline__number">
                                {step.number}              
                            </div>
                            <div className="timeline__content">
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </motion.div>
                    ))}
                    </div>
                </div>
            </section>
    );
}

export default Experience