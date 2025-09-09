import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
