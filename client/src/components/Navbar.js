import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home Page!</Link>
            <Link to="/aPage">A Page</Link>
            <Link to="/secretPage">Secret Page</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Log in</Link>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Navbar