import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
function Booking() {
  const initializeTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ];
  const navigate = useNavigate();

  function updateTimes(state, action) {
    // console.log(state)
    return initializeTimes;
  }

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes
  );

  const submitForm = (event) => {
    event.preventDefault();
    // console.log(formData);
    navigate("/confirmed-booking");
  };

  return (
    <section className="booking-section d-flex flex-column justify-content-center align-items-center">
      <h1 className="super-title my-10">Booking Now</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        submitForm={submitForm}
      />
    </section>
  );
}

export default Booking;
