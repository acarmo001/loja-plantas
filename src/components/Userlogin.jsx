import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createUser, deleteUser, loadUsers, updateUser } from '../redux/Users';

import '../Styles/UserLogin.css'

export default function Userlogin() {

    const dispatch = useDispatch();
    const userList = useSelector( state => state.users.value );

    useEffect(() => {
        fetch("./public/MOCK_Users.json")
        .then(response => response.json())
        .then(data => {
            dispatch( loadUsers(data) )
        });
    }, [dispatch]);

    const [userLogin, setUserlogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState (false);

    const changepasswordvisible = () => {
        setPasswordVisible(!passwordVisible);
    };

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