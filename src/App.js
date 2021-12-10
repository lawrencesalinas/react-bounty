import './App.css';
import { useEffect, useState } from 'react'
import Poster from './Poster';
import Display from './Display';
import Form from './Form';

function App() {

  const [bounties, setBounties] = useState([])
  const [current,setCurrent] = useState({})

useEffect(() => {
  fetch('http://localhost:8000/bounties')
  .then(response => response.json())
  .then(foundBounties=> {
    // console.log(foundBounties);
    setBounties(foundBounties)
  })
}, [])

const changeCurrent = bounty => {
  setCurrent(bounty)
}

const posters = bounties.map(bounty => {
    return <Poster 
    bounty ={bounty}
     key={bounty._id}
     changeCurrent={changeCurrent}
     />

})
  
  return (
    <div className="App">
      <header className="App-header">
         <h1>Wanted</h1>
         <Display bounty ={current}/>
      </header>
      <section className = 'poster-board'>
      {posters}
      </section>
      <section className = 'App-header'>
        <Form />
      </section>
    </div>
  );
}

export default App;
