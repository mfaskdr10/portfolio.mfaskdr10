import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WebLayout from "./Components/Layouts/WebLayout";

const App = () => {
  return (
    <WebLayout>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </WebLayout>
  );
};

export default App;
