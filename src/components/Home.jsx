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
            <section className="bestsellers-section">
                <div>
                    <h2>As mais vendidas</h2>
                    <p>A maneira mais fácil de ter uma vida saudável é comprar suas plantas favoritas</p>
                    <div>
                        <button type="button"><NavLink to="/products">ver mais<img src="/images/ArrowRight.png" alt="" /></NavLink></button> 
                    </div>              
                    
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

            <section className="aboutus-section">
                <h2>Quem somos</h2>
                <p>Encomende agora e aprecie a beleza da natureza</p>
                <div className="aboutus-display">                
                    <div>
                        <img src="/images/Group 1V1.png" alt="" />
                        <h3><strong>Grande variedade</strong></h3>
                        <p>oferecemos diferentes tipos de produtos com menos variações de cada categoria</p>
                    </div>
                    <div>
                        <img src="/images/Group 1v2.png" alt="" />
                        <h3><strong>Envio rápido e gratuito</strong></h3>
                        <p>Prazo de entrega de 4 dias ou menos, envio grátis e opção de entrega rápida</p>
                    </div>
                    <div>
                        <img src="/images/Group 1v3.png" alt="" />
                        <h3><strong>Suporte 24/7</strong></h3>
                        <p>respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e em tempo real</p>
                    </div> 
                </div>
            </section>

            <section className="category-section">
                <h2>Categorias</h2>
                <p>Encontre o que procura</p>
                <div className="category-display">
                    <div className="imgUp">
                        <img src="/images/pexels-vlada-karpovich-7902930.jpg" alt="" />
                        <h3>Plantas Exteriores</h3>                        
                    </div>
                    <div className="imgDown">
                        <img src="/images/pexels-kate-amos-1408770-2718447.jpg" alt="" />
                        <h3>Acessórios</h3>                        
                    </div>
                    <div className="imgUp">
                        <img src="/images/pexels-valeriya-827518.jpg" alt="" />
                        <h3>Plantas Interiores</h3>                        
                    </div>                    
                </div>
                <div>
                    <button type="button"><NavLink to="/products">Explorar<img src="/images/ArrowRight.png" alt="" /></NavLink></button> 
                </div>             
                
            </section>

            <section className="Comments-section">
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