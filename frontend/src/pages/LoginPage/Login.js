import {
    Avatar, Grid, Paper, Button, TextField
} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './Login.css';
import React, { useCallback, useState } from "react";
import ErrorModel from "./ErrorModel";

import { useHistory } from "react-router-dom";
import axios from 'axios';


const Login = (props) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const [openErr, setOpenErr] = useState(false);
    const handleOpen = useCallback((test) => {
        if (test === false) {
            setOpenErr(true);
        }
    }, [setOpenErr]);
    const handleClose = useCallback(() => {
            setOpenErr(false);
    }, [setOpenErr]);
    const loginCallback = useCallback((data) => {
        axios({
            method: "POST",
            url: 'http://localhost:8080/utilisateur/login',
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then(res => {
            if (res.data === false) {
                handleOpen(false);
            } else {
                if(res.data.role==="ADMIN"){
                    sessionStorage.setItem('token', JSON.stringify(res.data));
                    history.push('/');
                    window.location.reload();
                }else{
                    handleOpen(false);
                }
            }
            setUsername(""); setPassword("");
        });
    }, [username, password]);

    function submitForm() {
        const data = {
            username: username,
            password: password
        }
        loginCallback(data);
    }

    return (
        <>
            <Grid>
                <Paper elevation={10} className="paperStyle">
                    <Grid align='center'>
                        <Avatar className="avatarStyle"><LockOutlinedIcon /></Avatar>
                        <h2>Authentification</h2>
                    </Grid>
                    <br />
                    <TextField label="Utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} variant="outlined" placeholder="Entrez l'utilisateur" fullWidth required /><br /><br />
                    <TextField label="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} variant="outlined" placeholder="Entrez le mot de passe" type="password" fullWidth required />

                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="souviens moi"
                    /><br /><br /><br />
                    <Button variant="contained" color="primary" fullWidth onClick={submitForm} >
                        Se connecter
                    </Button>
                </Paper>
            </Grid>
            {openErr && (<ErrorModel
                open={openErr}
                handleClose={handleClose}
            />
            )}
        </>
    )
}

export default Login