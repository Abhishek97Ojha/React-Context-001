import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Service from "./components/Service";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{marginTop:"2rem",display:"none"}}>
        <h3>I have changed theme to Dark</h3>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/service" element={<Service/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
