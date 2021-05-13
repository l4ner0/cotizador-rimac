import React from 'react';
import './ToolBar.css'
import logo from '../../../assets/img/logo-rimac.svg';
import phone from '../../../assets/img/ic_phone.png';

const ToolBar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__logo">
                <img src={logo} alt="logo"/> 
            </div>
            <div className="toolbar__option">
                <img className="option__img" src={phone} alt="telefono" />
                <span className="option__text">Llámanos</span>
            </div>
        </div>
    )
}

export default ToolBar;