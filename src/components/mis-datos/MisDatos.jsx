import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionVehicleYears, actionVehicleBrands } from '../../redux/cotizadorDucks';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import FormMisDatos from '../shared/form/form-mis-datos/FormMisDatos';
import './MisDatos.css';

const MisDatos = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getVehicleData()
    }, []);

    const getVehicleData = async () => {
        const { codRes: codResYears } = await dispatch(actionVehicleYears());
        const { codRes: codReBrands } = await dispatch(actionVehicleBrands());
        if (codResYears !== "00" || codReBrands !== "00") {
            console.log("error al obtener datos vehiculares")
        }
    }

    const { datos, vehicleYearsList, vehicleBrandsList } = useSelector(store => store.cotizadorRimac);
    let recoveredData;
    if (datos.nombre === undefined) {
        console.log("recuperar de local storage")
        recoveredData = JSON.parse(localStorage.getItem("datos"));
    } else {
        console.log("recuperar de state")
        recoveredData = datos;
    }
    const { nombre, minimumAmount, maximumAmount } = recoveredData;
    return (
        <div>
            <Breadcrumbs />
            <div className="mis-datos__title">
                <p className="title__name">¡Hola, <span className="title__name--red">{nombre}</span></p>
                <p className="title__info">Completa los datos de tu auto</p>
            </div>
            <FormMisDatos
                vehicleYearsList={vehicleYearsList}
                vehicleBrandsList={vehicleBrandsList}
                minimumAmount={minimumAmount}
                maximumAmount={maximumAmount}
            />
        </div>

    )
}

export default MisDatos;