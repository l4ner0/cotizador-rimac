import React from 'react';
import './ToolBar.css'

const ToolBar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__logo">
                <img src={`/assets/img/logo-rimac.svg`} alt="logo"/> 
            </div>
            <div className="toolbar__option">
                <img className="option__img" src={`/assets/img/ic_phone.png`} alt="telefono" />
                <span className="option__text">Llámanos</span>
            </div>
        </div>
    )
}

export default ToolBar;