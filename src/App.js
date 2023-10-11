import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />
            

      </Routes>
      <Footer/>
    
      </BrowserRouter>
    
      
      
    
    </>
    
  )
}

export default App;
