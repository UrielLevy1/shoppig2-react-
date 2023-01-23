import { Link } from "react-router-dom"
function Header() {
  return (
    <div>
        <Link to="/">Products</Link>
        <br/>
        <Link to="/cart" style={{ color: "white", background: "silver" }}>Cart</Link>
    </div>
  )
}   

export default Header
