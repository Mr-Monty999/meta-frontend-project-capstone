import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SpecialsPage from "./SpecialsPage";
import TestimonialsPage from "./TestimonialsPage";
import BookingPage from "./BookingPage";
function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/specials" element={<SpecialsPage />}></Route>
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
}

export default Main;
