import axios from 'axios';

// CONSTANTES
const dataInicial = {
    documentList: [
        {
            id: 1,
            name: 'DNI'
        },
        {
            id: 2,
            name: 'CE'
        },
        {
            id: 3,
            name: 'RUC'
        }
    ],
    datos: {},
    vehicleYearsList: [],
    vehicleBrandsList: {},
}
const SET_DATOS = 'SET_DATOS';

// REDUCER

export default function loginReducer(state = dataInicial, action) {
    console.log("loginReducer")
    switch (action.type) {
        case SET_DATOS:
            console.log("SET_DATOS")
            return { ...state, datos: action.payload };
        default:
            return state;
    }
}

// ACCIONES
export const actionQuoteInsurance = (payload) => async (dispatch, getState) => {
    console.log("actionQuoteInsurance: ", payload);
    const responseQuoteInsurance = {
        codRes: "00",
        response:{
            nombre: 'Diego',
            vehicleYear: 2019,
            vehicleBrand: 1,
            minimumAmount: 12500,
            maximumAmount: 16500
        }
        
    }
    dispatch({
        type: SET_DATOS,
        payload: responseQuoteInsurance.response
    });
    return responseQuoteInsurance
}