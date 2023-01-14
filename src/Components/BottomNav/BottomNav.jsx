import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
    return (
        <Navbar 
            bg="primary" 
            variant="dark" 
            fixed="bottom" 
            className="d-flex justify-content-center align-items-center"
        >
            <Container>
                <Nav className="m-auto">
                    <Nav.Link as={NavLink} to=''>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='movies'>Movies</Nav.Link>
                    <Nav.Link as={NavLink} to='series'>Series</Nav.Link>
                    <Nav.Link as={NavLink} to='search'>search</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BottomNav;