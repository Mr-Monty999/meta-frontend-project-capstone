import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function BookingForm({ availableTimes, setAvailableTimes, submitForm }) {
  // const [formData, setFormData] = useState({
  //   date: "",
  //   time: availableTimes ? availableTimes[0] : "",
  //   number_of_guests: 0,
  //   occasion: "",
  // });

  // const handleChange = (event) => {
  //   if (event.target.name === "date") {
  //     setAvailableTimes(event.target.value);
  //   }
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  return (
    <Formik
      initialValues={{
        date: "",
        time: availableTimes ? availableTimes[0] : "",
        number_of_guests: 0,
        occasion: "birthday",
      }}
      validationSchema={Yup.object({
        date: Yup.date().required("Required"),
        time: Yup.string().required("Required"),
        number_of_guests: Yup.number().min(1).max(10).required("Required"),
        occasion: Yup.string().required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        submitForm(values);
      }}
    >
      {({ isValid, isSubmitting, errors, touched }) => (
        <Form
          // onSubmit={formik.handleSubmit}
          style={{
            display: "grid",
            maxWidth: "200px",
            gap: "20px",
          }}
          data-testid="booking_form"
        >
          <label htmlFor="date">Choose date</label>
          <Field
            // value={formik.values.date}
            // onChange={formik.handleChange}
            type="date"
            id="date"
            name="date"
            data-testid="date"
            required
          />
          <p className="text-danger">
            <ErrorMessage className="text-danger" name="date" />
          </p>

          <label htmlFor="time">Choose time</label>
          <Field
            // value={formik.values.time}
            // onChange={formik.handleChange}
            id="time"
            as="select"
            name="time"
            data-testid="time"
            required
          >
            {availableTimes
              ? availableTimes.map((data, index) => {
                  return (
                    <option key={index} value={data}>
                      {data}
                    </option>
                  );
                })
              : null}
          </Field>
          <p className="text-danger">
            <ErrorMessage className="text-danger" name="time" />
          </p>

          <label htmlFor="number_of_guests">Number of guests</label>
          <Field
            // value={formik.values.number_of_guests}
            // onChange={formik.handleChange}
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="number_of_guests"
            name="number_of_guests"
            data-testid="number_of_guests"
            required
          />
          <p className="text-danger">
            <ErrorMessage className="text-danger" name="number_of_guests" />
          </p>

          <label htmlFor="occasion">Occasion</label>
          <Field
            // value={formik.values.occasion}
            // onChange={formik.handleChange}
            as="select"
            name="occasion"
            id="occasion"
            data-testid="occasion"
            required
          >
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </Field>
          <p className="text-danger">
            <ErrorMessage name="occasion" />
          </p>

          <input
            disabled={!isValid}
            className="btn bg-primary-1"
            type="submit"
            value="Make Your reservation"
            data-testid="submit_button"
          />
        </Form>
      )}
    </Formik>
  );
}

export default BookingForm;
