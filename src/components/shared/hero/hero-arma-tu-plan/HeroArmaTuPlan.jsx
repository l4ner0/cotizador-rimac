import React from 'react';
import Button from '@material-ui/core/Button';
import './HeroArmaTuPlan.css';

const HeroArmaTuPlan = (props) => {
    const { placa, brand, year, backStep } = props;
    return (
        <div className="hero-plan">
            <p className="hero-plan__title">Mira las coberturas</p>
            <p className="hero-plan__subtitle">Conoce las coberturas para tu plan</p>
            <div className="hero-plan__box-plan">
                <div className="box-plan__info">
                    <p className="box-plan__info-placa">Placa: {placa}</p>
                    <p className="box-plan__info-brand">{brand} {year}</p>
                    <div className="box-plan__info-edit">
                        <Button className="box-plan__info-edit-button" size="small" onClick={backStep}>Editar</Button>
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