import React, { Component } from 'react';
import axios from 'axios';

import JogadorForm from './jogadorForm';
import JogadorList from './jogadorList';

// http://www.easports.com/fifa/ultimate-team/api/fut/item?jsonParamObject={"country":"france"}
const URL = 'http://www.easports.com/fifa/ultimate-team/api/fut/item?';

export default class Jogador extends Component{
    constructor(props){
        super(props);
        this.state = { nomeJogador: '', listElenco: [], list: []}

        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        
        this.handleSearch();
    }

    handleSearch(){
        const nome = this.state.nomeJogador;
        console.log(nome);
        console.log(this.state.list);
        axios.get(`${URL}jsonParamObject={"name":"${nome}"}`)
        .then(resp => this.setState({...this.state, list: resp.data.items}));
    }

    handleChange(e){
        this.setState({...this.state, nomeJogador: e.target.value});
    }

    handleAdd(jogador){
        console.log(jogador);
        let player = {
            "firstName": jogador.firstName,
            "lastName": jogador.lastName,
            "club": jogador.club.name,
            "league": jogador.league.name,
            "nation": jogador.nation.name,
            "position": jogador.position,
            "agility": jogador.agility,
            "shotpower": jogador.shotpower,
            "dribbling": jogador.dribbling,
            "height": jogador.height,
            "reactions": jogador.reactions,
            "stamina": jogador.stamina,
            "vision": jogador.vision,
            "jumping": jogador.jumping
        }
        
        let listElencoAux = JSON.parse(localStorage.getItem('MeuElenco'));
        if(listElencoAux === null){
            console.log('List elenco is null');
            listElencoAux = [];
            listElencoAux.push(player);
        }            
        else
            listElencoAux.push(player);
                
        localStorage.setItem('MeuElenco', JSON.stringify(listElencoAux));

        this.setState({...this.state, listElenco: listElencoAux});

        console.log('Dados salvos no storage');
    }

    render(){
        return (
            <div className='row'>
                <div className='col-md-12'>
                    <JogadorForm nomeJogador={this.state.nomeJogador} handleChange={this.handleChange} handleSearch={this.handleSearch} />
                    <JogadorList handleAdd={this.handleAdd} list={this.state.list}/>  
                </div>
            </div>
        )
    }
}