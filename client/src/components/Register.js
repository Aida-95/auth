import axios from "axios"
import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import CheckAuth from '../CheckPoint'
import './components.css'

const Register = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { getLoggedIn } = useContext(CheckAuth)
    const history = useHistory()

    const register = async (e) => {
        e.preventDefault()
        try {
            const registerData = { username, email, password }
            await axios.post("http://localhost:5000/test/register", registerData)
            await getLoggedIn()
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={register}>
                Username<br />
                <input
                    type="text"
                    placeholder="Enter a name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                /><br />
                E-mail<br />
                <input
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                /><br />
                Password<br />
                <input
                    type="password"
                    placeholder="Enter a password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                /><br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;