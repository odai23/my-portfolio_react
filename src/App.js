import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ImageSlider from "./components/ImageSlider";
import SlideData from "./components/SlideData";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="AboutPage" element={<AboutPage />} />
        <Route path="ContactPage" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
