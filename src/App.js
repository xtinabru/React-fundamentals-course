import React, { useState } from "react";

function App() {
  
  const[likes, setLikes] = useState(0)
  const[value, setValue] = useState('text')


  function increment(){
    setLikes(likes +1)
  }

  function decrement(){
    setLikes(likes -1)
  }

  return (
    <div>
    <h1>{likes}</h1> 
    <h1>{value}</h1> 
    <input 
    type="text"
    value ={value}
    onChange={event => setValue(event.target.value)}
    ></input>
     <button onClick={increment}>increment</button>
     <button onClick={decrement}>Decrement</button>

    </div>
  );
}

export default App;
