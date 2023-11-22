import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import DentistDetail from "./Routes/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/favs" element={<Favs />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/dentist/:id" element={<DentistDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
