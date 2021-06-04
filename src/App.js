import './App.css';
import React from 'react'
import { getDefaultNormalizer } from '@testing-library/dom';
import Navbar from './Navbar'
import Home from './Home'
import Wheather from './Wheather'
export default class App extends React.Component{
     constructor(){
        super()
        this.state={
            Orginalmail:"shubhamtiwari@gmail.com",
            Orginalname:"12345678",
            responceMail:null,
            responcePass:null
        }
     }

     submit()
     {
        console.warn(this.state)
         if(this.state.Orginalmail==this.state.responceMail && this.state.Orginalname==this.state.responcePass)
         {
             alert("Login Succesfull")
         }else
         {
             alert("Mail id or password Incorrect")
         }
     }
     render()
     {
    return (
    <div className="App">
       <Home/> 
    </div>
  )
    }
}


