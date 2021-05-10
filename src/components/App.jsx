import React from 'react';
import ToolBar from './shared/tool-bar/ToolBar';
import Footer from './shared/footer/Footer';
import Routes from "../router";
import './App.css'

function App() {
    return (
        <div className="app">
            <ToolBar />
            <Routes />
            <Footer />
        </div>
    )
}

export default App;