import { Link } from "react-router-dom"

function Header() {
    return(
        <nav className="nav-wrapper bg-primary">
            <Link to="/" className="brand-logo bg-primary">Food</Link>
        </nav>
    )
}
export { Header };

