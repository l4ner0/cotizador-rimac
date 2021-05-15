import React, { useState } from 'react';
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

const FormLogin = (props) => {
    const { documentList, submitCotizalo } = props;
    const classes = useStyles();
    const form = {
        term: false,
        documentType: 1,
        documento: '',
        celular: '',
        placa: ''
    }
    const [state, setState] = useState({ ...form, loading: false });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleInputChange = (event) => {
        setState({ ...state, [event.target.name]: (event.target.value).toUpperCase() });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setState({ ...state, loading: true });
        await submitCotizalo(state);
        setState({ ...form, loading: false });

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-documento">
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        required
                        native
                        value={state.documentType}
                        onChange={handleChange}
                        inputProps={{
                            name: 'documentType',
                            id: 'outlined-age-native-simple',
                        }}
                        className="form-documento__select"
                    >
                        {
                            documentList.map(document =>
                                <option key={document.id} value={document.id}>{document.name}</option>
                            )
                        }
                    </Select>
                </FormControl>
                <TextField
                    required
                    label="Nro. de doc"
                    className="form-documento__text"
                    variant="outlined"
                    name="documento"
                    value={state.documento}
                    onChange={handleInputChange}
                />
            </div>
            <TextField
                required

                label="Celular"
                className={classes.textField}
                variant="outlined"
                name="celular"
                value={state.celular}
                onChange={handleInputChange}
            />
            <TextField
                required
                label="Placa"
                className={classes.textField}
                variant="outlined"
                name="placa"
                value={state.placa}
                onChange={handleInputChange}
            />
            <FormGroup row className="form-check">
                <FormControlLabel
                    className={classes.label}
                    control={<GreenCheckbox checked={state.term} onChange={handleChange} name="term" required />}
                    label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones"
                    name="terms"
                />
            </FormGroup>
            <div className="form-button">
                <Button type="submit" className={classes.root} variant="contained" color="secondary" size="large" disabled={state.loading} >
                    {state.loading ? 'Cotizando...' : 'Cotízalo'}
                </Button>
            </div>
        </form>
    )
}

export default FormLogin;