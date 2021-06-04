import React from 'react'
import './App.css'

export default class Wheather extends React.Component
{

  constructor()
  {
      super()
      this.state={
          apiValue:null
      }
  }
  
  componentDidMount()
  {
     let api=" https://reqres.in/api/users"
     fetch(api).then((resp)=>{
         resp.json().then((result)=>{
        this.setState({apiValue:result.data})
        
        })
     })
   
  }
  render()
  {
  return(
      <>
      <h1 className="label">City Names is {this.props.city}</h1>
      <div>
      <p className="label">Wheather inform for {this.props.city} city</p>
      <div className="users">
      {
          this.state.apiValue ?
          this.state.apiValue.map((items,i)=>{
              return (<div className="label"><p>{i}  {items.first_name}   {items.last_name}</p>
              </div>)
          })
          :
          <div><p>No data Available</p></div>
      }
      </div>
      </div>
      </>
  )
  }
}

