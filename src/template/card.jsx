import React from 'react';

export default props => (
    <div className='col-md-3'>
                <div className='card flip-container'>
                    <div className='flipper'>
                        <div className="front">
                            <img src={props.jogador.headshotImgUrl} alt='' className='img-circle'/>
                            <p className='title'>{jogador.firstName}</p>
                            <p>{props.jogador.lastName}</p>
                            <p><strong>Equipe: </strong>{props.jogador.club.name}</p>  
                            <p><strong>Liga: </strong>{props.jogador.league.name}</p>   
                            <p><strong>Nacionalidade: </strong>{props.jogador.nation.name}</p>                                  
                            <p><button>Detalhes</button></p>
                        </div>
                        <div className="back">
                            <p><strong>Posição: </strong>{props.jogador.position}</p>
                            <p><strong>Agilidade: </strong>{props.jogador.agility}</p>
                            <p><strong>Força do chute: </strong>{props.jogador.shotpower}</p>
                            <p><strong>Drible: </strong>{props.jogador.dribbling}</p>
                            <p><strong>Aceleração: </strong>{props.jogador.acceleration}</p>
                            <p><strong>Altura: </strong>{props.jogador.height}</p>
                            <p><strong>Reação: </strong>{props.jogador.reactions}</p>
                            <p><strong>Folego: </strong>{props.jogador.stamina}</p>
                            <p><strong>Visão: </strong>{props.jogador.vision}</p>
                            <p><strong>Impulsão: </strong>{props.jogador.jumping}</p>
                            <p><button onClick={() => props.handleAdd(props.jogador)}>Adicionar ao elenco</button></p>
                        </div>
                    </div>
                </div>
    </div>
)