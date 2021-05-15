import axios from 'axios';
const BASE_URL = 'https://my-json-server.typicode.com/l4ner0/api-cotizador';

export const apiQuoteInsurance = (payload) => axios.get(`${BASE_URL}/quoteInsurance`, payload);
export const apiVehicleYears = () => axios.get(`${BASE_URL}/vehicleYears`);
export const apiVehicleBrands = () => axios.get(`${BASE_URL}/vehicleBrands`);
export const apiRecordData = () => axios.get(`${BASE_URL}/recordData`);
export const apiRecordCoberturas = () => axios.get(`${BASE_URL}/recordCoberturas`);