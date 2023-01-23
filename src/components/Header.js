import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
        <Link to="/">Products</Link>
        <br/>
        <Button style={{ color: "white", background: "silver" }} >
        <Link to="/cart">Cart</Link>
        </Button>
    </div>
  )
}

export default Header

style={{ color: "white", background: "silver" }}