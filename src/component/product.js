import React, {useState} from 'react';
// import {UsesState} from 'react'
export default function Product(props){
  
   

    return(

        <div className={'product'}>
          <div className={'add-element'}>
              <img className={'pro-image'} src={props.src} alt={props.alt}></img>
                  <div className={'like-button'}>         
                      <button>Like</button>
                      <button>Unlike</button>
                      <button>Comments</button>
                  </div> 
              </div>
            <div className={'info'}>
                <p className={'pro-title'}>{props.name}</p>    
                <h3>Price:{props.price}</h3>    
                <h3>Rating:{props.rate}</h3>  
            </div> 
            
            <div className={'num-button'}>
               <button onClick={props.increas}>+</button>
                   <span id='char'>{props.numchar}</span>
               <button onClick={props.decreas}>-</button>
            </div>

            <button className={'add-to-chart'} onClick={props.addingToChart}>Add to chart</button>  
        </div>
    
    )
}
