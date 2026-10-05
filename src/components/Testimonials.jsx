import "../styles/Testimonials.css";
import Reveal from "./Reveal";

const testimonials = [
    {
        name: "Sarah Mitchell",
        review:
        "An incredible dining experience from start to finish. The food was beautifully presented and absolutely delicious.",
    },
    {
        name: "James Anderson",
        review:
        "Harvest Table has quickly become one of our favorite restaurants. The atmosphere, service, and food are all outstanding.",
    },
    {
        name: "Emily Rodriguez",
        review:
        "Everything was perfect. The staff was welcoming, the restaurant was beautiful , and the pasta was unforgettable.",
    },
];

function Testimonials() {
return (
    <Reveal>
    <section className="testimonials">
        <p className="section-tag">Guest Experience</p>

        <h2>What Our Guests Say</h2>

        <p className="testimonials-subtitle">
            We're proud to create memorable experiences for every guest who walks through our doors.
        </p>

        <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div className="testimonial-card" key={testimonial.name}>

                <div className="stars">
                ★ ★ ★ ★ ★
                </div>

                <p className="testimonial-review">
                    "{testimonial.review}"
                </p>

                <h3>{testimonial.name}</h3>

                <span>Verified Guest</span>

             </div>
            ))}
        </div>

    </section>
</Reveal>
 );
}

export default Testimonials;