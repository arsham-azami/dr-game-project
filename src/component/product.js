import React from 'react';

export default function Product(props){
    return(
        <div className={'product'}>
           <img src={props.src} alt={props.alt}></img>
            <div className={'info'}>
               <h3>{props.name}</h3>    
               <h3>{props.price}</h3>    
               <h3>{props.rate}</h3>    
            </div> 
        </div>
    )
}