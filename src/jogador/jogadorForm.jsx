import React from 'react';

export default props => (
    <div>
        <div role='form' className='jogadorForm'>           

            <div className='col-xs-12 col-sm-3 col-md-2'>
                <input type='text' className='form-control' placeholder='Nacionalidade'/>   
            </div>

            <div className='col-xs-12 col-sm-6 col-md-8'>
                <input type='text' id='nome' className='form-control' placeholder='Pesquisa' value={props.nomeJogador} onChange={props.handleChange}/>
            </div>

            <div className='col-xs-12 col-sm-3 col-md-2'>
                <button className='btn btn-primary' onClick={props.handleSearch}>
                    <i className='fa fa-search'></i>
                </button>    
            </div>

        </div>
    </div>    
)