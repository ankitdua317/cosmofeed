import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import fetchAllCategories from "@/api/fetchAllCategories";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { selectCategories, setCategories } from "@/redux/reducers/app";
import { HIDE_CATEGORIES_PATH_LIST } from "@/constants/common";
import Cart from "@/icons/Cart";
import User from "@/icons/User";
import Hamburger from "@/icons/Hamburger";
import SideDrawer from "./SideDrawer";
import AllCategories from "./AllCategories";

const Header = () => {
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(selectCategories);
  const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);
  const hideCategory = HIDE_CATEGORIES_PATH_LIST.includes(asPath);

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await fetchAllCategories();
      dispatch(setCategories(response));
    };

    if (categories.length === 0) {
      getAllCategories();
    }
  }, [categories, dispatch]);

  return (
    <header className="w-full">
      <div
        className={`${
          hideCategory ? "bg-black text-white" : "bg-white text-black"
        } flex items-center justify-center p-8`}
      >
        <Link
          aria-label="Home"
          aria-description="Go to home page"
          lang="en"
          href="/"
          className="font-bold text-4xl"
        >
          Urban
        </Link>
      </div>
      {!hideCategory ? (
        <div className="flex items-center justify-between lg:justify-center bg-black py-5 px-6 lg:px-10 min-h-[60px]">
          {categories.length > 0 ? (
            <div className="hidden lg:flex items-center justify-center flex-wrap w-full max-w-2xl xl:max-w-4xl">
              <AllCategories list={categories} className="text-white" />
            </div>
          ) : null}
          <Hamburger
            className="flex lg:hidden stroke-white fill-white"
            onClick={() => setIsSideDrawerVisible(true)}
          />
          <div className="flex items-center absolute right-10">
            <User className="stroke-white mr-12" />
            <Link
              aria-label="Checkout"
              aria-description="Click to checkout"
              lang="en"
              href="/checkout"
            >
              <Cart pathClassName="stroke-white	stroke-[0.5]" />
            </Link>
          </div>
        </div>
      ) : null}

      <SideDrawer
        isOpen={isSideDrawerVisible}
        onClose={(open) => setIsSideDrawerVisible(open)}
      >
        <div className="flex flex-col py-4 pl-4">
          <h2 className="font-bold my-4">All Categories</h2>
          <AllCategories
            list={categories}
            className="text-black"
            onLinkClick={() => setIsSideDrawerVisible(false)}
          />
        </div>
      </SideDrawer>
    </header>
  );
};

export default Header;
