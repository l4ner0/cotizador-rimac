import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/login/Login';
import MisDatos from './components/mis-datos/MisDatos';
import ArmaTuPlan from './components/arma-tu-plan/ArmaTuPlan';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/cotizador-rimac/" component={Login} />
            <Route exact path="/cotizador-rimac/mis-datos" component={MisDatos} />
            <Route exact path="/cotizador-rimac/arma-tu-plan" component={ArmaTuPlan} />
        </Switch>
    )
}

export default Routes;
