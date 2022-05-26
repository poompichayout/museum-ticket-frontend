import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../contexts/ContextProvider';

function TopBar() {
    const auth = useAuth();
    const onLogoutClick = () => {
        localStorage.removeItem('tokens');
        localStorage.removeItem('user-data');
        auth.logout();
    }
    
    return (
        <Navbar fixed='top' expand='lg'>
            <Container>
                <Navbar.Brand>
                    <Link className='navbar-expand nav-link' to='/'>DONJAI ALL</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ms-auto">
                        <Nav.Link as="span">
                            <StyledLink to='/'>Home</StyledLink>
                        </Nav.Link>
                        <Nav.Link as="span">
                            <StyledLink to='/admin'>Admin</StyledLink>
                        </Nav.Link>
                        {!auth.user && <>
                            <Nav.Link as="span"><StyledLink to='/signin'>Log in</StyledLink></Nav.Link>
                            <Nav.Link as="span"><StyledLink className='btn btn-sign-up' to='/signup'>Sign up</StyledLink></Nav.Link>
                        </>}

                        {auth.user && <>
                            <Nav.Link as="span"><StyledLink to='/account'>My account</StyledLink></Nav.Link>
                            <Nav.Link as="span"><StyledLink to='/' onClick={onLogoutClick}>Log out</StyledLink></Nav.Link>
                        </>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const StyledLink = styled(Link)`
    color: white;
    &:hover {
        background-color: rgba(214, 155, 113, 0.88);;
        color: #ffffff;
    }
`;

export default TopBar;