import { NavLink } from "react-router-dom";

export default function Userlogin() {
    
    return (
        <form method="post" action="">
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
        </form>
    );
}