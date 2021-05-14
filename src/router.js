import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import MisDatos from './components/mis-datos/MisDatos';
import ArmaTuPlan from './components/arma-tu-plan/ArmaTuPlan';

export const LOGIN = '/cotizador-rimac';
export const MIS_DATOS = '/cotizador-rimac/mis-datos';
export const ARMA_TU_PLAN = '/cotizador-rimac/arma-tu-plan';

const Routes = () => {
    return (
        <Switch>
            <Route exact path={LOGIN} component={Login} />
            <Route exact path={MIS_DATOS} component={MisDatos} />
            <Route exact path={ARMA_TU_PLAN} component={ArmaTuPlan} />
        </Switch>
    )
}

export default Routes;
