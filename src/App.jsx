import './index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import PetalsAndPots from './pages/projects/PetalsAndPots';
import Split from './pages/projects/SPLIT';
import CartQuest from './pages/projects/CartQuest';
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects/petalsandpots" element={<PetalsAndPots/>} />
        <Route path="/projects/split" element={<Split/>} />
        <Route path="/projects/cartquest" element={<CartQuest/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;