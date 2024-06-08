import { useEffect, useState } from "react";
import '../Styles/ProductsPage.css';


export default function Products() {

    const [Stocks, setProductlist] = useState ([]);

    useEffect(() => {
        fetch('/ProductList.json')
        .then(response => response.json())
        .then( data => setProductlist(data));
    }, []);


    return (
        <div>
            <h2>Produtos</h2>
            <div className="galery">
            {
                Stocks.map(stock => (
                    <section key={stock.id}>
                        <figure>
                            <a href=""><img src= { stock.photo } alt="" /></a>
                        </figure>
                        <p> {stock.review} <img src="/images/estrela.svg" alt="" /> </p>
                        <h3>{ stock.name }</h3>                                           
                        <p>{stock.price} €</p>
                    </section>
                ))
            }
            </div>
        </div>
    );
}