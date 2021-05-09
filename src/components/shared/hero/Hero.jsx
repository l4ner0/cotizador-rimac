import React from 'react';
import './Hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <p className="text_header">¡Nuevo!</p>
                <p className="text__content">Seguro Vehicular <span className="text__content--red">Tracking</span></p>
                <p className="text__footer">Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            <div>
                <img className="hero__img" src={`/assets/img/client-banner.svg`} alt="cliente-banner" />
            </div>
        </div>
    )
}

export default Hero;