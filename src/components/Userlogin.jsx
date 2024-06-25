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
        <div className="userLogin">
        
            <div className='createUser'>
				<label>
					Nome de Utilizador
					<input type="text" placeholder="escrever o username" name="username" required onChange={ e => setUserlogin (e.target.value)} />
				</label>			
				<label>
					Palavra-passe
					<input type="password" placeholder="escrever a password" name="password" required onChange={ e => setPassword (e.target.value)}/>
				</label>
                <div>
                    <button onClick={
                        () => {
                            dispatch( createUser ({
                                id: Math.random() * 1000,
                                name: userLogin,
                                password: password
                            }))
                        }
                    } type="submit">Quero inscrever-me!</button>
                </div>
			</div>
            
			<div>
				<button type="submit">Login</button>
			</div>
            <a href="">Esqueci a minha password!</a>
            
        
        </div>
    );
}