import React from 'react';
import Hero from '../shared/hero/Hero'
import FormLogin from '../shared/form/form-login/FormLogin'
import './Login.css'

const Login = () => {
    return (
        <div>
            <Hero />
            <p className="form-container form-titulo">Déjanos tus datos</p>
            <div className="form-container">
                <FormLogin />
            </div>
        </div>

    )
}

export default Login;