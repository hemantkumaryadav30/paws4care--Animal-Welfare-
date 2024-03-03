import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Animals from "./Pages/Animals";
import Contact from "./Pages/Contact";
import Notfound from "./Pages/Errorpage/Notfound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
export default function 
App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/animal-care" element={<Animals/>}/>
        <Route path="/contact-us" element={<Contact/>}/>


        {/* routes for error page */}
          <Route path="*" element={<Notfound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
