import React from 'react';
import cart from '../../../../assets/img/car.svg';
import './BoxHelpMarca.css';

const BoxHelpMarca = () => {
    return (
        <div className="help-marca">
            <div className="help-marca__img">
                <img src={cart} alt="cart"/>
            </div>
            <div className="help-marca__text">
                <p>¿No encuentras el modelo?</p>
                <a href="#">Clic Aquí</a>
            </div>
        </div>
    )
}

export default BoxHelpMarca;