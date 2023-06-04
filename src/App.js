import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Modules from "./Components/Modules";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />
      {/* Home Section */}
      <Home />
      {/* Modules Section */}
      <Modules />
      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
