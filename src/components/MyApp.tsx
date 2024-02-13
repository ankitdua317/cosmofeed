import { PropsWithChildren, useEffect } from "react";
import { CART_KEY } from "@/constants/common";
import { useAppDispatch } from "@/redux/store";
import { updateCart } from "@/redux/reducers/app";
import Header from "./Header";
import Footer from "./Footer";

export default function MyApp({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const data = localStorage.getItem(CART_KEY);
    const items = data ? JSON.parse(data) : [];
    dispatch(updateCart(items));
  }, [dispatch]);

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
