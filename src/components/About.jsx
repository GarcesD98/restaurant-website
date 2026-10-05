import Reveal from "./Reveal";
import "../styles/About.css";
import interior from "../assets/restaurant-interior.jpg";

function About() {
    return (
        <Reveal>
        <section className="about" id="about">
            <div className="about-image">
                <img src={interior} alt="Elegant restaurant interior" />
            </div>

            <div className="about-content">
                <p className="section-tag">Our Story</p>

                <h2>
                    Where Passion Meets Exceptional Dining
                </h2>

                <p>
                    For over two decades, Harvest Table has combined fresh,
                    locally sourced ingredients with timeless culinary traditions.
                    Every dish is thoughtfully crafted to create memorable dining 
                    experiences for every guest.
                </p>

                <ul>
                    <li>✓ Fresh locally sourced ingredients</li>
                    <li>✓ Award-winning culinary team</li>
                    <li>✓ Seasonal menus inspired by local farms</li>
                </ul>   

                <a href="/gallery" className="primary-btn">
                    View Gallery
                </a>
            </div>
        </section>
    </Reveal>
    );
}

export default About;