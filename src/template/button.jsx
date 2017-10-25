import React from 'react';

export default props => {

    const renderButton = () => {
        switch(props.tipo.toUpperCase())
        {
            case "WARNING":
               return(
                  <button className='btn btn-warning'><i className={props.icone}></i></button> 
               )

            case "INFO":
               return (
                   <button className='btn btn-info'><i className={props.icone}></i></button>
               )

            case "PRIMARY":
                 return (
                   <button className='btn btn-primary'><i className={props.icone}></i></button>
               )

            case "DEFAULT":
                return (
                     <button className='btn btn-default'><i className={props.icone}></i></button>
                )

            case "SUCCESS":
                return (
                     <button className='btn btn-success'><i className={props.icone}></i></button>
                )

            default: 
                throw new Error('Tipo de button não encontrado.');
        }
    }

    return (
        renderButton()
    )
} 