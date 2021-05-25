import Product from "./Product";
function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2">
      {products.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
          category={category}
          image={image}
        />
      ))}
    </div>
  );
}

export default ProductFeed;
