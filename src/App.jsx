import "./assets/style/App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu searchValue={searchValue} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
