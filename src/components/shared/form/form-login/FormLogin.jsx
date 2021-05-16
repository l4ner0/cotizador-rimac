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
import FormHelperText from '@material-ui/core/FormHelperText';
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
        documentType: 1,
        documento: '',
        celular: '',
        placa: '',
        term: true
    }
    const [state, setState] = useState({
        ...form,
        loading: false,
        errors: {
            placa: {
                isValid: true,
                msgError: ''
            },
            documento: {
                isValid: true,
                msgError: ''
            },
            celular: {
                isValid: true,
                msgError: ''
            },
            term: {
                isValid: true,
                msgError: ''
            }
        }
    });


    const numericalValidation = (value, length) => {
        let regexNumero = `^[0-9]{${length}}$`;
        regexNumero = new RegExp(regexNumero);
        return regexNumero.test(value);
    }

    const placaValidation = (value) => {
        const regexPlaca = /^([a-zA-Z][A-Za-z0-9][A-Za-z0-9][0-9][0-9][0-9])$/;
        return regexPlaca.test(value);
    }

    const validateInput = (name, value) => {
        switch (name) {
            case 'documento':
                const validateDocumento = numericalValidation(value, 8);
                const errorDocumento = {
                    ...state.errors,
                    documento: {
                        isValid: validateDocumento,
                        msgError: !validateDocumento ? 'Ingrese un Nro. de doc válido.' : ''
                    }
                }
                return errorDocumento;
            case 'celular':
                const validateCelular = numericalValidation(value, 9);
                const errorCelular = {
                    ...state.errors,
                    celular: {
                        isValid: validateCelular,
                        msgError: !validateCelular ? 'Ingrese un celular válido.' : ''
                    }
                }
                return errorCelular;
            case 'placa':
                const validatePlaca = placaValidation(value);
                const errorPlaca = {
                    ...state.errors,
                    placa: {
                        isValid: validatePlaca,
                        msgError: !validatePlaca ? 'Ingrese una placa válida.' : ''
                    }
                }
                return errorPlaca;
            case 'term':
                const errorTerm = {
                    ...state.errors,
                    term: {
                        isValid: value,
                        msgError: !value ? 'Debe aceptar los términos y condiciones' : ''
                    }
                }
                return errorTerm;
            default:
                return state.errors
        }
    }

    const validateSubmit = () => {
        console.log("validateSubmit")
        let errors = { ...state.errors, };
        if (state.documento === '') {
            errors = {
                ...errors,
                documento: {
                    isValid: false,
                    msgError: 'El campo Nro. de doc es obligatorio.'
                }
            }
        }
        if (state.celular === '') {
            errors = {
                ...errors,
                celular: {
                    isValid: false,
                    msgError: 'El campo Celular es obligatorio.'
                }
            }
        }
        if (state.placa === '') {
            errors = {
                ...errors,
                placa: {
                    isValid: false,
                    msgError: 'El campo Placa es obligatorio.'
                }
            }
        }
        const isValidate = errors.documento.isValid && errors.celular.isValid && errors.placa.isValid && errors.term.isValid ? true : false;
        console.log("errors: ", errors)
        setState({ ...state, errors });
        return isValidate;
    }

    const handleChange = (event) => {
        const errrosValidate = validateInput(event.target.name, event.target.checked);
        setState({ ...state, [event.target.name]: event.target.checked, errors: errrosValidate });
    };

    const handleInputChange = (event) => {
        const errrosValidate = validateInput(event.target.name, event.target.value);
        setState({
            ...state,
            [event.target.name]: (event.target.value).toUpperCase(),
            errors: errrosValidate
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const isValidForm = validateSubmit();
        if (isValidForm) {
            setState({ ...state, loading: true });
            await submitCotizalo(state);
            setState({ ...form, loading: false });
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <FormControl error={!state.errors.documento.isValid} style={{ width: "100%" }} >
                <div className="form-documento">
                    <FormControl variant="outlined" className={classes.formControl} error={!state.errors.documento.isValid}>
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
                        error={!state.errors.documento.isValid}
                        label="Nro. de doc"
                        className="form-documento__text"
                        variant="outlined"
                        name="documento"
                        value={state.documento}
                        onChange={handleInputChange}
                    />
                </div>
                <FormHelperText>{state.errors.documento.msgError}</FormHelperText>
            </FormControl>
            <TextField
                error={!state.errors.celular.isValid}
                label="Celular"
                className={classes.textField}
                variant="outlined"
                name="celular"
                helperText={state.errors.celular.msgError}
                value={state.celular}
                onChange={handleInputChange}
            />
            <TextField
                error={!state.errors.placa.isValid}
                label="Placa"
                className={classes.textField}
                variant="outlined"
                name="placa"
                helperText={state.errors.placa.msgError}
                value={state.placa}
                onChange={handleInputChange}
            />
            <FormControl error={!state.errors.term.isValid}>
                <FormGroup row className="form-check">
                    <FormControlLabel
                        className={classes.label}
                        control={<GreenCheckbox checked={state.term} onChange={handleChange} name="term" />}
                        label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones"
                        name="terms"
                    />
                    <FormHelperText>{state.errors.term.msgError}</FormHelperText>
                </FormGroup>
            </FormControl>
            <div className="form-button">
                <Button type="submit" className={classes.root} variant="contained" color="secondary" size="large" disabled={state.loading} >
                    {state.loading ? 'Cotizando...' : 'Cotízalo'}
                </Button>
            </div>
        </form>
    )
}

export default FormLogin;