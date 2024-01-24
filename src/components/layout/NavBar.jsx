import {FaGithub} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar({title}) {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className='icon'>
          <FaGithub className='github'/>
          <Link to='/' className='link'>
            {title}
          </Link>
        </div>
          <Link to='/'>
            <button className='home'>Home</button>
          </Link>
          <Link to='/'>
            <button className='home'>About</button>
          </Link>
      </div>
    </nav>
  )
}

export default NavBar