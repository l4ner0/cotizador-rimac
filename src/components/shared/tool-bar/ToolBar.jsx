import React from 'react';
import './ToolBar.css'

const ToolBar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar__logo">
                <img width="92" height="16" src="https://i.postimg.cc/1V668vB5/logo-rimac.png" alt="logo"/> 
            </div>
            <div className="toolbar__option">
                <img className="option__img" width="15" src="https://i.postimg.cc/Bt127v39/ic-phone.png" alt="telefono" />
                <span className="option__text">Llámanos</span>
            </div>
        </div>
    )
}

export default ToolBar;