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

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs">
            <div className="breadcrumbs__previous">
                <img src={`/assets/img/ellipse.svg`} alt=""/>
            </div>
            <div className="breadcrumbs__text">Paso 1 de 2</div>
            <div className="breadcrumbs__progress">
                <BorderLinearProgress variant="determinate" value={50} />
            </div>
        </div>
    )
}

export default Breadcrumbs;