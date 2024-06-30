import { useState } from "react"

export const Register = (props) => {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);
    }
    
    return (
        <div className="form-container">
        <form className="register-form" onSubmit={handleSubmit}>
            
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
            <label htmlFor="email">
                Email
            </label>
            <input
                type="email"
                name="email"
                placeholder="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button>Registar</button>
        </form>
        <button className="btn-changeform" onClick={() => props.onSwitchForm("login")}>Já tem conta? Faça login aqui!</button>
    </div>
    )
}