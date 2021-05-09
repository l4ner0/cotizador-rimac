import React from 'react';
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
        width: '25ch',
        marginTop: "10px",
        marginBottom: "10px",
        width: "100%"
    },
    label: {
        color: '#676F8F',
        fontSize: "10px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
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
        age: 10
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <form action="">
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
                >
                    <option aria-label="None" value="" />
                    <option value={10}>Ten</option>
                    <option value={20}>Twenty</option>
                    <option value={30}>Thirty</option>
                </Select>
            </FormControl>
            <TextField
                label="Nro. de doc"
                className={classes.textField}
                variant="outlined"
            />
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
                <Button className={classes.root} variant="contained" color="secondary" size="large" >
                    Cotízalo
                </Button>
            </div>
        </form>
    )
}

export default FormLogin;