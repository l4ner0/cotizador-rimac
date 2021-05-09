import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import './FormLogin.css'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '296px',
        height: '56px',
        borderRadius: '8px',
        backgroundColor: '#EF3340'
    },
    textField: {
        marginTop: "10px",
        marginBottom: "10px",
        width: "100%"
    },
    label: {
        color: '#676F8F',
        fontSize: "10px"
    },
    formControl: {
        minWidth: '96px',
    },
}));

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FormLogin = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        term: true,
        age: 1
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <form action="">
            <div className="form-documento">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        native
                        value={state.age}
                        onChange={handleChange}
                        label="Age"
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }}
                        className="form-documento__select"
                    >
                        <option aria-label="None" value="" />
                        <option value={1}>DNI</option>
                        <option value={2}>CE</option>
                        <option value={3}>RUC</option>
                    </Select>
                </FormControl>
                <TextField
                    label="Nro. de doc"
                    className="form-documento__text"
                    variant="outlined"
                />
            </div>
            <TextField
                label="Celular"
                className={classes.textField}
                variant="outlined"
            />
            <TextField
                label="Placa"
                className={classes.textField}
                variant="outlined"
            />
            <FormGroup row className="form-check">
                <FormControlLabel
                    className={classes.label}
                    control={<GreenCheckbox checked={state.term} onChange={handleChange} name="term" />}
                    label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones"
                />
            </FormGroup>
            <div className="form-button">
                <Link to="/mis-datos">
                    <Button className={classes.root} variant="contained" color="secondary" size="large" >
                        Cotízalo
                    </Button>
                </Link>
            </div>
        </form>
    )
}

export default FormLogin;