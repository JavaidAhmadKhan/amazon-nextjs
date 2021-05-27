import Image from "next/image";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  hasPrime,
}) {
  return <div className="grid grid-cols-5">
<Image/>
  </div>
}

export default CheckoutProduct;
