import React from 'react';
import './BoxHelpMarca.css';

const BoxHelpMarca = () => {
    return (
        <div className="help-marca">
            <div className="help-marca__img">
                <img src="/assets/img/car.svg" alt=""/>
            </div>
            <div className="help-marca__text">
                <p>¿No encuentras el modelo?</p>
                <a href="#">Clic Aquí</a>
            </div>
        </div>
    )
}

export default BoxHelpMarca;