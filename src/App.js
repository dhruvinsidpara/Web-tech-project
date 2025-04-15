import "./styles.css";
// import Navbar from "./component/Navbar";

import { Route ,Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Chatbot from './component/Chatbot';  // Import path for Chatbot.js in the components folder

export default function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/servise" element={<Service/>}/>
      </Routes>
      {/* <Navbar /> */}
      <Chatbot/>
      

   
      
       
    </div>
  );
}

