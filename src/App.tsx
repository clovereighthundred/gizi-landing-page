import { Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Homepage from "./components/Homepage";
// import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
