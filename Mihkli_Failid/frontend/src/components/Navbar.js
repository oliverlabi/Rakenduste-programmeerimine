import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">
                <img className="logo" src="rakendus.png" alt="rakenduse logo"/>
            </Link>
            <Link to="category-list">
                <button className="categories">Vaata kategooriaid</button>
            </Link>
            <Link to="cart">
                <img className="cart" src="shopping-cart.svg" alt="ostukorvi logo"/>
            </Link>
            
        </div>
    );
}

export default Navbar;