//css
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//pages
import {Home} from './Pages/Home'
import {About} from './Pages/About'
import {Contact} from './Pages/Contact'
import {NotFound} from './Pages/NotFound'


//components
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {Navigation} from './Components/Navigation/Navigation'
import {Login} from './Components/Login/Login'
import {Signup} from './Components/Signup/Signup'
import {CreateReview} from './Components/Reviews/CreateReview';
import {Reviews} from './Components/Reviews/Reviews'
import {AdminReviews} from './Components/Reviews/AdminReviews'

//hooks
import {useAuthContext} from './Hooks/useAuthContext'

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
            <Route path='adminReviews' element= {!user ? <Signup /> : <AdminReviews />} />
            <Route path='createReview' element={!user ? <Signup /> : <CreateReview/>} />
            <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


/* TODO LIST
PASSWORD RESET, SUPER ADMIN
login and signup should be hidden from any user not given a link token, meaning we check for the token and determine to render the protected routes
super admin needs to be able to send private link for account creation
users need to be able to reset passwords https://www.youtube.com/watch?v=YocRq-KesCM

CREATE REVIEW
try resizing an uploaded image before storing it https://stackoverflow.com/questions/23945494/use-html5-to-resize-an-image-before-upload
make sure all review id's are _id on ReviewInputs
move get reviews context to App and pass it to Reviews and AdminReviews
display any user or login failures in the browser
integrate react type checking with prop types
type check all previous JS files
style everything

ICEBOX
build a comment section for each review! 


*/