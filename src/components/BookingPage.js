import BookingForm from "./BookingForm";
function Booking({availableTimes,setAvailableTimes}) {
  return (
    <section className="booking-section d-flex justify-content-center">
      <BookingForm availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    </section>
  );
}

export default Booking;
