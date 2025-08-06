import { BrowserRouter, Routes, Route } from "react-router-dom";


import Layout from "./assets/components/Layout";
import HeroSection from "./assets/components/HeroSection";
import AboutSection from "./assets/components/AboutSection";
import SkillsSection from "./assets/components/SkillsSection";
import ProjectsSection from "./assets/components/ProjectsSection"; // from before
import ContactSection from "./assets/components/ContactSection";
import ScrollToTop from "./assets/components/ScrollToTop";



function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Layout wraps all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HeroSection />} />
          <Route path="about" element={<AboutSection />} />
          <Route path="skills" element={<SkillsSection />} />
          <Route path="projects" element={<ProjectsSection />} />
          <Route path="contact" element={<ContactSection />} />
          {/* Optional: 404 page route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
