import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import SpecialsPage from "./SpecialsPage";
import TestimonialsPage from "./TestimonialsPage";
import BookingPage from "./BookingPage";
import { useReducer, useState } from "react";
function Main() {
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];

  function updateTimes(state,action) {
    // console.log(state)
    return initializeTimes;
  }

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/specials" element={<SpecialsPage />}></Route>
        <Route path="/testimonials" element={<TestimonialsPage />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
            />
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default Main;
