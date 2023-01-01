//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'


//components
import {Navigation} from './Components/Navigation/Navigation'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Login} from './Components/Login/Login'
import {Signup} from './Components/Signup/Signup'
import {useAuthContext} from './Hooks/useAuthContext'
import {CreateReview} from './Components/Reviews/CreateReview';
import {Reviews} from './Components/Reviews/Reviews'
import {AdminReviews} from './Components/Reviews/AdminReviews'

function App() {

  const {user} = useAuthContext()
  
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='reviews' element={<Reviews />}/>
            <Route path='adminReviews' element= {<AdminReviews />} />
            <Route path='createReview' element={!user ? <Signup /> : <CreateReview/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


/* TODO LIST
make sure all review id's are _id on ReviewInputs
move get reviews context to App and pass it to Reviews and AdminReviews
display any user or login failures in the browser
integrate react type checking with prop types
type check all previous JS files
style everything

ICEBOX
build a comment section for each review! 


*/