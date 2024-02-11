import { useEffect, useState } from "react";
import Image from "next/image";
import { CartItem, Product } from "@/models/Product";

interface Props {
  product: Product;
}
const ProductCard = ({ product }: Props) => {
  const { title, id, images, price } = product;
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const item: CartItem | undefined = cartItems.find(
    (item: any) => item.product.id === id
  );

  const [quantity, setQuanity] = useState(item ? item.quantity : 0);

  const handleAddToCart = (isAdd: boolean = true) => {
    setQuanity(quantity + 1);
    localStorage.setItem(
      "cartData",
      JSON.stringify([
        ...cartItems.filter((p) => p.product.id !== id),
        { quantity: item ? item.quantity + 1 : 1, product },
      ])
    );
  };

  useEffect(() => {
    const data = localStorage.getItem("cartData");
    const items = data ? JSON.parse(data) : [];
    const item = items.find((p: CartItem) => p.product.id === id);
    if (item) {
      setQuanity(item.quantity);
    }
    setCartItems(items);
  }, [id]);

  return (
    <div className="">
      <div className="relative md:h-[300px] h-[200px]">
        <Image
          className="h-auto w-auto"
          alt={title}
          src={images[0]}
          fill
          quality={100}
        />
      </div>
      <h4 className="mt-3 truncate">{title}</h4>
      <p>${price}</p>
      <button
        className="border text-center py-2 px-6 w-full text-sm mt-4"
        onClick={() => handleAddToCart()}
      >
        {quantity === 0 ? (
          "Add to Cart"
        ) : (
          <div
            onClick={() => handleAddToCart(false)}
            className="flex justify-between"
          >
            <span>-</span> {quantity}{" "}
            <span onClick={() => handleAddToCart()}>+</span>
          </div>
        )}
      </button>
    </div>
  );
};

export default ProductCard;
