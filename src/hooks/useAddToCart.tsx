import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectCartItems, updateCart } from "@/redux/reducers/cart";
import { Product } from "@/models/Product";

const useAddToCart = (id: number) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const item = cartItems.find((item) => item.product.id === id);
  const quantity = item ? item.quantity : 0;

  const onAddOrRemoveFromCart = (product: Product, quantity: number) => {
    const newCart = [...cartItems];
    if (quantity === 0) {
      dispatch(
        updateCart(newCart.filter((item) => item.product.id !== product.id))
      );
    } else {
      const selectedIndex = newCart.findIndex(
        (item) => item.product.id === product.id
      );
      if (selectedIndex > -1) {
        // Create a new object for the item with updated quantity
        newCart[selectedIndex] = {
          ...newCart[selectedIndex],
          quantity: quantity,
        };
      } else {
        // If the item is not in the cart, add it
        newCart.push({ quantity, product });
      }
      dispatch(updateCart(newCart));
    }
  };

  return {
    quantity,
    onAddOrRemoveFromCart,
  };
};

export default useAddToCart;
