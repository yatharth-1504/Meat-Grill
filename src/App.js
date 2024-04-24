import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content2 from "./components/About/About";
import OurTeam from "./components/Team/OurTeam";
import Services from "./components/Services/Services";
import Navbar from "./components/Nav/Navbar";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <Content2 />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Navbar />
              <OurTeam />
              <Footer />
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <Navbar />
              <Services />
              <Footer />
            </>
          }
        />
        <Route
          path="/menu"
          element={
            <>
              <Navbar />
              <Menu />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
