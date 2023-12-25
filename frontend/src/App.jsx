import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}

export default App;
