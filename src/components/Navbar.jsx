import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


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

            <ul className="Navbar-right">
                <li>
                    <div className="searchBtn">
                        <input type="text" placeholder="Pesquisa" />
                        <button type="submit">
                            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#40514e",}} />    
                        </button>
                    </div>
                    
                </li>
                <li><a href="/shopcar" arial-label="carrinho de compras">
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#40514e",}} />
                    </a>
                </li>
                <li><a href="/login" arial-label="login">
                        <FontAwesomeIcon icon={faUser} style={{color: "#40514e",}} />
                    </a>
                </li>                
            </ul>

        </nav>
        
    );
}