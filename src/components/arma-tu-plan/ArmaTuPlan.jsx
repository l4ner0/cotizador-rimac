import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import HeroArmaTuPlan from '../shared/hero/hero-arma-tu-plan/HeroArmaTuPlan';
import FormCobertura from '../shared/form/form-cobertura/FormCobertura';
import { actionRecordCoberturas } from '../../redux/cotizadorDucks';
import { MIS_DATOS, CONFIRMACION_COMPRA } from '../../router';
import { useHistory } from 'react-router-dom';

const ArmaTuPlan = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { datos } = useSelector(store => store.cotizadorRimac);
    let recoveredData;
    if (datos.nombre === undefined) {
        recoveredData = JSON.parse(localStorage.getItem("datos"));
    } else {
        localStorage.setItem("datos", JSON.stringify(datos));
        recoveredData = datos;
    }
    const { placa, brand, year } = recoveredData;
    const backStep = async () => {
        history.push(MIS_DATOS);
    }
    const clickLoQuiero = async (payload) => {
        const { codRes } = await dispatch(actionRecordCoberturas(payload));
        if (codRes === "00") {
            history.push(CONFIRMACION_COMPRA);
        }
    }
    return (
        <div>
            <Breadcrumbs step="2" stepTotal="2" value={100} />
            <HeroArmaTuPlan placa={placa} brand={brand} year={year} backStep={backStep} />
            <FormCobertura clickLoQuiero={clickLoQuiero} />
        </div>
    )
}

export default ArmaTuPlan;