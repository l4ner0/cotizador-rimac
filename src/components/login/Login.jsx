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
    const { documentList } = useSelector(store => store.cotizadorRimac);
    const dispatch = useDispatch();
    const submitCotizalo = async (payload) => {
        const { codRes, response } = await dispatch(actionQuoteInsurance(payload));
        if (codRes === "00") {
            localStorage.setItem("datos", JSON.stringify(response));
            history.push('/mis-datos')
        }
    }
    return (
        <div>
            <Hero />
            <p className="form-container form-titulo">Déjanos tus datos</p>
            <div className="form-container">
                <FormLogin documentList={documentList} submitCotizalo={submitCotizalo} />
            </div>
        </div>

    )
}

export default Login;