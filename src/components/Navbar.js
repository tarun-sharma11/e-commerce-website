
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return (
    
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to={`/`}>
            <img src='/assets/shopnow.svg' alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Shop Now
            </Link>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <Link to={`/profile`}><img src='/assets/person.svg' alt="Logo" width="30" height="30" /></Link>
            <Link to={`/cart`}><img src='/assets/cart.svg' alt="Logo" width="30" height="30" /></Link>
        </div>
        </nav>
  );
}

