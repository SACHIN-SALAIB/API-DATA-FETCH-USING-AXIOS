import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useState} from 'react';
function App() {
  const[state,setState]=useState([])
  return (
    <div className="App">
    <h1> API DATA FETCH USING AXIOS </h1>
    <button onClick={()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts').then((respone)=>{
        console.log(respone.data)
        setState(respone.data)
      })
    }}>Click me</button>
    {state.map((obj,index)=>(
      
        <div>
          <h1>{index+1}</h1>
          <h2>{obj.title}</h2>
          <h1>{obj.body}</h1>


        </div>
      
    ))}
    </div>
  );
}

export default App;
