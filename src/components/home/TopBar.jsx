import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function TopBar() {
    return (
        <Navbar fixed='top'>
            <Container>
                <Link className='navbar-expand nav-link' to='/'>DONJAI ALL</Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About us</Link>
                <Link className='nav-link' to='/book'>Book ticket</Link>
                <Link className='nav-link' to='/admin'>Admin</Link>
                <Link className='nav-link' to='/signin'>Log in</Link>
                <Link className='btn btn-sign-up' to='/signup'>Sign up</Link>
            </Container>
        </Navbar>
    )
}

export default TopBar;