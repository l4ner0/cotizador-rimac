import React from 'react';
import ToolBar from './shared/tool-bar/ToolBar';
import Footer from './shared/footer/Footer';
import Routes from "../router";
import { Provider } from 'react-redux'
import generateStore from '../redux/store'
import './App.css'

function App() {
    const store = generateStore()
    return (
        <Provider store={store}>
            <ToolBar />
            <Routes />
            <Footer />
        </Provider>
    )
}

export default App;