import axios from 'axios';
const BASE_URL = 'http://localhost:3010';

export const apiQuoteInsurance = (payload) => axios.get(`${BASE_URL}/quoteInsurance`, payload);
export const apiVehicleYears = () => axios.get(`${BASE_URL}/vehicleYears`);
export const apiVehicleBrands = () => axios.get(`${BASE_URL}/vehicleBrands`);