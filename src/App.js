import React from 'react';
// import ReactDOM from 'react-dom'


export default function App() {

  return (

    <div className={'grid-container'}>

      <div className={'header'}>
       <h2><a href='/'>Dr.game</a></h2>
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
        Game club
         assassins creed origins
         assassins creed oddessey
         assassins creed valhalla
      </div>
      
       <div className={'footer'}>
          <h3>tweeter</h3> 
          <h3>instagram</h3> 
          <h3>facebook</h3> 
          <h3>telegram</h3> 
          <h3>pinterest</h3> 
       </div>
     
    </div>
   )
}

// ReactDOM.render(<App/> , document.getElementById('root'))

