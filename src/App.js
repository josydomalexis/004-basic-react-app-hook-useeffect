import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [name, setName] = useState("josy")
  const [newName, setNewName] = useState(name)
  const handleChange = (e)=>{
    setNewName(e.target.value)
    console.log(newName)
  }
  const handleNewName = () =>{
    setName(newName)
  }

  useEffect(()=>{
    console.log("Hello")
  },[]) 
  
  // useEffect render the callback everytime, when there is no dependencies
  // useEffect render the callback only one time after page load, when there is empty array [] dependency
  // useEffect render the callback everytime, when given dependencies state change. example [newName, name]

  return (
    <div className="App">
      <h1>{name}</h1>
      <input onChange={(e)=>handleChange(e)} name='newName' type='text' placeholder='name' value={newName}/>
      <button onClick={()=>handleNewName()}>Change name</button>
    </div>
  );
}

export default App;
