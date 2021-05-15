import React, { useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import BoxHelpMarca from '../../box/box-help-marca/BoxHelpMarca';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import './FormMisDatos.css';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '296px',
        height: '56px',
        borderRadius: '8px',
        backgroundColor: '#EF3340'
    }
}));

const GreenRadio = withStyles({
    root: {
        color: '#C5CBE0',
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio required color="default" {...props} />);

const FormMisDatos = (props) => {
    const { vehicleYearsList, vehicleBrandsList, minimumAmount, maximumAmount, submitContinue } = props;
    const classes = useStyles();
    const form = {
        year: '',
        brand: '',
        amount: maximumAmount,
        isGasVehicle: null
    };
    const [state, setState] = useState({ ...form });
    const handleInputChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    };
    const interval = 100;
    const increaseAmount = () => {
        const newAmount = state.amount + interval;
        setState({ ...state, amount: newAmount });
    }
    const decreaseAmount = () => {
        const newAmount = state.amount - interval;
        setState({ ...state, amount: newAmount });
    }
    const handleSubmit = (event) => {
        submitContinue(state);        
        event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit} className="form-mis-datos">
            <FormControl variant="outlined" className="form-mis-datos__input">
                <InputLabel id="demo-customized-select-label">Año</InputLabel>
                <Select
                    required
                    native
                    value={state.year}
                    onChange={handleInputChange}
                    label="Año"
                    inputProps={{
                        name: 'year',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        vehicleYearsList ? vehicleYearsList.map(year => <option key={year} value={year}>{year}</option>) : null
                    }

                </Select>
            </FormControl>
            <FormControl variant="outlined" className="form-mis-datos__input">
                <InputLabel id="demo-customized-select-label">Marca</InputLabel>
                <Select
                    required
                    native
                    value={state.brand}
                    onChange={handleInputChange}
                    label="marca"
                    inputProps={{
                        name: 'brand',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    {
                        vehicleBrandsList ? vehicleBrandsList.map(brand => <option key={brand.id} value={brand.name}>{brand.name}</option>) : null
                    }

                </Select>
            </FormControl>
            <BoxHelpMarca />
            <div>
                <p className="form-mis-datos__label">¿Tu auto es a gas?</p>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="isGasVehicle" defaultValue="top" onChange={handleInputChange}>
                        <FormControlLabel className="form-mis-datos__label" value="female" control={<GreenRadio value="true" />} label="Sí" />
                        <FormControlLabel className="form-mis-datos__label" value="female" control={<GreenRadio value="false" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="form-mis-datos__monto">
                <p className="form-mis-datos__label">Indica la suma asegurada</p>
                <div className="monto__rango">
                    <span className="monto__rango-min">MIN ${minimumAmount}</span>
                    <span className="monto__rango-max">MAX ${maximumAmount}</span>
                </div>
                <div className="monto__input">
                    <span className="monto__input-action" onClick={decreaseAmount}><RemoveIcon style={{ color: '#6F7DFF' }} /></span>
                    <input className="monto__input-text" name="amount" required type="text" value={state.amount} onChange={handleInputChange} />
                    <span className="monto__input-action" onClick={increaseAmount}><AddIcon style={{ color: '#6F7DFF' }} /></span>
                </div>
            </div>
            <div className="form-button">
                <Button className={classes.root} type="submit" variant="contained" color="secondary" size="large" >
                    Continuar
                </Button>
            </div>
        </form>
    )
}

export default FormMisDatos;