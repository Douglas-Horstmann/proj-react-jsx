import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Jogador from '../jogador/jogador';
import Elenco from '../elenco/elenco';

export default props => (
    <Router history={hashHistory}>
        <Route path='/jogador' component={Jogador}/>
        <Route path='/elenco' component={Elenco}/>
        <Route from='*' to='/outros' />
    </Router>
)