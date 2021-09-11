import axios from "axios"
import { useEffect, useState, createContext } from "react"

const CheckAuth = createContext()

const CheckPoint = (props) => {

    const [loggedIn, setLoggedIn] = useState(undefined)

    const getLoggedIn = async () => {
        const loggedInRes = await axios.get("http://localhost:5000/test/loggedIn")
        setLoggedIn(loggedInRes.data)
    }

    useEffect(() => {
        getLoggedIn()
    }, [])

    return (
        <CheckAuth.Provider value={{ loggedIn, getLoggedIn }}>
            {props.children}
        </CheckAuth.Provider>
    )
}

export default CheckAuth
export { CheckPoint }
