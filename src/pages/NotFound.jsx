import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";


function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound-content">
        <h1>Ooops</h1>
        <h1>Page not found</h1>
        <Link to="/">
          <FaHome className="notfound-home"/>
        </Link>
      </div>
    </div>
  )
}

export default NotFound