import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="logo">
            <img src = "./images/Logotipo-Loja.svg" alt="Plantas aos molhos" />
            </div>            

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Produtos</a></li>
                <li><a href="/contacts">Contatos</a></li>
            </ul>

            <ul>
                <li>
                    <input id="searchBox" type="text" placeholder="Pesquisa" />
                    <button type="submit">
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#40514e",}} />    
                    </button>
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