import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import Signup from "./pages/Signup/Signup";
import Signin from "./pages/Signin";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/movies/:type" element={<MovieList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
