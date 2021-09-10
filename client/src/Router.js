import { BrowserRouter, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import SecretPage from "./components/SecretPage"
import Apage from "./components/Apage"
import Register from "./components/Register"
import Login from "./components/Login"
import Logout from "./components/Logout"

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/secretPage">
                    <SecretPage />
                </Route>
                <Route path="/aPage">
                    <Apage />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/logout">
                    <Logout />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router