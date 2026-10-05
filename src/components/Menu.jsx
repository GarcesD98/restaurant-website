import "../styles/Menu.css";
import Reveal from "./Reveal";

const menuItems = [
    {
        category: "Starter",
        name: "Burrata & Heirloom Tomatoes",
        price: "$16",
        description: "Fresh burrata, heirloom tomatoes, basil, balsamic glaze."
    },
    {
        category: "Starter",
        name: "Crispy Calamari",
        price: "$15",
        description: "Lightly fried calamari served with lemon herb aioli and marinara."
    },
    {
        category: "Starter",
        name: "Roasted Beet Salad",
        price: "$14",
        description: "Roasted beets, goat cheese, arugula, candied walnuts, and citrus vinaigrette."
    },
    {
        category: "Entrée",
        name: "Filet Mignon",
        price: "$42",
        description: "8oz filet served with garlic mashed potatoes and seasonal vegetables."
    },
    {
        category: "Entrée",
        name: "Herb-Roasted Chicken",
        price: "$30",
        description: "Herb-roasted chicken with fingerling potatoes, seasonal vegetables, and pan jus."
    },
    {
        category: "Entrée",
        name: "Pan-Seared Salmon",
        price: "$34",
        description: "Atlantic salmon with roasted vegetables, wild rice, and lemon herb butter."
    },
    {
        category: "Pasta",
        name: "Wild Mushroom Risotto",
        price: "$28",
        description: "Creamy arborio rice with parmesan, mushrooms, and fresh herbs."
    },
    {
        category: "Pasta",
        name: "Truffle Tagliatelle",
        price: "$29",
        description: "Fresh tagliatelle with wild mushrooms, parmesan, herbs, and black truffle."
    },
    {
        category: "Pasta",
        name: "Spicy Rigatoni",
        price: "$26",
        description: "Rigatoni tossed in a spicy tomato cream sauce with parmesan and fresh basil."
    },
    {
        category: "Dessert",
        name: "Crème Brûlée",
        price: "$12",
        description: "Classic vanilla custard with caramelized sugar."
    },
    {
        category: "Dessert",
        name: "Chocolate Lava Cake",
        price: "$13",
        description: "Warm chocolate cake with a molten center, vanilla bean ice cream, and fresh berries."
    },
    {
        category: "Dessert",
        name: "Seasonal Cheesecake",
        price: "$12",
        description: "House-made cheesecake featuring seasonal fruit and a buttery graham cracker crust."
    }
];

function Menu() {
    return (
      <Reveal>
        <section className="menu" id="menu">
          <p className="section-tag">Our Menu</p>

        <h2>Chef's Signature Selections</h2>

        <p className="menu-subtitle">
            Carefully crafted dishes made with premium ingredients and seasonal flavors.
        </p>

        <div className="menu-categories">

    <div className="menu-category">
        <h3 className="category-title">Starters</h3>

        <div className="menu-list">
            {menuItems
                .filter((item) => item.category === "Starter")
                .map((item) => (
                    <div className="menu-item" key={item.name}>
                        <div className="menu-top">
                            <h3>{item.name}</h3>
                            <span>{item.price}</span>
                        </div>

                        <p>{item.description}</p>
                    </div>
                ))}
        </div>
    </div>

    <div className="menu-category">
        <h3 className="category-title">Entrées</h3>

        <div className="menu-list">
            {menuItems
                .filter((item) => item.category === "Entrée")
                .map((item) => (
                    <div className="menu-item" key={item.name}>
                        <div className="menu-top">
                            <h3>{item.name}</h3>
                            <span>{item.price}</span>
                        </div>

                        <p>{item.description}</p>
                    </div>
                ))}
        </div>
    </div>

    <div className="menu-category">
        <h3 className="category-title">Pasta & Risotto</h3>

        <div className="menu-list">
            {menuItems
                .filter((item) => item.category === "Pasta")
                .map((item) => (
                    <div className="menu-item" key={item.name}>
                        <div className="menu-top">
                            <h3>{item.name}</h3>
                            <span>{item.price}</span>
                        </div>

                        <p>{item.description}</p>
                    </div>
                ))}
        </div>
    </div>

    <div className="menu-category">
        <h3 className="category-title">Desserts</h3>

        <div className="menu-list">
            {menuItems
                .filter((item) => item.category === "Dessert")
                .map((item) => (
                    <div className="menu-item" key={item.name}>
                        <div className="menu-top">
                            <h3>{item.name}</h3>
                            <span>{item.price}</span>
                        </div>

                        <p>{item.description}</p>
                    </div>
                ))}
        </div>
    </div>

</div>
    </section>
 </Reveal>
    );
}

export default Menu;