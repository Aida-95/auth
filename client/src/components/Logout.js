import axios from 'axios'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import CheckAuth from '../CheckPoint'

const Logout = () => {
    const { getLoggedIn } = useContext(CheckAuth)

    const history = useHistory()

    const logOut = async () => {
        await axios.get("http://localhost:5000/test/logout")

        await getLoggedIn()
        history.push('/')
    }


    return (
        <>
            <button onClick={logOut}>Log Out</button>
        </>
    );
}

export default Logout;