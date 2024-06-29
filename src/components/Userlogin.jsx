import { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

import '../Styles/UserLogin.css'


export default function LoginUser() {
    const [currentForm, setCurrentForm] = useState('login');

    const switchForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div className="userlogin">
            {
                currentForm === "login" ? <Login onSwitchForm={switchForm}/> : <Register onSwitchForm={switchForm}/>
            }
        </div>
    );

}