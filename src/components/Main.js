import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Booking from "./Booking";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/specials" element={<Specials />}></Route>
        <Route path="/testimonials" element={<Testimonials />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
