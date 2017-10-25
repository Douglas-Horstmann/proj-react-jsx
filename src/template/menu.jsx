import React from 'react';

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-desktop'></i> App
                </a>
            </div>

            <div id='navbar' className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/jogador'>Jogadores</a></li>
                    <li><a href='#/elenco'>Meu Elenco</a></li>
                </ul>
            </div>
        </div>
    </nav>
)