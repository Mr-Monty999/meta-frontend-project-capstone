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

test("initializeTimes in booking form is working", () => {
  render(
    <MemoryRouter initialEntries={["/booking"]}>
      <Main />
    </MemoryRouter>
  );

  const element = screen.getByTestId("time");
  expect(element.hasChildNodes()).toBe(true);
});

test("updateTimes in booking form is working", () => {
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
