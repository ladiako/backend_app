import React from 'react';
import './TransactionR_ACS.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ChartView from '../../../charts/chartView'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));



const TranscationsR_ACS = () => {

    const classes = useStyles();

    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className="selectItems">
            <div className="Ana">
                <form className="newSelectform">
                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="">Client</option>
                            <option value="CFG">CFG</option>
                            <option value="SGA">SGA</option>
                        </select>
                    </div>
                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="nombre">Nombre</option>
                            <option value="evolution">Evolution</option>
                        </select>
                    </div>

                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="">---</option>
                            <option value="autoritaion">Autoritaion</option>
                            <option value="transaction">Transaction</option>
                        </select>
                    </div>
                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="">All</option>
                            <option value="acquisition">Acquisition</option>
                            <option value="emission">Emission</option>
                        </select>
                    </div>
                    <br /><br /><br />
                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="">All</option>
                            <option value="gab">GAB</option>
                            <option value="tpe">TPE</option>
                            <option value="ecom">E-com</option>
                        </select>
                    </div>
                    <div className="newAfficheItems">
                        <select className="selectItems" name="active" id="active">
                            <option value="">All</option>
                            <option value="national">national</option>
                            <option value="international">international</option>
                        </select>
                    </div>
                    <div className="newAfficheItems">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="From"
                                type="date"
                                defaultValue="1998-01-01"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className="newAfficheItems">
                        <form className={classes.container} noValidate>
                            <TextField
                                id="date"
                                label="To"
                                type="date"
                                defaultValue="2021-08-10"
                                className={classes.textField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className="goBTN">
                        <button className="goButton">Afficher</button>
                    </div>
                        
                </form>
                <ChartView/>
            </div>
        </div>
    )
}
export default TranscationsR_ACS;

{
    /**
     * 
     * 
       <div className="newAfficheItems">
                    <select className="selectNationalite" name="active" id="active">
                        <option value="">Nationalite</option>
                        <option value="national">National</option>
                        <option value="international">International</option>
                    </select>
                </div>
     * 
     */
}