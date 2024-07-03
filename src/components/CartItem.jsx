export default function cartItem () {
    return (
        <section className="cartitem">
            <img className="cartItem-img" src="" alt="" />
            item do carrinho
            <div className="cartItem-content">
                <h3 className="cartItem-title">Título do item</h3>
                <h3 className="cartItem-price">Preço do item</h3>
                <button type="button" className="removeBtn">
                    X                    
                </button>            
            </div>
        </section>
        
    )
}