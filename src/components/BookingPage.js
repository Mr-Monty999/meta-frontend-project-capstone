import BookingForm from "./BookingForm";
function Booking({ availableTimes, setAvailableTimes }) {
  return (
    <section className="booking-section d-flex flex-column justify-content-center align-items-center">
      <h1 className="super-title my-10">Booking Now</h1>
      <BookingForm
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
      />
    </section>
  );
}

export default Booking;
