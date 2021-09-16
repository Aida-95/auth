import axios from "axios"
import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import CheckAuth from '../CheckPoint'
import './components.css'


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { getLoggedIn } = useContext(CheckAuth)
    const history = useHistory()

    const login = async (e) => {
        e.preventDefault()

        try {
            const LoginData = { email, password }
            await axios.post("http://localhost:5000/test/login", LoginData)
            await getLoggedIn()
            history.push("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;