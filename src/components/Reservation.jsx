import { useState } from "react";
import "../styles/Reservation.css";
import Reveal from "./Reveal";

function Reservation() {
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [phone, setPhone] = useState("");

    function getAvailableTimes(date) {
        if (!date) {
          return [];
        }
      
        const selectedDay = new Date(`${date}T12:00:00`).getDay();
      
        let openingHour = 11;
        let closingHour = 21;
      
        if (selectedDay === 5) {
          // Friday
          openingHour = 11;
          closingHour = 22;
        }
      
        if (selectedDay === 6) {
          // Saturday
          openingHour = 10;
          closingHour = 22;
        }
      
        if (selectedDay === 0) {
          // Sunday
          openingHour = 10;
          closingHour = 20;
        }
      
        const times = [];
      
        for (let hour = openingHour; hour < closingHour; hour++) {
          for (const minutes of [0, 30]) {
            const timeValue = `${String(hour).padStart(2, "0")}:${String(
              minutes
            ).padStart(2, "0")}`;
      
            const displayHour = hour > 12 ? hour - 12 : hour;
            const period = hour >= 12 ? "PM" : "AM";
      
            times.push({
              value: timeValue,
              label: `${displayHour}:${String(minutes).padStart(2, "0")} ${period}`,
            });
          }
        }
      
        return times;
      }

      function isValidUSPhone(phoneNumber) {
        const phonePattern =
            /^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
    
        return phonePattern.test(phoneNumber);
    }

    function handleSubmit(event) {
        event.preventDefault();
    
        if (!isValidUSPhone(phone)) {
            alert("Please enter a valid U.S. phone number.");
            return;
        }
    
        setSubmitted(true);
    
        setPhone("");
        setSelectedDate("");
        setSelectedTime("");
    
        event.target.reset();
    }

  return (
    <Reveal>
      <section className="reservation" id="reservation">
        <div className="reservation-container">

          <div className="reservation-info">
            <p className="section-tag">Reservations</p>

            <h2>Reserve Your Table</h2>

            <p>
              Whether you're celebrating a special occasion or simply enjoying
              a night out, we'd love to welcome you. Reserve your table in just
              a few moments.
            </p>

            <div className="reservation-details">
              <p>
                <strong>Hours</strong>
                <br />
                Mon-Thu: 11am-9pm
              </p>

              <p>
                <strong>Friday</strong>
                <br />
                11am – 10pm
              </p>

              <p>
                <strong>Saturday</strong>
                <br />
                10am – 10pm
              </p>

              <p>
                <strong>Sunday</strong>
                <br />
                10am – 8pm
              </p>
            </div>
          </div>

          <form
            className="reservation-form"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              pattern="^(?:\+1\s?)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$"
              title="Please enter a valid U.S. phone number, such as (619) 555-0123"
            />

            <select required defaultValue="">
              <option value="" disabled>
                Guests
              </option>

              <option value="2">2 Guests</option>
              <option value="4">4 Guests</option>
              <option value="6">6 Guests</option>
              <option value="8+">8+ Guests</option>
            </select>

            <input
  type="date"
  required
  value={selectedDate}
  onChange={(event) => {
    setSelectedDate(event.target.value);
    setSelectedTime("");
  }}
  min={new Date().toISOString().split("T")[0]}
/>

<select
  required
  value={selectedTime}
  onChange={(event) => setSelectedTime(event.target.value)}
  disabled={!selectedDate}
>
  <option value="">
    {selectedDate ? "Select a Time" : "Choose a Date First"}
  </option>

  {getAvailableTimes(selectedDate).map((time) => (
    <option key={time.value} value={time.value}>
      {time.label}
    </option>
  ))}
</select>

            <button
              type="submit"
              className="primary-btn"
            >
              Reserve Table
            </button>

            {submitted && (
              <p className="reservation-success">
                Thank you! Your reservation request has been received.
              </p>
            )}
          </form>

        </div>
      </section>
    </Reveal>
  );
}

export default Reservation;