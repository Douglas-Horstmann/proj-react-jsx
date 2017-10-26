import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Jogador from '../jogador/jogador';
import JogadorDetalhes from '../jogadorDetalhes/jogadorDetalhes';

export default props => (
    <Router history={hashHistory}>
        <Route path='/jogador' component={Jogador}/>
        <Route path='/details' component={JogadorDetalhes}/>
        <Route from='*' to='/outros' />
    </Router>
)