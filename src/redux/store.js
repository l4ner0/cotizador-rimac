import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import loginReducer from './loginDucks';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    cotizadorRimac: loginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    return store;
}