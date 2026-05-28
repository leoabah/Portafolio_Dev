
import {useState} from 'react'
import {HiMenuAlt3, HiX} from 'react-icons/hi'

function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);

  return (

    <nav  className='navbar'>

      <div className='container navbar__content'>

        <div className='logo'>  
             <h3>
                  Leo<span>.Dev</span>
              </h3>
        </div>

        <ul className={
          menuOpen
          ? "navLinks navLinks--active"
          : "navLinks"
        }>
          <li>
            <a href='#home' onClick={() => setMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Proyectos
            </a>
          </li>
          <li>
            <a href="#contact">
              Contacto
            </a>
          </li>
        </ul>
        <button 
           className="menuButton"
           onClick={() => setMenuOpen(!menuOpen)}
        >
          {
            menuOpen
            ? <HiX />
            :<HiMenuAlt3 />
          }
          
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

