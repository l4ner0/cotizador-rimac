import { apiQuoteInsurance, apiVehicleYears, apiVehicleBrands } from '../apis/cotizador';

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
    vehicleBrandsList: [],
}
const SET_DATOS = 'SET_DATOS';
const SET_VEHICLE_YEARS_LIST = 'SET_VEHICLE_YEARS_LIST';
const SET_VEHICLE_BRANDS_LIST = 'SET_VEHICLE_BRANDS_LIST';

// REDUCER

export default function cotizadorReducer(state = dataInicial, action) {
    switch (action.type) {
        case SET_DATOS:
            return { ...state, datos: action.payload };
        case SET_VEHICLE_YEARS_LIST:
            return { ...state, vehicleYearsList: action.payload };
        case SET_VEHICLE_BRANDS_LIST:
            return { ...state, vehicleBrandsList: action.payload };
        default:
            return state;
    }
}

// ACCIONES
export const actionQuoteInsurance = (payload) => async (dispatch, getState) => {
    const { data: responseApiQuoteInsurance } = await apiQuoteInsurance(payload);
    dispatch({
        type: SET_DATOS,
        payload: { ...responseApiQuoteInsurance.response, ...payload }
    });
    return responseApiQuoteInsurance
}

export const actionVehicleYears = () => async (dispatch, getState) => {
    const { data: responseApiVehicleYears } = await apiVehicleYears();
    dispatch({
        type: SET_VEHICLE_YEARS_LIST,
        payload: responseApiVehicleYears.response
    });
    return responseApiVehicleYears
}

export const actionVehicleBrands = () => async (dispatch, getState) => {
    const { data: responseApiVehicleBrands } = await apiVehicleBrands();
    dispatch({
        type: SET_VEHICLE_BRANDS_LIST,
        payload: responseApiVehicleBrands.response
    });
    return responseApiVehicleBrands
}

/* export const actionRecordData = (payload) => (dispatch, getState) => {

} */