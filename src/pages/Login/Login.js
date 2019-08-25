import React from 'react'
import './Login.css'

export default function Login({ history }) {

    function handleSubmit(e) {
        history.push(`./home`);       
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <p>Logo do sistema</p>
                <input placeholder="Usuário" />
                <input type="password" placeholder="Senha"/>
                <div>
                    <a href={`/Home`}>Crie seu login</a>
                    <a href={`/`}>Alterar senha</a>
                </div>
                <button type="submit">Login</button>                
            </form>
        </div>
    )

}