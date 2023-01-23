import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
        <Link to="/" style={{ color: "white", background: "red" }}>Products</Link>
        <br/>
        <Link to="/cart" style={{ color: "white", background: "blue" }}>Cart</Link>
    </div>
  )
}   

export default Header
