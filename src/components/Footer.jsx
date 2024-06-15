import { NavLink } from "react-router-dom";
import '../Styles/Footer.css';

export default function Footer () {
    return (
        <footer>
            <div className="footer-left">
                <div className="footer-logo">
                    <img src = "./images/Logotipo-Loja.svg" alt="Plantas aos molhos" />
                    <p>Nós ajudamos a encontrar a sua planta de sonho</p>
                </div>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/"><img src="/images/Logo-facebook.png" alt="facebook" /></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/"><img src="/images/Logo-Instagram.png" alt="instagram" /></a>
                    </li>
                </ul>                   
            </div>
            <div className="footer-center">
                <p>2024 todos os direitos reservados </p>
            </div>
            <div className="footer-right">
                <ul>                        
                    <li>
                        <NavLink to="/contact">Contactos</NavLink>
                    </li>                        
                    <li>
                        <NavLink to="/products">Produtos</NavLink>
                    </li>                        
                    <li>
                        <a href="/Ourstory">A Nossa História</a>
                    </li>                        
                </ul>
                    
            </div>                  
        </footer>
    );
}