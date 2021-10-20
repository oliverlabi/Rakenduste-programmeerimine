import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="logo.jpg" alt="rakenduse logo"/>
            </Link>
            <p className="elementBetween"></p>
            <Link to="category-list">
                <button className="navbar-buttons">Kategooriad</button>
            </Link>
            <Link to="cart">
                <img className="cart" src="shopping-cart.svg" alt="ostukorvi logo"/>
            </Link>
            
        </div>
    );
}

export default Navbar;