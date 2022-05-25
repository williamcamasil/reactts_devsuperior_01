import './styles.scss';
import 'bootstrap/js/src/collapse';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="main-nav">
      <Link to="/" className="nav-logo-text">
        <h4>Github API</h4>
      </Link>
    </div>
  );
};

export default Navbar;
