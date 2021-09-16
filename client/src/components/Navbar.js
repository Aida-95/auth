import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CheckAuth from '../CheckPoint'
import Logout from './Logout'
import './components.css'

const Navbar = () => {
    const { loggedIn } = useContext(CheckAuth)
    return (
        <div >
            <Link to="/" className="link">Home Page!</Link>
            <Link to='/publicPage' className="link">Public Page</Link>


            {loggedIn === false && (
                <>
                    <Link to="/register" className="link">Register</Link>
                    <Link to="/login" className="link">Log in</Link>
                </>
            )}

            {loggedIn === true && (
                <>
                    <Link to="/aPage" className="link">A Page</Link>
                    <Link to="/secretPage" className="link">Secret Page</Link>
                    <Logout />
                </>
            )}

        </div>
    )
}

export default Navbar