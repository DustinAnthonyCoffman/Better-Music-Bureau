import {Navigation} from './Components/Navigation/Navigation'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'
import {Reviews} from './Components/Reviews/Reviews'

//components
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {Login} from './Components/Login/Login'
import {Signup} from './Components/Signup/Signup'
import { useAuthContext } from './Hooks/useAuthContext'

function App() {

  const { user } = useAuthContext()

  return (
    <>
      <BrowserRouter>
        <Navigation />
      
        <Routes>
            <Route path='/' element={user ? <Home/> : <Navigate to='/login'/>}/>
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
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