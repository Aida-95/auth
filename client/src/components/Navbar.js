import { Link } from 'react-router-dom'
import { useContext } from 'react'
import CheckAuth from '../CheckPoint'
import Logout from './Logout'

const Navbar = () => {
    const { loggedIn } = useContext(CheckAuth)
    return (
        <div>
            <Link to="/">Home Page!</Link>
            <Link to='/publicPage'>Public Page</Link>


            {loggedIn === false && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/login">Log in</Link>
                </>
            )}

            {loggedIn === true && (
                <>
                    <Link to="/aPage">A Page</Link>
                    <Link to="/secretPage">Secret Page</Link>
                    <Logout />
                </>
            )}

        </div>
    )
}

export default Navbar