import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({title}) {
  return (
    <nav className='navbar'>
      <div className="container">

        {/* GitHub Link to home page */}
        <div className='icon'>
          <FaGithub className='github'/>
          <Link to='/' className='titlelink'>
            {title}
          </Link>
        </div>

          {/* Navbar Links */}
          <div className='links'>
            <Link to='/'>
              <button className='home'>Home</button>
            </Link>
            <Link to='/about'>
              <button className='home'>About</button>
            </Link>
          </div>

      </div>
    </nav>
  )
}

export default NavBar