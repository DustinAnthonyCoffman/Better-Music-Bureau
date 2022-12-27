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
import './Navigation.css'
import {Button} from 'react-bootstrap'

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
                    <Navbar.Brand>
                    <NavLink className='nav-item ml-auto' to='/'>Better Music Bureau {coffee}</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav className="ms-auto">
                            <NavLink className='px-2 nav-item' to='/' style={({isActive}) => { return isActive ? {color: '#0a58ca'} : {} }}>
                                Home
                            </NavLink>
                            <NavLink className='px-2 nav-item' to='about' style={({isActive}) => { return isActive ? {color: '#0a58ca'} : {} }}>
                                About
                            </NavLink>
                            <NavLink className='px-2 nav-item' to='contact' style={({isActive}) => { return isActive ? {color: '#0a58ca'} : {} }}>
                                Contact
                            </NavLink>
                            <NavLink className='px-2 nav-item' to='reviews' style={({isActive}) => { return isActive ? {color: '#0a58ca'} : {} }}>
                                Reviews
                            </NavLink>
                            {user && (
                                <NavDropdown className='nav-title nav-item' title="Admin">
                                    <NavLink className='nav-item nav-item-dropdown' to='adminReviews'>My Reviews</NavLink>
                                    <NavLink className='nav-item nav-item-dropdown' to='createReview'>Create Review</NavLink>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item className='nav-item nav-item-dropdown' href='/about'>Credits</NavDropdown.Item>
                                </NavDropdown>
                            )}
                            <div>
                                {user && (
                                    <div>
                                        <span>{user.email}</span>
                                        <Button className='nav-item btn-secondary' onClick={handleClick}>Log out</Button>
                                    </div>
                                )}
                                {!user && (
                                    <div>
                                    <NavLink type='button' className='button' to="/login">Login</NavLink>
                                    <NavLink type='button' className='button' to="/signup">Signup</NavLink>
                                    </div>
                                )}
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}
