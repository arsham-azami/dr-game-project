import React from 'react';
// import {Image, view} from 'react'
import Product from './component/Product'


export default function App() {

  if(document.innerHeight > 70){
    const ele = document.createElement('p')
    ele.innerText='top'
  }

  return (
   <>
    <div className={'grid-container'} id='main'>

      <div className={'header'}>
    
       <h1><a href='/'>Dr.game</a></h1>
        <ul>
          <li><a href='#'>Home</a></li> 
          <li><a href='#'>Steam</a></li> 
          <li><a href='#'>Products</a></li> 
          <li><a href='#'>About us</a></li> 
        </ul>
        
        <div className={'btn-group'}>
          <button className={'btn btn-success'}>Sign in</button>
          <button className={'btn btn-success'}>Sign up</button>
        </div>

      </div>

      <div className ={'body'}>

      <p>News</p>
        <div className={'game-news'}>
            <div className={'news-one'}></div>
            <div className={'news-two'}></div>
            <div className={'news-three'}></div>
            <div className={'news-four'}></div>
        </div>
          
        <p className={'title-one'}>Best seller</p> 
        <div className={'product-container-one'}>
            <Product name={'ac origins'} price={'$120'} rate={4.5} alt={'acor'} ></Product>
            <Product name={'ac oddessey'} price={'$170'} rate={4.5} alt={'acod'}></Product>
            <Product name={'red dead'} price={'$100'} rate={4} alt={'rdr'}></Product>
         </div>
         
         <p className={'title-two'}>sell</p>
         <div className={'product-container-two'}>
            <Product name={'battlefield'} price={'$100'} rate={4} alt={'rdr'}></Product>
            <Product name={'call of duty'} price={'$100'} rate={4} alt={'rdr'}></Product>
            <Product name={'need for speed'} price={'$120'} rate={5} alt={'nfs'}></Product>
        </div>
        
     </div>

       <div className={'footer'}>
          <h3>Tweeter</h3> 
          <h3>Instagram</h3> 
          <h3>Facebook</h3> 
          <h3>Telegram</h3> 
          <h3>Github</h3> 
          <h3>Pinterest</h3> 

       </div>
                        
    </div>
    </>
   )
}

// ReactDOM.render(<App/> , document.getElementById('root'))

