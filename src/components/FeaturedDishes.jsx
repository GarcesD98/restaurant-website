import "../styles/FeaturedDishes.css";
import Reveal from "./Reveal";
import steak from "../assets/steak.jpg";
import pasta from "../assets/pasta.jpg";
import dessert from "../assets/dessert.jpg";

const dishes = [
  {
    title: "Grilled Ribeye",
    image: steak,
    price: "$38",
    description: 
        "Premium ribeye served with roasted vegetable and herb butter."
  },
  {
    title: "Truffle Pasta",
    image: pasta,
    price: "$24",
    description:
      "Fresh handmade pasta tossed with parmesan and black truffle."
  },
  {
    title: "Chocolate Lava Cake",
    image: dessert,
    price: "$12",
    description:
       "Warm chocolate with vanilla bean ice cream." 
  }
];

function FeaturedDishes() {
    return (
    <Reveal>
        <section className="featured">
            <h2>Featured Dishes</h2>

            <p className="featured-subtitle">
                Handcrafted using fresh ingredients and inspired by timeless culinary traditions.
            </p>
        
            <div className="dish-grid">
                {dishes.map((dish) => (
                    <div className="dish-card" key={dish.title}>

                        <div className="chef-badge">
                        ★ Signature Dish
                        </div>
                        <img src={dish.image} alt={dish.title} />

                        <div className="dish-content">
                            <div className="dish-header">
                                <h3>{dish.title}</h3>
                                <span>{dish.price}</span>
                            </div>

                            <p>{dish.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </Reveal>
    );
}

export default FeaturedDishes;