import React from 'react';
import './BoxHelpMarca.css';

const BoxHelpMarca = () => {
    return (
        <div className="help-marca">
            <div className="help-marca__img">
                <img src="https://i.postimg.cc/nLnn0wK0/car.png" alt="cart"/>
            </div>
            <div className="help-marca__text">
                <p>¿No encuentras el modelo?</p>
                <a href="#">Clic Aquí</a>
            </div>
        </div>
    )
}

export default BoxHelpMarca;