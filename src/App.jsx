import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
        <Header />
        <main className="flex-grow bg-white">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
