import { render } from '@testing-library/react'
import React from 'react'
import './App.css'
import Wheather from './Wheather'
export default class Home extends React.Component {
   constructor()
   {
       super()
       this.state={
         cityName:null,
         apiValue:null  
     }
   }
  
   submit=(e)=>
   {
      e.preventDefault()
      if(this.state.cityName!=null)
     
       console.warn(this.state.cityName)
   }
  
    render() {
        return (
            <div>
                    <label className="label" >Enter City Name </label><br></br>
                    <input type="text" onChange={(e)=>{
                        e.preventDefault()
                    this.setState({ cityName:e.target.value })}} placeholder="xyz"></input><br></br>
                    <button onClick={(e) => this.submit(e)}>Submit</button>
                    <p>City name is {this.state.cityName}</p>
                    {
                       this.state.apiValue ? this.state.apiValue.map((items)=>{return(
                         <p>api call</p>
                       )}):null
                    }
            </div>

        )
    }

}