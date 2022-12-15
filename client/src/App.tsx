import React, {useRef} from 'react'
import {Navigation} from './Components/Navigation/Navigation'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'
import {Reviews} from './Components/Reviews/Reviews'

//components
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Login} from './Components/Login/Login'
import {Signup} from './Components/Signup/Signup'

function App() {
  //we must pull the cookie from the json response, NOT STATICALLY DEFINE IT
  //if cookie, login automatically else no cookie render signup/login
  //if cookie exists just show the homescreen
  
  const cookie = useRef<boolean>(false)
  return (
    <>
      <BrowserRouter>
        <Navigation />
      
        <Routes>
            <Route path='/' element={cookie.current ? <Home /> :  <Signup />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


/* todo list
integrate react type checking with prop types
integrate json web token for login
*/