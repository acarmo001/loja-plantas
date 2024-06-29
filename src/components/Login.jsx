import { useState } from "react";

export const Login = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [signin, setSignin] = useState(true);

    const toSubmit = (e) => {
        e.preventDefault();
        
        if(e.target.username.value && e.target.password.value) {
            if(!localStorage.getItem("user")){
                localStorage.setItem("user", JSON.stringify([{username:e.target.username.value, password:e.target.password.value}]))
            }
        }
        console.log(username);
        console.log(password);        
    }

    const toLogout = () => {
        localStorage.removeItem();        
    }

 

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={toSubmit}>
                
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
                <button>{signin? "Login" : "Logout"}</button>                               
            </form>
            <button className="btn-changeform" onClick={() => props.onSwitchForm("register")}>Não tem conta? Registe-se aqui!</button>
        </div>
    );

}


