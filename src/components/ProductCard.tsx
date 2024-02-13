import Image from "next/image";
import useAddToCart from "@/hooks/useAddToCart";
import { Product } from "@/models/Product";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  const { title, id, images, price } = product;
  const { quantity, onAddOrRemoveFromCart } = useAddToCart(id);

  return (
    <>
      <div className="relative md:h-[300px] h-[200px]">
        <Image
          className="h-auto w-auto"
          alt={title}
          src={images[0]}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />
      </div>
      <h4 className="mt-3 truncate">{title}</h4>
      <p>${price}</p>
      {quantity === 0 ? (
        <button
          className="border border-black text-center py-2 px-6 w-full text-sm mt-4"
          onClick={() => onAddOrRemoveFromCart(product, 1)}
        >
          Add to Cart
        </button>
      ) : (
        <button className="border border-black text-center py-2 px-6 w-full text-sm mt-4">
          <div className="flex justify-between">
            <span
              className="w-full"
              onClick={() => onAddOrRemoveFromCart(product, quantity - 1)}
            >
              -
            </span>
            {quantity}
            <span
              className="w-full"
              onClick={() => onAddOrRemoveFromCart(product, quantity + 1)}
            >
              +
            </span>
          </div>
        </button>
      )}
    </>
  );
};

export default ProductCard;
