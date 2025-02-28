import { Routes, Route } from "react-router";

import Navbar from "./Components/Fragments/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";  

const App = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="mx-auto max-w-7xl items-center justify-between p-5 lg:px-8">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
