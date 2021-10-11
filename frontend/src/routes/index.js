import React from "react";
import { Route, Switch } from "react-router-dom";
import TransactionACS from "../pages/Transaction_ACS";

import TransactionSS from "../pages/Transaction_SS";

import Utilisateurs from "../pages/Utilisateurs";
import Dashboard from "../pages/Dashboard";

import TransactionC from "../pages/TransactionsPage/TranscationC";
import TransactionI from "../pages/TransactionsPage/TranscationI";
import TransactionR from "../pages/TransactionsPage/TranscationR";

const Routes = () => (

    <Switch>
        <Route path='/transactionacs' component={TransactionACS} exact />
        <Route path='/transactionss' component={TransactionSS} exact />
        <Route path='/utilisateurs' component={Utilisateurs} exact />
        <Route path='/' component={Dashboard} exact />

        <Route path='/transactions/transactioncf' component={TransactionC} exact />
        <Route path='/transactions/transactionif' component={TransactionI} exact />
        <Route path='/transactions/transactionrf' component={TransactionR} exact />
    </Switch>

);

export default Routes;