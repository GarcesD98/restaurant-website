import "../styles/Footer.css";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand */}
                <div className="footer-brand">

                    <h2>Harvest Table</h2>

                    <p>
                        Seasonal ingredients, thoughtful cooking, and memorable dining experiences.
                    </p>

                    <a 
                        href="/reservation"
                        className="footer-reserve-btn"
                        >
                            Reserve a Table
                        </a>

                </div>

                {/* Quick Links */}
                <div className="footer-column">

                    <h3>Explore</h3>

                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/menu">Menu</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/reservation">Reservation</a></li>
                    </ul>

                </div>

                {/* Contact */}
                <div className="footer-column">

                    <h3>Contact</h3>

                    <ul>
                        <li>
                            <a href="/contact">
                                123 Market Street
                            </a>
                        </li>

                        <li>
                            <a href="tel:619-555-0123">
                            (619) 555-0123
                            </a>
                        </li>

                        <li>
                            <a href="mailto:hello@harvesttable.com">
                                hello@harvesttable.com
                            </a>
                        </li>
                    </ul>

                </div>

                {/* Hours */}
                <div className="footer-column">

                    <h3>Hours</h3>

                    <ul className="footer-hours">
                        <li>Mon - Thu: 11am - 9pm</li>
                        <li>Friday: 11am - 10pm</li>
                        <li>Saturday: 10am - 10pm</li>
                        <li>Sunday: 10am - 8pm</li>
                    </ul>

                </div>

                </div>

                {/* Bottom Footer */}
                <div className="footer-bottom">

                    <p>
                    © 2026 Harvest Table. All rights reserved.
                    </p>

                    <div className="footer-socials">

                        <a href="#" aria-label="Instagram">
                            Instagram
                        </a>

                        <a href="#" aria-label="Facebook">
                            Facebook
                        </a>

                    </div>

                </div>
        </footer>
    );
    
}

export default Footer;