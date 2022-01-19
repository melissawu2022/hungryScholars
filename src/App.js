import "./App.css";
import About from "./components/About";
import AppHeader from "./components/AppHeader";
import Home from "./components/Home";
import Login from "./components/Login";
import Menu from "./components/Menu";
import User from "./components/SignUp";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
