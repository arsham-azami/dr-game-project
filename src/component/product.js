import React, {useState} from 'react';
// import {UsesState} from 'react'
export default function Product(props){
  
    let[numchar, setnumchar]=useState(0)

    const addinToChart =()=>{
        alert('added to chart')
     }

    const incraesing =()=>{
        setnumchar(numchar=numchar+1)
    }
    
    const decreasing =()=>{
        setnumchar(numchar=numchar-1)
        if(numchar < 0){
            setnumchar(numchar=0)
        }
}
    return(

        <div  className={'product'}>
          <div className={'add-element'}>
                <div className={'pro-image'} src={props.src} alt={props.alt}></div>
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
               <button onClick={incraesing}>+</button>
                   <span>{numchar}</span>
               <button onClick={decreasing}>-</button>
            </div>

            <button className={'add-to-chart'} onClick={addinToChart}>Add to chart</button>  
        </div>
    
    )
}