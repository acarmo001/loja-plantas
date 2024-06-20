export default function Card ({props}) {
    console.log(props);
    return (
        <div className="productcard">
            {    /*   
                productView.map(stock => (

                    <section key={stock.id}>
                                    
                        <figure>
                            <a href=""><img src= { stock.photo } alt="" /></a>
                        </figure>
                        <h3>{ stock.name }</h3>
                        <p>{stock.price} €</p>
                        <p>{stock.height}</p>
                        <p>{stock.rega}</p>
                        <p>{stock.review}</p>
                        <p>{stock.status}</p>
                        <p>{stock.description}</p>
                        
                    </section>
                )) */
            }
        </div>
        
    );

} 