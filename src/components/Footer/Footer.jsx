import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa6";

function Footer() {
     const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
     };

     return(
        <footer className="footer">
            <div className="container footer__content">
                <div className = "footer__branding">
                    <h3>
                        Leo<span>.Dev</span>
                    </h3>
                    <p>
                        Fontend Developer Jr
                        apasionado por crear experiencias web modernas y funcionales.
                    </p>
                </div>
                <div className="footer__social">
                    <a 
                        href="https://github.com/leoabah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub style={{ width: 50, height: 50 , marginRight: 10}} />
                    </a>
                    <a 
                        href="https://www.linkedin.com/in/leoabah"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin style={{ width: 50, height: 50 , marginLeft: 10}} />
                    </a>
                </div>
                <div className="footer__copy">
                    &copy; {new Date().getFullYear()} Marche libre. Todos los derechos reservados.
                </div>
            </div>

            <button className="scrollTop" onClick={scrollToTop}>
                <FaArrowUp />
            </button>
        </footer>
     )
        }

export default Footer;