import React from 'react';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import HeroArmaTuPlan from '../shared/hero/hero-arma-tu-plan/HeroArmaTuPlan';
import FormCobertura from '../shared/form/form-cobertura/FormCobertura';

const ArmaTuPlan = () => {
    return(
        <div>          
           <Breadcrumbs step="2" stepTotal="2" value={100} />
           <HeroArmaTuPlan />
           <FormCobertura />
        </div>
    )
}

export default ArmaTuPlan;