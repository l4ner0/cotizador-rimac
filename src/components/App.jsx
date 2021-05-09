import React from 'react';
import ToolBar from './shared/tool-bar/ToolBar'
import Login from './login/Login'
import './App.css'

function App () {
    return (
        <div className="app">
            <ToolBar />
            <Login />
        </div>
    )
}

export default App;