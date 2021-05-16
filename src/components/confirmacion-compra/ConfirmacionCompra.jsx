import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './ConfirmacionCompra.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '56px',
        borderRadius: '8px',
        backgroundColor: '#EF3340'
    }
}));

const ConfirmacionCompra = () => {
    const classes = useStyles();
    return (
        <div className="confirma-compra">
            <div className="confirma-compra__banner">
                <img className="confirma-compra__banner-img" src="https://i.postimg.cc/hjVTMnVC/banner-final.png" alt="banner-final" />
            </div>
            <div className="confirma-compra__content">
                <p className="content__title content__title--subtitle">¡Te damos la bienvenida!</p>
                <p className="content__title">Cuenta con nosotros para proteger tu vehículo</p>
                <p className="content__text">Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: joel.sanchez@gmail.com</p>
                <Button href="https://www.rimac.com/" variant="contained" color="secondary" size="large" className={classes.root} >
                    Cómo usar mi seguro
                </Button>
            </div>
        </div>
    )
}

export default ConfirmacionCompra;