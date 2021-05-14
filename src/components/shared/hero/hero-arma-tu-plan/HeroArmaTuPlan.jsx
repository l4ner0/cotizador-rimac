import React from 'react';
import Button from '@material-ui/core/Button';
import './HeroArmaTuPlan.css';

const HeroArmaTuPlan = () => {
    return (
        <div className="hero-plan">
            <p className="hero-plan__title">Mira las coberturas</p>
            <p className="hero-plan__subtitle">Conoce las coberturas para tu plan</p>
            <div className="hero-plan__box-plan">
                <div className="box-plan__info">
                    <p className="box-plan__info-placa">Placa: C2U-114</p>
                    <p className="box-plan__info-brand">Wolskwagen 2019</p>
                    <div className="box-plan__info-edit">
                        <a className="box-plan__info-edit-button">Editar</a>
                    </div>
                </div>
                <div className="box-plan__img">
                    <img className="img-avatar" src="https://i.postimg.cc/nrQtpTsD/avatar.png" alt="avatar" />
                </div>
            </div>
        </div>
    );
}

export default HeroArmaTuPlan;