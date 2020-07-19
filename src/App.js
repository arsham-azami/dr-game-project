import React, {useState} from 'react';
// import {Image, view} from 'react'
import Product from './component/Product'
import Logone from './images/drlogo.png'
import Logtwo from './images/dr.logo.jpeg'
import Cyber from './images/cyber.png'
import Acv from './images/ac valhalla.png'
import Aco from './images/ac origins.png'
import Rdr2 from './images/rdr2.png'


export default function App() {

  const[num, setnumchar]=useState(0)

  const[posts, setposts]=useState([
    {id:123,  post_name:'cyber punk 2077', price:'20$', rating:4.5 , imgsrc:Cyber, imgalt:'cyberpunk 2077' },
    {id:1234, post_name:'red dead redemption 2', price:'25$', rating:4.6 , imgsrc:Cyber, imgalt:' rdr2' },
    {id:234, post_name:'assassins creed valhalla', price:'50$', rating:4 , imgsrc:Acv, imgalt:'ac valhalla' },
    {id:4321, post_name:'assassins creed origins', price:'40$', rating:3.7 , imgsrc:Aco, imgalt:'ac origins' },
  ])

  const darkMode =()=>{
    
    document.getElementById('head').style.backgroundColor='black'
    document.getElementById('body').style.backgroundColor='black'
    document.getElementById('but').innerText='Light mode'
    document.getElementById('img-logo').setAttribute('src', Logone )
    // document.getElementById('head').style.backgroundColor='white'
  }
  const dom = document.getElementById('char')
  const incraesing =()=>{
            setnumchar(num=num+1) 
          
            if(num > 5){
                dom.style.fontSize='20px'
            }
            if(num > 10){
                dom.style.fontSize='25px'
            }
        
       }
        //decrementing the value
  const decreasing =()=>{
            setnumchar(num=num-1)
            if(num < 0){
                setnumchar(num=0)
          }
            if(num < 5){
               dom.style.fontSize='15px'
            }
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
           {posts.map(post =>{
               <Product key={post.id} name={post.post_name} 
                    price={post.price} 
                    rate={post.rating} 
                    src={post.imgsrc} 
                    alt={post.imgalt}
                    decrease={incraesing()}
                    increas={decreasing()}
                    numchar={num} ></Product>
           })}
         </div>
         
         <p className={'title-two'}>sell</p>
         <div className={'product-container-two'}>
         {posts.map(post =>{
               <Product key={post.id} name={post.post_name} 
               price={post.price} 
               rate={post.rating} 
               src={post.imgsrc} 
               alt={post.imgalt}
               decrease={incraesing()}
               increas={decreasing()}
               numchar={num} ></Product>
           })}
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

