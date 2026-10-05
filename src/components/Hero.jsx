import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay">
        <p className="hero-subtitle">
          Farm-to-Table Dining
        </p>

        <h1>
          Fresh Ingredients.
          <br />
          Unforgettable Experiences.
        </h1>

        <p className="hero-description">
          Enjoy handcrafted dishes made with locally sourced ingredients in an elegant atmosphere where every meal is a celebration.
        </p>

        <div className="hero-buttons">
          <a href="/reservation" className="primary-btn">
            Reserve a Table
          </a>

          <a href="/menu" className="secondary-btn">
            View Menu
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;