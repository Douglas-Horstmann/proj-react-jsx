import React from 'react';

export default props => (
    <div className='row'>
        <div className='col-md-12'>
            <div role='form' className='jogadorForm'>           
                
                <div className='col-xs-12 col-sm-6 col-md-10'>
                    <input type='text' id='nome' className='form-control' placeholder='Digite o nome do jogador' value={props.nomeJogador} onChange={props.handleChange}/>
                </div>

                <div className='col-xs-12 col-sm-6 col-md-2'>
                    <button className='btn btn-primary' onClick={props.handleSearch}>
                        <i className='fa fa-search'></i>
                    </button>   
                </div>                
            </div>
        </div>
    </div>    
)