import React from 'react';
// import {Image, view} from 'react'
import Product from './component/Product'


export default function App() {

  return (
   <>
    <div className={'grid-container'}>

      <div className={'header'}>
    
       <h2><a href='/'>Dr.game</a></h2>
        <ul>
          <li><a href='#'>Home</a></li> 
          <li><a href='#'>Steam</a></li> 
          <li><a href='#'>Products</a></li> 
          <li><a href='#'>About us</a></li> 
        </ul>
        <i class="fa fa-shopping-cart">chart</i>
        <div className={'btn-group'}>
          <button className={'btn btn-success'}>Sign in</button>
          <button className={'btn btn-success'}>Sign up</button>
        </div>
      </div>

      <div className ={'body'}>
        <div className={'product-container'}>
            <Product name={'ac origins'} price={'$120'} rate={'4.5'} alt={'acor'} src={require('public/images/logo')}></Product>
            <Product name={'ac oddessey'} price={'$170'} rate={'4.5'} alt={'acod'} src={'public/images/logo 2.jpeg'}></Product>
            <Product name={'red dead'} price={'$100'} rate={4} alt={'rdr'}></Product>
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

