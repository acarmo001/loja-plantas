import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Home(){

    const [products, setProductlist] = useState ([]);    
    
    useEffect(() => {
        fetch('/ProductList.json')
        .then(response => response.json())
        .then( productdata => setProductlist(productdata));
    }, []);

    const productView = products.filter( (product) => product.review > 4.5);
    
    const [comments, setComments] = useState ([]);
    const [randomComment, setrandomComment] = useState (0);
              
    useEffect(() => {
        fetch('/Comments.json')
        .then(response => response.json())
        .then( commentdata => { 
            setComments(commentdata);
            setrandomComment(Math.ceil(Math.random() * commentdata.length));
        });
            
    }, []);
    
    const commentView = comments.filter( (comment) => comment.id === randomComment);
    
    console.log(randomComment);
    console.log(commentView);
 
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
                            productView.map(product => (
                                
                                <section key={product.id}>
                                    <figure>
                                        <NavLink to={`/productPage/${product.id}`}><img src= { product.photo } alt="" /></NavLink>
                                    </figure>
                                    <h3>{ product.name }</h3>
                                    <p>{product.price} €</p>                                    
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
                    <div className="imgDown">
                        <img src="/images/pexels-vlada-karpovich-7902930.jpg" alt="" />
                        <h3>Plantas Exteriores</h3>                        
                    </div>
                    <div className="imgUp">
                        <img src="/images/pexels-kate-amos-1408770-2718447.jpg" alt="" />
                        <h3>Acessórios</h3>                        
                    </div>
                    <div className="imgDown">
                        <img src="/images/pexels-valeriya-827518.jpg" alt="" />
                        <h3>Plantas Interiores</h3>                        
                    </div>                    
                </div>
                <div>
                    <button type="button"><NavLink to="/products">Explorar<img src="/images/ArrowRight.png" alt="" /></NavLink></button> 
                </div>             
                
            </section>

            <section className="comments-section">
                <h3>O que dizem os nossos clientes sobre<br /> "Plantas aos Molhos"</h3>
                
                    <div className="commentZone">
                        {
                            commentView.map(comment => (

                                <section key={comment.id}>
                                    <div>
                                        <figure>
                                            <img src= { comment.photo } alt="" />
                                        </figure>
                                        <h3>{ comment.name }</h3>
                                    </div>
                                    <div>
                                        <p>{ comment.comment }</p>
                                    </div>
                                </section>
                            ))
                        }                         
                    </div>
                                    
            </section>
                 


        </main>
    );
}