
import{
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
    FaSass,
    FaNpm 
} from "react-icons/fa";

import { SiVite } from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [ "HTML" , "CSS" , "JavaScript" , "React" , "Node.js" , "Git" , "GitHub" , "Bootstrap" , "Sass" , "npm", "vite" ] 

function Skills () {

    const icons = {
        "HTML": <FaHtml5 />,
        "CSS": <FaCss3Alt />,
        "JavaScript": <FaJs />,
        "React": <FaReact />,
        "Node.js": <FaNodeJs />,
        "Git": <FaGitAlt />,
        "GitHub": <FaGithub />,
        "Bootstrap": <FaBootstrap />,
        "Sass": <FaSass />,
        "npm": <FaNpm />,
        "vite": <SiVite />
    };

  return (
    <section id="skills" className='skills'>

        <div className='container'>

            <motion.div
            
               initial={{ opacity:0, y:50 }}
               whileInView={{ opacity:1 ,y:0 }}
               transition={{ duration:0.8 }}
               viewport={{ once:true }}
               className="sectionTitle"

            >
            <p>Habilidades</p>
            <h2>Tecnologias y herramientras</h2>

            </motion.div>

        <div className="skills__grid">
            {skills.map((skill,index) =>(
                <motion.div
                  key={index}
                  initial={{ opacity:0, y:30}}
                  transition={{ delay: index *.1}}
                  viewport={{once:true}}
                  whileInView={{ opacity:1, y:0}}
                  className="skillCard"
                  >
                    <div className="icon">
                        {icons[skill]}
                    </div>
                    <h3>{skill}</h3>

                  </motion.div>
            ))}
        </div>
            
       </div>
    </section>
  );
}

export default Skills