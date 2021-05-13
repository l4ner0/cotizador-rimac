import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionQuoteInsurance } from '../../redux/cotizadorDucks';
import { useHistory } from 'react-router-dom';
import Hero from '../shared/hero/Hero';
import FormLogin from '../shared/form/form-login/FormLogin';
import './Login.css';

const Login = () => {
    localStorage.clear();
    const history = useHistory();
    const { documentList , datos } = useSelector(store => store.cotizadorRimac);
    const dispatch = useDispatch();
    const submitCotizalo = async (payload) => {
        const { codRes } = await dispatch(actionQuoteInsurance(payload));
        if (codRes === "00") {
            history.push('/cotizador-rimac/mis-datos')
        }
    }
    return (
        <div className="login">
            <Hero />
            <p className="form-container form-titulo">Déjanos tus datos</p>
            <div className="form-container">
                <FormLogin documentList={documentList} submitCotizalo={submitCotizalo} />
            </div>
        </div>

    )
}

export default Login;