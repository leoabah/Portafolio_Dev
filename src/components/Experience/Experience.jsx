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
    }
];

function Experience() {
    return(
        <section className="experience">
            <div className="container">
                <motion.div
                clasName="sectionTiltle"
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