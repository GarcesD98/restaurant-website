import "../styles/Contact.css";
import Reveal from "./Reveal";

function Contact() {
    return (
    <Reveal>   
        <section className="contact" id="contact">

            <div className="contact-container">

                {/* Contact Information */}
                <div className="contact-info">

                    <p className="section-tag">Get In Touch</p>

                    <h2>Visit Harvest Table</h2>

                    <p className="contact-intro">
                        We'd love to welcome you. Stop by for an unforgettable
                        meal, or get in touch with us to learn more.
                    </p>

                    <div className="contact-details">

                        <div className="contact-item">
                            <span className="contact-icon">📍</span>

                            <div>
                                <h3>Address</h3>

                                <a
                                    href="https://www.google.com/maps"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    123 Market Street<br />
                                    San Diego, CA 92101
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">📞</span>

                            <div>
                                <h3>Phone</h3>

                                <a href="tel:+16195550123">
                                    (619) 555-0123
                                </a>
                            </div>
                        </div>

                        <div className="contact-item">
                            <span className="contact-icon">✉️</span>

                            <div>
                                <h3>Email</h3>

                                <a href="mailto:hello@harvesttable.com">
                                    hello@harvesttable.com
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Hours */}
                <div className="contact-hours">

                    <h3>Opening Hours</h3>

                    <div className="hours-row">
                        <span>Monday – Thursday</span>
                        <span>11am – 9pm</span>
                    </div>

                    <div className="hours-row">
                        <span>Friday</span>
                        <span>11am – 10pm</span>
                    </div>

                    <div className="hours-row">
                        <span>Saturday</span>
                        <span>10am – 10pm</span>
                    </div>

                    <div className="hours-row">
                        <span>Sunday</span>
                        <span>10am – 8pm</span>
                    </div>

                    <a
                        href="/reservation"
                        className="contact-reserve-btn"
                    >
                        Reserve a Table
                    </a>

                </div>

            </div>

        </section>
    </Reveal> 
    );
}

export default Contact;