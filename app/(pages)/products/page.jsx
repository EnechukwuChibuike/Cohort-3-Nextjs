import { products } from "./product";

function Products() {
  return (
    <section className="flex flex-wrap justify-around">
      {products.map((product) => (
        <figure
          key={product.id}
          className="min-h-60 min-w-60 flex justify-center items-center shadow-xl"
        >
          <figcaption>{product.name}</figcaption>
        </figure>
      ))}
    </section>
  );
}

export default Products;
