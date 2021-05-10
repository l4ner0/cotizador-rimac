import React from 'react';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import FormMisDatos from '../shared/form/form-mis-datos/FormMisDatos';
import './MisDatos.css';

const MisDatos = () => {
    return (
        <div>
            <Breadcrumbs />
            <div className="mis-datos__title">
                <p className="title__name">¡Hola, <span className="title__name--red">Juan!</span></p>               
                <p className="title__info">Completa los datos de tu auto</p>
            </div>
            <FormMisDatos />
        </div>

    )
}

export default MisDatos;