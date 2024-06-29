import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import '../Styles/Navbar.css';

export default function Navbar() {
    const [searchText, setSearchText] = useState("");
    const loadSearch = () => {
        alert("teste");

    };

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
                <form className="searchBox" onSubmit={loadSearch}>
                    <input
                        className="searchinput"
                        type="search"
                        value={ searchText }
                        placeholder="Pesquisa"
                        onChange={ ({ target }) => setSearchText(target.value) }
                    />
                    <button className="searchBtn" type="submit" aria-label="submeter">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#40514e",}} />
                    </button>
                </form>
                                
                <div className="iconBtn">
                    <NavLink to="/Userlogin" arial-label="login">
                        <FontAwesomeIcon icon={faUser} style={{color: "#40514e",}} />
                    </NavLink>
                </div>
                <div className="iconBtn">
                    <NavLink to="/ShoppingCart" arial-label="carrinho de compras">
                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#40514e",}} />
                    </NavLink>
                    <p className="cartStatus">1</p>
                </div>              
            </div>

        </nav>
        
    );
}