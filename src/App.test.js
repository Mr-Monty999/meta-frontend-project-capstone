import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import Main from "./components/Main";
import { MemoryRouter } from "react-router-dom";

test("Renders the BookingPage heading", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  const headingElement = screen.getByText("Booking Now");
  expect(headingElement).toBeInTheDocument();
});

test("initializeTimes is working in booking form", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  const element = screen.getByTestId("time");
  expect(element.hasChildNodes()).toBe(true);
});

test("updateTimes is working in booking form", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  const times = screen.getByTestId("time");
  const date = screen.getByTestId("date");
  fireEvent.change(date, { target: { value: "2023-12-31" } });
  expect(times.hasChildNodes()).toBe(true);
});

test("HTML5 validation is applied in booking form", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  let date = screen.getByTestId("date"),
    time = screen.getByTestId("time"),
    guests = screen.getByTestId("number_of_guests"),
    occasion = screen.getByTestId("occasion");

  expect(date).toHaveAttribute("required");
  expect(time).toHaveAttribute("required");
  expect(guests).toHaveAttribute("required");
  expect(guests).toHaveAttribute("min");
  expect(guests).toHaveAttribute("max");
  expect(occasion).toHaveAttribute("required");
});

test("JavaScript validation is applied in booking form", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  let date = screen.getByTestId("date"),
    time = screen.getByTestId("time"),
    guests = screen.getByTestId("number_of_guests"),
    occasion = screen.getByTestId("occasion"),
    submitButton = screen.getByTestId("submit_button"),
    bookingForm = screen.getByTestId("booking_form");

  expect(submitButton).toBeDisabled();

  fireEvent.change(guests, { target: { value: 8 } });
  fireEvent.change(time, { target: { value: "17:00" } });
  fireEvent.change(date, { target: { value: "2024-05-23" } });
  fireEvent.change(occasion, { target: { value: "birthday" } });

  expect(submitButton).toBeEnabled();
});
