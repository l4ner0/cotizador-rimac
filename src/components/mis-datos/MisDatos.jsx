import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionVehicleYears, actionVehicleBrands, actionRecordData } from '../../redux/cotizadorDucks';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import FormMisDatos from '../shared/form/form-mis-datos/FormMisDatos';
import { ARMA_TU_PLAN } from '../../router';
import { useHistory } from 'react-router-dom';
import './MisDatos.css';

const MisDatos = () => {
    const history = useHistory();
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
        recoveredData = JSON.parse(localStorage.getItem("datos"));
    } else {
        localStorage.setItem("datos", JSON.stringify(datos));
        recoveredData = datos;
    }
    const { nombre, minimumAmount, maximumAmount } = recoveredData;

    const submitContinue = async (payload) => {
        const { codRes } = await dispatch(actionRecordData(payload));
        if (codRes === "00") {
            history.push(ARMA_TU_PLAN);
        }
    }
    return (
        <div>
            <Breadcrumbs step="1" stepTotal="2" value={50} />
            <div className="mis-datos__title">
                <p className="title__name">¡Hola, <span className="title__name--red">{nombre}</span></p>
                <p className="title__info">Completa los datos de tu auto</p>
            </div>
            <FormMisDatos
                vehicleYearsList={vehicleYearsList}
                vehicleBrandsList={vehicleBrandsList}
                minimumAmount={minimumAmount}
                maximumAmount={maximumAmount}
                submitContinue={submitContinue}
            />
        </div>

    )
}

export default MisDatos;