import { Routes, Route } from "react-router-dom";
import { Home } from "./features/home/Home";
import { About } from "./features/about/About";
import { Projects } from "./features/projects/Projects";
import { Resources } from "./features/resources/Resources";
import { Blog } from "./features/blog/Blog";
import { Contact } from "./features/contact/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
