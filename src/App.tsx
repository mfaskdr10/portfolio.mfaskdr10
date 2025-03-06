import { Routes, Route } from "react-router";

import Navbar from "./Components/Elements/Navbar/Navbar";
import LandingPage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WebLayout from "./Components/Layouts/Container";
import Footer from "./Components/Elements/Footer";
import ServicePage from "./pages/ServicePage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const App = () => {
  return (
    // bg-gradient-to-t from-sky-900 to-slate-900
    <div className="bg-sky-50 text-sky-950 dark:bg-zinc-900 dark:text-zinc-300 transition-all duration-500">
      <Navbar />
      <WebLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </WebLayout>
      <Footer />
    </div>
  );
};

export default App;
