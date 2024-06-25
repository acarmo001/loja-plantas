import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import '../Styles/Navbar.css';


export default function Navbar() {
    return (
        <nav className="Navbar">
            <h1>
                <img src = "./images/Logotipo-Loja.svg" alt="Plantas aos molhos" />
            </h1>            

            <ul className="Navbar-center">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Produtos</NavLink></li>
                <li><NavLink to="/contact">Contatos</NavLink></li>
            </ul>

            <div className="Navbar-right">
                
                <div className="iconBtn">
                    <NavLink to="/ShoppingCart" arial-label="carrinho de compras">
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#40514e",}} />
                    </NavLink>
                </div>
                <div className="iconBtn">
                    <NavLink to="/Userlogin" arial-label="login">
                        <FontAwesomeIcon icon={faUser} style={{color: "#40514e",}} />
                    </NavLink>
                </div>
                <div>
                    <input className="searchBox" type="search" placeholder="Pesquisa" />
                </div>
                <button className="searchBtn" type="submit" aria-label="ok">
                    <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#40514e",}} />    
                </button>              
            </div>

        </nav>
        
    );
}