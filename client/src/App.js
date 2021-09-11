import './App.css';
import Router from "./Router"
import axios from "axios"
import { CheckPoint } from "./CheckPoint"

axios.defaults.withCredentials = true

function App() {
  return (
    <CheckPoint>
      <Router />
    </CheckPoint>
  );
}

export default App;
