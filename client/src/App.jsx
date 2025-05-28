import { Routes, Route } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css'
import Navbar from './components/Navbar';
import LoginForm from "./components/Login";
import IndexPage from "./components/IndexPage";

function App() {

  return (
    <div>
      {/* <Navbar /> */}
      {/* <LoginForm /> */}
      <IndexPage/>
    </div>
  )
}

export default App
