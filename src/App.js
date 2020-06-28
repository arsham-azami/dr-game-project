import React from 'react';
// import {Image, view} from 'react'
import Product from './component/Product'
import Logone from './images/drlogo.png'
import Logtwo from './images/dr.logo.jpeg'

export default function App() {

  const darkMode =()=>{
    
    document.getElementById('head').style.backgroundColor='black'
    document.getElementById('body').style.backgroundColor='black'
    document.getElementById('but').innerText='Light mode'
    document.getElementById('img-logo').setAttribute('src', Logone )
    // document.getElementById('head').style.backgroundColor='white'
  }

  return (

   <>
    <div id='dark' className={'grid-container'} id='main'>

      <div id='head' className={'header'}>
    
       <img id='img-logo' className={'app-logo'} src={Logtwo}></img>
        <ul>
          <li><a href='#'>Home</a></li> 
          <li><a href='#'>Steam</a></li> 
          <li><a href='#'>Teams</a></li> 
          <li><a href='#'>Products</a></li> 
          <li><a href='#'>About us</a></li> 
        </ul>
        
        <button id='but' onClick={darkMode} className={'dark-button'}>Dark mode</button>
        <div className={'btn-group'}>
          <button className={'btn btn-primary'}>Sign in</button>
          <button className={'btn btn-success'}>Sign up</button>
        </div>

      </div>

      <div id='body' className ={'body'}>

        <div className={'game-news'}>
            <div className={'news-one'}></div>
            <div className={'news-two'}></div>
            <div className={'news-three'}></div>
            <div className={'news-four'}></div>
        </div>
          
        <p className={'title-one'}>Best seller</p> 
        <div className={'product-container-one'}>
            <Product name={'ac origins'} price={'$120'} rate={4.5} alt={'acor'} src={Logone}></Product>
            <Product name={'ac oddessey'} price={'$170'} rate={4.5} alt={'acod'} src={Logtwo}></Product>
            <Product name={'red dead'} price={'$100'} rate={4} alt={'rdr'}></Product>
         </div>
         
         <p className={'title-two'}>sell</p>
         <div className={'product-container-two'}>
            <Product name={'battlefield'} price={'$100'} rate={4} alt={'rdr'}></Product>
            <Product name={'call of duty'} price={'$100'} rate={4} alt={'rdr'}></Product>
            <Product name={'need for speed'} price={'$120'} rate={5} alt={'nfs'}></Product>
        </div>
        
     </div>

       <div id='footer' className={'footer'}>
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

