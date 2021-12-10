import React from "react"
import Display from "./Display"

function Poster(props)  {

    let status = props.bounty.captured ? 'In custody': 'At Large'

    return (
       <div className = 'poster'>
           <h2>{status}</h2>
           <h3>{props.bounty.name}</h3>
           <h3>{props.bounty.wantedFor}</h3>
           <h4>{props.bounty.reward}</h4>
           <button onClick = {()=>{props.changeCurrent(props.bounty)}}>  More</button>

       </div>
    )
}

export default Poster