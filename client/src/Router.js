import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SecretPage from "./components/SecretPage"
import Apage from "./components/Apage"
import Register from "./components/Register"
import Login from "./components/Login"
// import Logout from "./components/Logout"
import CheckAuth from './CheckPoint'
import { useContext } from "react"
import PublicPage from "./components/PublicPage"

const Router = () => {
    const { loggedIn } = useContext(CheckAuth)
    return (

        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/publicPage">
                    <PublicPage />
                </Route>


                {loggedIn === false && (
                    <>
                        <Route path="/register">
                            <Register />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </>
                )}

                {loggedIn === true && (
                    <>
                        <Route path="/secretPage">
                            <SecretPage />
                        </Route>
                        <Route path="/aPage">
                            <Apage />
                        </Route>
                    </>
                )}

            </Switch>
        </BrowserRouter>
    )
}

export default Router