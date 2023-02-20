import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav';


function Header() {
  return (
    <Nav variant="tabs" defaultActiveKey="/" style={{backgroundColor: 'yellow'}}>
      <Nav.Item>
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/" >Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/cart" >Cart</Nav.Link>
      </Nav.Item>
    </Nav>

  )
}

export default Header


