import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';
import './Breadcrumbs.css'

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: '6px',
        borderRadius: '20px',
        minWidth: '100px',
    },
    colorPrimary: {
        backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
        borderRadius: '20px',
        backgroundColor: '#6F7DFF',
    },
}))(LinearProgress);

const Breadcrumbs = (props) => {
    const { step, stepTotal, value } = props;
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__previous">
                <img width="24" src="https://i.postimg.cc/ZBW6SbyN/ellipse.png" alt="atras" />
            </div>
            <div className="breadcrumbs__text">Paso {step} de {stepTotal}</div>
            <div className="breadcrumbs__progress">
                <BorderLinearProgress variant="determinate" value={value} />
            </div>
        </div>
    )
}

export default Breadcrumbs;