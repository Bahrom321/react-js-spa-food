import { Link } from "react-router-dom"

function Header() {
    return(
        <nav className="nav-wrapper">
            <Link to="/home" className="brand-logo">React Shop</Link>
        </nav>
    )
}
export { Header };