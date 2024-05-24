import { useState } from "react";

function BookingForm({availableTimes,setAvailableTimes}) {
  const [formData, setFormData] = useState({
    date: "",
    time: availableTimes[0],
    number_of_guests: 0,
    occasion: "",
  });


  const handleChange = (event) => {
    if(event.target.name === "date"){
      setAvailableTimes(event.target.value)
    }
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        maxWidth: "200px",
        gap: "20px",
      }}
    >
      <label htmlFor="date">Choose date</label>
      <input
        value={formData.date}
        onChange={handleChange}
        type="date"
        id="date"
        name="date"
      />
      <label htmlFor="time">Choose time</label>
      <select
        value={formData.time}
        onChange={handleChange}
        id="time"
        name="time"
      >
        {availableTimes.map((data,index) => {
           return <option key={index} value={data}>{data}</option>
        })}
      </select>
      <label htmlFor="number_of_guests">Number of guests</label>
      <input
        value={formData.number_of_guests}
        onChange={handleChange}
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="number_of_guests"
        name="number_of_guests"
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        value={formData.occasion}
        onChange={handleChange}
        name="occasion"
        id="occasion"
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input
        className="btn bg-primary-1"
        type="submit"
        value="Make Your reservation"
      />
    </form>
  );
}

export default BookingForm;
