import { useEffect, useState } from "react";
import fetchAllCategories from "@/api/fetchAllCategories";
import Cart from "@/icons/Cart";
import User from "@/icons/User";
import Link from "next/link";
import Hamburger from "@/icons/Hamburger";
import SideDrawer from "./SideDrawer";

interface AllCategoriesProps {
  list?: string[];
  className?: string;
}

const AllCategories = ({ list, className }: AllCategoriesProps) => {
  return (
    <>
      {list?.map((item, index) => (
        <Link
          key={index}
          href={`/products/${item}`}
          className={`mx-2 my-1 ${className} capitalize`}
        >
          {item}
        </Link>
      ))}
    </>
  );
};

const Header = () => {
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      const response = await fetchAllCategories();
      setAllCategories(response);
    };

    getAllCategories();
  }, []);

  return (
    <header className="w-full">
      <div className="flex items-center justify-center bg-white p-8">
        <h1 className="font-bold text-black">Urban</h1>
      </div>
      <div className="flex items-center justify-between lg:justify-center bg-black py-5 px-6 lg:px-10">
        {allCategories.length > 0 ? (
          <div className="hidden lg:flex items-center justify-center flex-wrap w-full max-w-2xl xl:max-w-4xl">
            <AllCategories list={allCategories} className="text-white" />
          </div>
        ) : null}
        <Hamburger
          className="flex lg:hidden stroke-white fill-white"
          onClick={() => setIsSideDrawerVisible(true)}
        />
        <div className="flex items-center absolute right-10">
          <User className="stroke-white mr-12" />
          <Cart pathClassName="stroke-white	stroke-[0.5]" />
        </div>
      </div>

      <SideDrawer
        isOpen={isSideDrawerVisible}
        onClose={(open) => setIsSideDrawerVisible(open)}
      >
        <div className="flex flex-col py-4 pl-4">
          <h2 className="font-bold my-4">All Categories</h2>
          <AllCategories list={allCategories} className="text-black" />
        </div>
      </SideDrawer>
    </header>
  );
};

export default Header;