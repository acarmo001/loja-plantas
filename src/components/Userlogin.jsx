import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Userlogin() {

    /*const [userLogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState (false);

    const changepasswordvisible = () => {
        setPasswordVisible(!passwordVisible);
    };*/

    return (
        <form className="userForm" method="post" action="bduser.html">
            
            <div>
				<label>
					Nome de Utilizador
					<input type="text" name="username" required />
				</label>
			</div>
			<div>
				<label>
					Palavra-passe
					<input type="password" name="password" required />
				</label>
			</div>
			<div>
				<button type="submit">Login</button>
			</div>
            <a href="">Esqueci a minha password!</a>
            <div>
                <button type="submit">Quero inscrever-me!</button>
            </div>
        </form>
    );
}