function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
      <Image src={image} height={200} width={200} objectFit="contain" />
    </div>
  );
}

export default Product;
