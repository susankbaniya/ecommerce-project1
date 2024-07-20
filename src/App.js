import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Home from "./Component/Pages/Home/Home";
import Footer from "./Component/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
