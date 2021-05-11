import React from 'react';
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
})((props) => <Radio color="default" {...props} />);

const FormMisDatos = () => {
    const classes = useStyles();
    const [state] = React.useState({
        year: 2021,
        marca: 1
    });
    return (
        <form action="" className="form-mis-datos">
            <FormControl variant="outlined" className="form-mis-datos__input">
                <InputLabel id="demo-customized-select-label">Año</InputLabel>
                <Select
                    native
                    value={state.year}
                    label="year"
                    inputProps={{
                        name: 'year',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={2021}>2021</option>
                    <option value={2020}>2020</option>
                    <option value={2019}>2019</option>
                </Select>
            </FormControl>
            <FormControl variant="outlined" className="form-mis-datos__input">
                <InputLabel id="demo-customized-select-label">Marca</InputLabel>
                <Select
                    native
                    value={state.marca}
                    label="marca"
                    inputProps={{
                        name: 'marca',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    <option aria-label="None" value="" />
                    <option value={1}>Wolkswagen</option>
                </Select>
            </FormControl>
            <BoxHelpMarca />
            <div>
                <p className="form-mis-datos__label">¿Tu auto es a gas?</p>
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel className="form-mis-datos__label" value="female" control={<GreenRadio value="si" />} label="Sí" />
                        <FormControlLabel className="form-mis-datos__label" value="female" control={<GreenRadio value="no" />} label="No" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div className="form-mis-datos__monto">
                <p className="form-mis-datos__label">Indica la suma asegurada</p>
                <div className="monto__rango">
                    <span className="monto__rango-min">MIN $12.500</span>
                    <span className="monto__rango-max">MAX $16,500</span>
                </div>
                <div className="monto__input">
                    <span className="monto__input-action"><RemoveIcon style={{ color: '#6F7DFF' }} /></span>
                    <input className="monto__input-text" type="text" />
                    <span className="monto__input-action"><AddIcon style={{ color: '#6F7DFF' }} /></span>
                </div>
            </div>
            <div className="form-button">
                <Button className={classes.root} variant="contained" color="secondary" size="large" >
                    Continuar
                </Button>
            </div>
        </form>
    )
}

export default FormMisDatos;