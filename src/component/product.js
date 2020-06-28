import React, {useState} from 'react';
// import {UsesState} from 'react'
export default function Product(props){
  
    let[numchar, setnumchar]=useState(0)

    const addingToChart =()=>{
        alert('added to chart')
     }

    //increasing the value

    let dom = document.getElementById('char')

    const incraesing =()=>{
        setnumchar(numchar=numchar+1) 
      
        if(numchar > 5){
            dom.style.fontSize='20px'
        }
        if(numchar > 10){
            dom.style.fontSize='25px'
        }
    
   }
    //decrementing the value
    const decreasing =()=>{
        setnumchar(numchar=numchar-1)
        if(numchar < 0){
            setnumchar(numchar=0)
      }
        if(numchar < 5){
           dom.style.fontSize='15px'
        }
   }
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
               <button onClick={incraesing}>+</button>
                   <span id='char'>{numchar}</span>
               <button onClick={decreasing}>-</button>
            </div>

            <button className={'add-to-chart'} onClick={addingToChart}>Add to chart</button>  
        </div>
    
    )
}
