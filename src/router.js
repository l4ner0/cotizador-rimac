import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import MisDatos from './components/mis-datos/MisDatos';
import ArmaTuPlan from './components/arma-tu-plan/ArmaTuPlan';
import ConfirmacionCompra from './components/confirmacion-compra/ConfirmacionCompra';

export const LOGIN = '/cotizador-rimac';
export const MIS_DATOS = '/cotizador-rimac/mis-datos';
export const ARMA_TU_PLAN = '/cotizador-rimac/arma-tu-plan';
export const CONFIRMACION_COMPRA = '/cotizador-rimac/confirmacion-compra';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={MIS_DATOS} component={MisDatos} />
            <Route exact path={ARMA_TU_PLAN} component={ArmaTuPlan} />
            <Route exact path={CONFIRMACION_COMPRA} component={ConfirmacionCompra}/>
        </Switch>
    )
}

export default Routes;
