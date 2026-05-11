import {Route, Routes, BrowserRouter} from "react-router-dom"
import Home from "./pages/Home"
import Navigation from "./components/Navigation"
import './App.css'
import Contacts from "./pages/Contacts"
import About from "./pages/About"

function App() {

  return (
    <>
      <BrowserRouter>

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
