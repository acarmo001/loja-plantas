export default function Main(){
    return (
        <main>
            <div className="topBanner">
                <h2>Compre a sua planta de sonho</h2>
                <img src="./images/banner.jpg" alt="" />
            </div>
            
            <section>
                <h2>As mais vendidas</h2>
                <p>A maneira mais fácil de ter uma vida saudável é comprar suas plantas favoritas</p>
                <button type="button">ver mais</button>
                <ul>
                    <li>
                        planta 1                        
                    </li>
                    <li>
                        planta 2
                    </li>
                    <li>
                        planta 3
                    </li>
                </ul>
            </section>

            <section>
                <h2>Quem somos</h2>
                <p>Encomende agora e aprecie a beleza da natureza</p>
                <ul>
                    <li>
                        <h3>Grande variedade</h3>
                        <p>oferecemos diferentes tipos de produtos com menos variações de cada categoria</p>
                    </li>
                    <li>
                        <h3>Envio rápido e gratuito</h3>
                        <p>Prazo de entrega de 4 dias ou menos, envio grátis e opção de entrega rápida</p>
                    </li>
                    <li>
                        <h3>Suporte 24/7</h3>
                        <p>respostas a qualquer consulta relacionada a negócios 24 horas por dia, 7 dias por semana e em tempo real</p>
                    </li> 
                </ul>
            </section>

            <section>
                <h2>Categorias</h2>
                <p></p>
                <ul>
                    <li>
                        <p><strong>Plantas Naturais</strong></p>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <p><strong>Acessórios</strong></p>
                        <img src="" alt="" />
                    </li>
                    <li>
                        <p><strong>Plantas Artificiais</strong></p>
                        <img src="" alt="" />
                    </li>
                    <button type="button">Explorar</button>
                </ul>
                
            </section>

            <section>
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