import { useEffect, useState } from "react";
import fetchAllCategories from "@/api/fetchAllCategories";
import Cart from "@/icons/Cart";
import User from "@/icons/User";
import Link from "next/link";
import Hamburger from "@/icons/Hamburger";
import SideDrawer from "./SideDrawer";

interface AllCategoriesProps {
  list?: string[];
}

const AllCategories = ({ list }: AllCategoriesProps) => {
  return (
    <>
      {list?.map((item, index) => (
        <Link
          key={index}
          href={`/products?search=${item}`}
          className="mx-2 my-1"
        >
          {item}
        </Link>
      ))}
    </>
  );
};

const Header = () => {
  const [allCategories, setAllCategories] = useState<string[]>();
  const [isSideDrawerVisible, setIsSideDrawerVisible] = useState(false);

  useEffect(() => {
    const getAllCategories = async () => {
      try {
        const res = await fetchAllCategories();
        setAllCategories(res);
      } catch (error) {
        //TODO:: Handle error
      }
    };

    getAllCategories();
  }, []);

  return (
    <header className="w-full">
      <div className="flex items-center justify-center bg-white p-8">
        <h1 className="font-bold text-black">Urban</h1>
      </div>
      <div className="flex items-center justify-between xl:justify-center bg-black py-5 px-6 xl:px-10">
        {allCategories ? (
          <div className="hidden xl:flex items-center justify-center flex-wrap w-full max-w-6xl">
            <AllCategories list={allCategories} />
          </div>
        ) : null}
        <Hamburger
          className="flex xl:hidden"
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
        <div className="flex flex-col pt-20">
          <h2 className="font-bold my-4">All Categories</h2>
          <AllCategories list={allCategories} />
        </div>
      </SideDrawer>
    </header>
  );
};

export default Header;
