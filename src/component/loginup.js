import React, { Component } from 'react';
import Imglogo from '/Users/98921/MY REPO IN GITHUB/dr-game-project/src/images/drlogo.png'

export default function Login(){
    

    const checkingOut =()=>{

       //RegEx for email address
        
        const strThree = document.getElementById('inthree').value
        const regThree =/\w+@gamil.com/
        const resThree =  strThree.match(regThree)

        if(resThree){
          document.getElementById('parOne').innerHTML='correct'
        }else{
            document.getElementById('parOne').innerHTML=''
        }



       //RegEx for first name and lastname
        
        const strOne = document.getElementById('inone').value
        const strTwo = document.getElementById('intwo').value
        const regOne = /[^0-9]/
        const resOne = strOne.match(regOne)
        const resTwo = strTwo.match(regOne)
        
        if(resOne){
            document.getElementById('parOne').innerHTML='correct'
        }else{
            document.getElementById('parOne').innerHTML='incorrect'
        }

        if(resTwo){
            document.getElementById('parTwo').innerHTML='correct'
        }else{
            document.getElementById('parTwo').innerHTML='incorrect'
        }



       //RegExp for password

        const strFour = document.getElementById('infour').value
        const regFour =/\w+\d+/
        const resFour = strFour.match(regFour)

        if(resFour){
          document.getElementById('parfour').innerHTML='correct'
        }else{
            document.getElementById('parfour').innerHTML=''
        }



       //RegExp for username
        
       const strFive = document.getElementById('infive').value
       const regfive =/\w+(-|_|@)+[0-9]/
       const resFive =  strFive.match(regfive)

       if(resFive){
           document.getElementById('parfive').innerHTML='correct'
       }else{
           document.getElementById('parfive').innerHTML=''
       }

    }
    

    return(
        <div>
         <image src={Imglogo}></image>   
          <form action='' method='POST'>
             <input id='inone' type='text' placeholder='First name'></input> 
             <p id='parOne'></p>

             <input id='intwo' type='text' placeholder='Last name'></input> 
             <p id='parTwo'></p>

             <input id='inthree' type='text' placeholder='E-mail address'></input> 
             <p id='parThree'></p>

             <input id='infour' type='password' placeholder='Pasword'></input> 
             <p id='parFour'></p>

             <input id='infive' type='text' placeholder='Username'></input> 
             <p id='parFive'></p>

             <input type='submit' onClick={checkingOut}>Sign up</input> 
          </form>  
        </div>
    )
}