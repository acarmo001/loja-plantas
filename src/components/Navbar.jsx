export default function Navbar() {
    return (
        <nav className="Navbar">
            <div className="logo">
            <img src = "loja-plantas/public/images/Logotipo-Loja.svg" alt="Plantas aos molhos" />
            </div>            

            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Produtos</a></li>
                <li><a href="/contacts">Contatos</a></li>
            </ul>

            <ul>
                <li>
                    <input id="searchBox" type="text" placeholder="Pesquisa" />
                    <img src = "loja-plantas/public/images/magnifying-glass-solid.svg" alt="" />
                </li>
                <li><a href="/shopcar">Carrinho Compras</a></li>
                <li><a href="/login">Login</a></li>                
            </ul>

        </nav>
        
    );
}