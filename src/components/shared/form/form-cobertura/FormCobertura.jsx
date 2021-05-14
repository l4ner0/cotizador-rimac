import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Accordion, AccordionSummary, AccordionDetails, Switch, withStyles, Button } from '@material-ui/core';
import './FormCobertura.css';

const IOSSwitch = withStyles((theme) => ({
    root: {
        width: 42,
        height: 26,
        padding: 0,
        margin: theme.spacing(1),
    },
    switchBase: {
        padding: 1,
        '&$checked': {
            transform: 'translateX(16px)',
            color: theme.palette.common.white,
            '& + $track': {
                backgroundColor: '#52d869',
                opacity: 1,
                border: 'none',
            },
        },
        '&$focusVisible $thumb': {
            color: '#52d869',
            border: '6px solid #fff',
        },
    },
    thumb: {
        width: 24,
        height: 24,
    },
    track: {
        borderRadius: 26 / 2,
        border: `1px solid ${theme.palette.grey[400]}`,
        backgroundColor: theme.palette.grey[50],
        opacity: 1,
        transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
}))(({ classes, ...props }) => {
    return (
        <Switch
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
                root: classes.root,
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
            }}
            {...props}
        />
    );
});

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    wrapper: {
        fontSize: '10px'
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

const FormCobertura = () => {
    const classes = useStyles();
    const [state, setState] = useState({
        tab: 0,
        checkedA: false,
        checkedB: false,
        checkedC: false,
        checkedD: false,
        checkedE: false,
        checkedF: false,
    });
    const handleTabChange = (event, value) => {
        setState({ tab: value });
    };
    const handleCheckChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    const [expanded, setExpanded] = useState('panel1');
    const handleAcordionChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <div className="form-cobertura">
            <p className="form-cobertura__title">Agregar o quita coberturas </p>
            <div className={classes.root}>
                <Tabs
                    value={state.tab}
                    indicatorColor="secondary"
                    textColor="secondary"
                    onChange={handleTabChange}
                    aria-label="disabled tabs example"
                    variant="scrollable"

                >
                    <Tab name="tab" className={classes.wrapper} label="Protege a tu auto" />
                    <Tab name="tab" className={classes.wrapper} label="Protege a los que te rodean" />
                    <Tab name="tab" className={classes.wrapper} label="Mejora tu plan" />
                </Tabs>
                <TabPanel value={state.tab} index={0}>
                    <div className="tab-cobertura">
                        <div className="tab-cobertura__img">
                            <img src="https://i.postimg.cc/XNkCnKCT/icon-theft.png" width="40" alt="icon-theft" />
                        </div>
                        <div className="tab-cobertura_content">
                            <Accordion expanded={expanded === 'panel1'} onChange={handleAcordionChange('panel1')}>
                                <div className="tab-cobertura_content-title">
                                    <div>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <div>
                                                <p>Llanta robada</p>
                                                <p className="tab-cobertura_content-title--small">Ver más</p>
                                            </div>
                                        </AccordionSummary>
                                    </div>
                                    <div>
                                        <IOSSwitch checked={state.checkedA} onChange={handleCheckChange} name="checkedA" />
                                    </div>
                                </div>
                                <AccordionDetails>
                                    <p className="tab-cobertura_content-text">He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="tab-cobertura">
                        <div className="tab-cobertura__img">
                            <img src="https://i.postimg.cc/kDXmFPMP/icon-damage.png" width="40" alt="icon-theft" />
                        </div>
                        <div className="tab-cobertura_content">
                            <Accordion expanded={expanded === 'panel2'} onChange={handleAcordionChange('panel2')}>
                                <div className="tab-cobertura_content-title">
                                    <div>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <div>
                                                <p>Llanta robada</p>
                                                <p className="tab-cobertura_content-title--small">Ver más</p>
                                            </div>
                                        </AccordionSummary>
                                    </div>
                                    <div>
                                        <IOSSwitch checked={state.checkedB} onChange={handleCheckChange} name="checkedB" />
                                    </div>
                                </div>
                                <AccordionDetails>
                                    <p className="tab-cobertura_content-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa at aut inventore dignissimos suscipit vero enim, iusto tempora nisi velit eaque ex placeat ea omnis, necessitatibus dolorum quibusdam. Fugit, eius!</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                    <div className="tab-cobertura">
                        <div className="tab-cobertura__img">
                            <img src="https://i.postimg.cc/V5GcKZ5r/icon-perdidatotal.png" width="40" alt="icon-theft" />
                        </div>
                        <div className="tab-cobertura_content">
                            <Accordion expanded={expanded === 'panel3'} onChange={handleAcordionChange('panel3')}>
                                <div className="tab-cobertura_content-title">
                                    <div>
                                        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                                            <div>
                                                <p>Llanta robada</p>
                                                <p className="tab-cobertura_content-title--small">Ver más</p>
                                            </div>
                                        </AccordionSummary>
                                    </div>
                                    <div>
                                        <IOSSwitch checked={state.checkedC} onChange={handleCheckChange} name="checkedC" />
                                    </div>
                                </div>
                                <AccordionDetails>
                                    <p className="tab-cobertura_content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ad repudiandae rerum officia fugiat. Veniam, debitis rem harum, quidem doloremque consectetur aliquam in mollitia laborum enim, excepturi explicabo accusantium dignissimos?</p>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={state.tab} index={1}>
                </TabPanel>
                <TabPanel value={state.tab} index={2}>
                </TabPanel>
            </div>
            <div className="form-cobertura__footer">
                <div className="footer__monto">
                    <p className="footer__monto--primary">$35.00</p>
                    <span className="footer__monto--secondary">Mensual</span>
                </div>
                <div>
                    <Button variant="contained" color="secondary" size="large" >
                        Lo quiero
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FormCobertura;