import { useState } from "react";

export default function Login(props){

      
    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    })
     
    /*const [signin, setSignin] = useState(false);*/

    function handleSubmit(e) {
        e.preventDefault();
        Login(userLogin);
    }

    /*const toLogout = () => {
        localStorage.removeItem();        
    }*/ 

 

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                
                <label htmlFor="username">
                    Nome de Utilizador
                </label>
                <input
                    type="text"
                    name="username"
                    placeholder="Primeiro e último nome"
                    value={userLogin.username}
                    onChange={e => setUserLogin(e.target.value)}
                    required
                />  
                <label htmlFor="password">
                    Palavra-passe
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    value={userLogin.password}
                    onChange={e => setUserLogin(e.target.value)}
                />                
                <button>{/*signin? "Login" : "Logout"*/} Login</button>                               
            </form>
            <button className="btn-changeform" onClick={() => props.onSwitchForm("register")}>Não tem conta? Registe-se aqui!</button>
        </div>
    );

}


