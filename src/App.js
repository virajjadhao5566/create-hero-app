import React, { useState } from 'react';
import './App.css';

function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [height,setHeight] = useState(0)
  const [superpower,setSuperpower] = useState("")
  const [displayCharacter,setDisplayCharacter] = useState(false)
  return (
    <div className="App">
      <div>
       <h1>Create a Hero</h1>
       <label for="name">Name:</label>
       <input type="text" name="name" 
          style={{margin:10}}
          onChange={(event)=>{
            setName(event.target.value)
          }}/>
       <label for="age">Age:</label>
       <input type="number" name="age" 
          style={{margin:10}}
          onChange={(event)=>{
            setAge(event.target.value)
          }}/>
       <label for="height">Height:</label>
       <input type="number" name="height" 
          style={{margin:10}}
          onChange={(event)=>{
            setHeight(event.target.value)
          }}/>
       <label for="superpower">Superpower:</label>
       <input type="text" name="superpower" 
          style={{margin:10}}
          onChange={(event)=>{
            setSuperpower(event.target.value)
          }}/>
      </div>
      <div>
        <button onClick={()=>{
          setDisplayCharacter(true)
        }}>Display Hero</button>
      </div>
      <div>
        <h1>Hero Info</h1>  
        {displayCharacter && (
            <ul>
              <li>Name:{name}</li>
              <li>Age:{age}</li>
              <li>Height:{height}</li>
              <li>superpower:{superpower}</li>
            </ul>
        )}
      </div>
    </div>
  );
}

export default App;
