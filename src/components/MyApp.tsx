import { PropsWithChildren, useEffect } from "react";
import { CART_KEY } from "@/constants/common";
import { useAppDispatch } from "@/redux/store";
import { updateCart } from "@/redux/reducers/app";
import { getLocalStorageKey } from "@/utils/common";
import { CartItem } from "@/models/Product";
import Header from "./Header";
import Footer from "./Footer";

export default function MyApp({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const items = getLocalStorageKey<CartItem[], null>(CART_KEY);
    if (items) {
      dispatch(updateCart(items));
    }
  }, [dispatch]);

  return (
    <main className="bg-white pb-[100px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
}
