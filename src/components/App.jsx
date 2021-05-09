import React from 'react';
import ToolBar from './shared/tool-bar/ToolBar';
import Routes from "../router";
import './App.css'

function App() {
    return (
        <div className="app">
            <ToolBar />
            <Routes />
        </div>
    )
}

export default App;