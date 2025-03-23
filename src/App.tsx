import "./styles.css";
import Navbar from "./Components/Navbar";
import { Routes } from "react-router-dom";
import Home from "./routes/Home";
export default function App() {
  return (
    <div className="App">
      <Routes></Routes>

      <Navbar />
      <Home />
    </div>
  );
}
