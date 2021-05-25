import Image from "next/image";

function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
      <Image
        loading="lazyloading"
        src={image}
        height={200}
        width={200}
        objectFit="contain"
      />
    </div>
  );
}

export default Product;
