//components
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

//hooks
import { useAuthContext } from '../../Hooks/useAuthContext';
import { useLogout } from '../../Hooks/useLogout';


//dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


export const Navigation = () => {
    const {logout} = useLogout()
    const {user} = useAuthContext()
    const coffee = <FontAwesomeIcon icon={faCoffee} />
    const navigate = useNavigate()
    const handleClick = () => {
        logout()
        navigate('/')
    }
    return (
        <>
            <header>
                <Navbar bg='light' expand='lg'>
                    <Container>
                        <Navbar.Brand>
                        <NavLink to='/'>Better Music Bureau {coffee}</NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavLink to='/' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    Home
                                </NavLink>
                                <NavLink to='about' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    About
                                </NavLink>
                                <NavLink to='contact' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    Contact
                                </NavLink>
                                <NavLink to='reviews' style={({isActive}) => { return isActive ? {color: 'red'} : {} }}>
                                    Reviews
                                </NavLink>
                                <div>
                                    {user && (
                                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                                            <NavLink to='adminReviews'>My Reviews</NavLink>
                                            <NavLink to='createReview'>Create Review</NavLink>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Credits</NavDropdown.Item>
                                        </NavDropdown>
                                    )}
                                </div>
                                <div>
                                    {user && (
                                        <div>
                                            <span>{user.email}</span>
                                            <button onClick={handleClick}>Log out</button>
                                        </div>
                                    )}
                                    {!user && (
                                        <div>
                                        <NavLink to="/login">Login</NavLink>
                                        <NavLink to="/signup">Signup</NavLink>
                                        </div>
                                    )}
                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}
