import { Routes, Route } from "react-router";

import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import WebLayout from "./Components/Layouts/WebLayout";
import Footer from "./Components/Sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <WebLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </WebLayout>
      <Footer />
    </>
  );
};

export default App;
