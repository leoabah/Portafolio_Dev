import { motion } from "framer-motion";
import Projecto1 from "@/assets/images/Projecto1.png";
import Projecto2 from "@/assets/images/Projecto2.png";



const projects = [
    {
        title:"E-comerce App",
        image: Projecto2,
        description: "Aplicación ecommerce moderna desarrollada con React Vite, diseño responsive y enfoque UI moderno, carrito de compras funcional y animaciones suaves.",
        url: "https://leoabah.github.io/E-comerce-React-App/",
        codeUrl: "https://github.com/leoabah/E-comerce-React-App.git"
    },
    {
        title:"E-comerce",
        image: Projecto1,
        description: "Aplicación ecommerce moderna desarrollada con Html , Sass y JavaScript, diseño responsive y enfoque UI moderno.",
        url: "https://leoabah.github.io/E-comerce/",
        codeUrl: "https://github.com/leoabah/E-comerce.git"
    }
]

function Projects () {
    return (
        <section id="projects" className="projects">
            <div className="container">

                <motion.div
                initial ={{opacity:0, y:40}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5}}
                viewport={{once:true}}
                className="sectionTitle"
                >
                    <p>Proyectos</p>
                    <h2>Mis Proyectos Destacados</h2>

                </motion.div>

                <div className="projects__grid">
                    {projects.map((project, index) => (

                        <motion.div
                            key={index}
                            className="projectsCard"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{y:-10}}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="projectImage">
                                <img 
                                src={project.image}
                                alt={project.title}
                                />
                            </div>
                            <div className="projectInfo">
                                <h3>
                                    {project.title}
                                </h3>
                                <p>
                                    {project.description}
                                </p>
                                <a
                                 className="projectLink"
                                 href={project.url}
                                 target="_blank"
                                 rel="noopener noreferrer"
                                >
                                    Ver Proyecto
                                </a>
                                
                                <a
                                 className="codeLink"
                                 href={project.codeUrl}
                                 target="_blank" 
                                 rel="noopener noreferrer"
                                 style={{
                                    marginLeft:"20px"
                                 }}
                                 >
                                    Ver Codigo
                                </a>
                                
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects;