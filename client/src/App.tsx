import React from 'react'
import './App.css';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import {Signup} from './Components/Signup/Signup'

function App() {
  // const [data, setData] = useState('Better Music Bureau')
  
  // const getTest = async () => {
  //   try {
  //     const res = await fetch('http://localhost:8080/test', {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     return await res.json()
  //   } catch(err) {}
  // }

  // useEffect(() => {
  //   getTest().then((res) => {
  //     setData(res.message)
  //   }).catch((error) => console.log(error))
  // },[])

  return (
    <div className="App">
      <Signup />
    </div>
  );
}

export default App;


/* todo list
integrate react type checking with prop types
push from signup component 
integrate json web token for login





*/