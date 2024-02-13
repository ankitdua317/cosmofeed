import Link from "next/link";

interface AllCategoriesProps {
  list: string[];
  className?: string;
  onLinkClick?: VoidFunction;
}

const AllCategories = ({
  list,
  className,
  onLinkClick,
}: AllCategoriesProps) => {
  return (
    <>
      {list.map((item, index) => (
        <Link
          key={index}
          href={`/products/${item}`}
          className={`${className} mx-2 my-1 capitalize`}
          onClick={onLinkClick}
        >
          {item}
        </Link>
      ))}
    </>
  );
};

export default AllCategories;
