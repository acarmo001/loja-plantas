import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Products from "./Products";
import Card from "./Card";

export default function Home(){

    const [Stocks, setProductlist] = useState ([]);
    
    
    useEffect(() => {
        fetch('/ProductList.json')
        .then(response => response.json())
        .then( data => setProductlist(data));
    }, []);

    const productView = Stocks.filter( (stock) => stock.review > 4.5)
    
    console.log(productView);

    return (
        <main>
            <section className="first-section">
                <div>
                    <h2>As mais vendidas</h2>
                    <p>A maneira mais fácil de ter uma vida saudável é comprar suas plantas favoritas</p>
                    <NavLink to="/products">ver mais</NavLink>
                </div>                             
                <div className="bestsellers">
                    
                        {
                            productView.map(stock => (

                                <section key={stock.id}>
                                    
                                    <figure>
                                        <a href=""><img src= { stock.photo } alt="" /></a>
                                    </figure>
                                    <h3>{ stock.name }</h3>
                                    <p>{stock.price} €</p>
                                </section>
                            ))
                        }                    
                </div>
            </section>

            <section className="second-section">
                <h2>Quem somos</h2>
                <p>Encomende agora e aprecie a beleza da natureza</p>
                <ul>
                    <li>
                        <img src="/images/Group 1V1.png" alt="" />
                        <h3>Grande variedade</h3>
                        <p>oferecemos diferentes tipos de produtos com menos variações de cada categoria</p>
                    </li>
                    <li>
                        <img src="/images/Group 1v2.png" alt="" />
                        <h3>Envio rápido e gratuito</h3>
                        <p>Prazo de entrega de 4 dias ou menos, envio grátis e opção de entrega rápida</p>
                    </li>
                    <li>
                        <img src="/images/Group 1v3.png" alt="" />
                        <h3>Suporte 24/7</h3>
                        <p>respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e em tempo real</p>
                    </li> 
                </ul>
            </section>

            <section className="third-section">
                <h2>Categorias</h2>
                <p></p>
                <ul>
                    <li>
                        <img src="/images/pexels-julia-kuzenkov-442028-1974508.jpg" alt="" />
                        <p><strong>Plantas Exteriores</strong></p>                        
                    </li>
                    <li>
                        <img src="/images/pexels-shottrotter-2249959.jpg" alt="" />
                        <p><strong>Acessórios</strong></p>                        
                    </li>
                    <li>
                        <img src="/images/pexels-kate-amos-1408770-2718447.jpg" alt="" />
                        <p><strong>Plantas Interiores</strong></p>                        
                    </li>
                    <button type="button">Explorar</button>
                </ul>
                
            </section>

            <section className="fourth-section">
                <p>O que dizem os nossos clientes sobre "Plantas aos Molhos"</p>
                <ul>
                    <li>
                        <p>Comentário 1</p>
                        <img src="" alt="" />  
                    </li>
                    <li>
                        <p>Comentário 2</p>
                        <img src="" alt="" />  
                    </li>                   
                </ul>
                
            </section>
            <footer>
                <ul className="footlist_redes">
                    <li>
                        <img src = "./images/Logotipo-Loja.svg" alt="Plantas aos molhos" />
                    </li>
                    <li>
                        <p>Nós ajudamos a encontrar a sua planta de sonho</p>
                    </li>
                    <li>
                        <a href="/Facebook">Facebook</a>
                    </li>
                    <li>
                        <a href="/Instagram">Instagram</a>
                    </li>
                    <li>
                        <a href="/Twitter">Twitter</a>
                    </li>                    
                </ul>
                <ul className="footList_paginas">
                    <li>
                        <a href="/Information">Informação</a>
                    </li>
                    <li>
                        <a href="/Company">Companhia</a>
                    </li>
                    <li>
                        <a href="/Contact">Contactos</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Products">Produtos</a>
                    </li>
                    <li>
                        <a href="/Blog">Blog</a>
                    </li>
                    <li>
                        <a href="/Comunity">Community</a>
                    </li>
                    <li>
                        <a href="/Career">Carreira</a>
                    </li>
                    <li>
                        <a href="/Ourstory">A Nossa História</a>
                    </li>
                    <li>
                        <a href="/Gettingstarted">Começar</a>
                    </li>
                    <li>
                        <a href="/Pricing">Preços</a>
                    </li>
                    <li>
                        <a href="/Resources">Recursos</a>
                    </li>
                </ul>
                <p>2024 todos os direitos reservados </p>               
            </footer>        


        </main>
    );
}