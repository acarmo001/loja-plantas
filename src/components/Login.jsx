import { useState } from "react";

export default function Login(props){

      
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
     
    /*const [signin, setSignin] = useState(false);*/

    function handleSubmit(e) {
        e.preventDefault();
        
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
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />                
                <input className="btn-login" type="submit" value="Login" />                               
            </form>
            <button className="btn-changeform" onClick={() => props.onSwitchForm("register")}>Não tem conta? Registe-se aqui!</button>
        </div>
    );

}


