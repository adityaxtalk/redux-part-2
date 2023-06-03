import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "The first book I ever wrote",
  },
  {
    id: "p2",
    price: 4,
    title: "My Second Book",
    description: "The second book I ever wrote",
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((element) => (
          <ProductItem
            key={element.id}
            id={element.id}
            title={element.title}
            price={element.price}
            description={element.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
