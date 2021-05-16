import React from 'react';
import './HeroLogin.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__text">
                <p className="text_header">¡Nuevo!</p>
                <p className="text__content">Seguro Vehicular <span className="text__content--red">Tracking</span></p>
                <p className="text__footer">Cuentanos donde le haras seguimiento a tu seguro</p>
            </div>
            <div className="hero__container-img">
                <img className="hero__img" src="https://i.postimg.cc/R62KCkcD/client-banner.png" alt="cliente-banner" />
            </div>
        </div>
    )
}

export default Hero;