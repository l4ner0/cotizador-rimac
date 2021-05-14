import React from 'react';
import Breadcrumbs from '../shared/breadcrumbs/Breadcrumbs';
import HeroArmaTuPlan from '../shared/hero/hero-arma-tu-plan/HeroArmaTuPlan';

const ArmaTuPlan = () => {
    return(
        <div>          
           <Breadcrumbs step="2" stepTotal="2" value={100} />
           <HeroArmaTuPlan />
        </div>
    )
}

export default ArmaTuPlan;