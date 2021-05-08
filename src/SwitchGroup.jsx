import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchGroup(props) {
    const [state, setState] = React.useState({
        gilad: true,
        jason: false,
        antoine: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const { label } = props;
    return (
        <FormControlLabel
            control={<Switch checked={state.gilad} onChange={handleChange} name="gilad" />}
            label={label}
        />
    );
}