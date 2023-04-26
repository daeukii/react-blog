import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">블로그</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">홈</Nav.Link>
            <Nav.Link href="/boardlist">게시판</Nav.Link>
            <Nav.Link href="login">로그인</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;