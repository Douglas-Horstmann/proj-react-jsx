import React from 'react';

export default props => {

    const renderCards = () => {
        
        const list = props.list || [];
        return list.map(jogador => (
            <div className='col-md-2'>
            <div className='panel panel-default'>
                <div className='panel-heading'>
                    <img src={jogador.headshotImgUrl} alt='...' className='img-circle'/>    
                </div>
                <div className='panel-body'>
                   <p><strong>{jogador.firstName}</strong></p>
                   <div className='col-md-6'>
                        <button className='btn btn-primary'><i className='fa fa-plus'></i></button>
                   </div>
                   <div className='col-md-6'>
                    <a href='#/jogadorDetalhes' className='btn btn-success'><i className='fa fa-info-circle'></i></a>
                   </div>
                </div>
            </div>
            </div>
        ))
    }

    return (
        <div>
            {renderCards()}
        </div>
    )
}