import React from 'react';

import Button from '../template/button';
import Card from '../template/card';

export default props => {

    const renderCards = () => {
        
        const list = props.list || [];
        return list.map(jogador => (
            // <Card Jogador={jogador}/>
            <div className='col-md-3'>
                <div className='card flip-container'>
                    <div className='flipper'>
                        <div className="front">
                            <img src={jogador.headshotImgUrl} alt='' className='img-circle'/>
                            <p className='title'>{jogador.firstName}</p>
                            <p>{jogador.lastName}</p>
                            <p><strong>Equipe: </strong>{jogador.club.name}</p>  
                            <p><strong>Liga: </strong>{jogador.league.name}</p>   
                            <p><strong>Nacionalidade: </strong>{jogador.nation.name}</p>                                  
                            <p><button>Detalhes</button></p>
                        </div>
                        <div className="back">
                            <p><strong>Posição: </strong>{jogador.position}</p>
                            <p><strong>Agilidade: </strong>{jogador.agility}</p>
                            <p><strong>Força do chute: </strong>{jogador.shotpower}</p>
                            <p><strong>Drible: </strong>{jogador.dribbling}</p>
                            <p><strong>Aceleração: </strong>{jogador.acceleration}</p>
                            <p><strong>Altura: </strong>{jogador.height}</p>
                            <p><strong>Reação: </strong>{jogador.reactions}</p>
                            <p><strong>Folego: </strong>{jogador.stamina}</p>
                            <p><strong>Visão: </strong>{jogador.vision}</p>
                            <p><strong>Impulsão: </strong>{jogador.jumping}</p>
                            <p><button onClick={() => props.handleAdd(jogador)}>Adicionar ao elenco</button></p>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className=''>
            {renderCards()}
        </div>
    )
}