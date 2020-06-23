import React from 'react';

export default function Product(props){
    return(
        <div className={'product'}>
           <img src={props.src} alt={props.alt}></img>
            <div className={'info'}>
                <h3>Name:{props.name}</h3>    
                <h3>Price:{props.price}</h3>    
                <h3>Rating:{props.rate}</h3>  
            </div> 
            <button className={'add-to-chart'}>Add to chart</button>  
        </div>
    )
}