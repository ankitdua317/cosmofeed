import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import { ProductData } from "@/models/Product";
import useProductList from "@/hooks/useProductList";
import usePagination from "@/hooks/usePagination";
import fetchProductByCategory from "@/api/fetchProductByCategory";

interface Props {
  productsData: ProductData;
  category: string;
}

const ProductListingPage = ({ productsData, category }: Props) => {
  const {
    query: { search },
  } = useRouter();
  const { products } = productsData;
  const { productList, loading, fetchNext } = useProductList(category);
  const { infiniteScrollRef } = usePagination(fetchNext, {
    rootMargin: "0px 0px 300px 0px",
  });
  const finalProducts = [...productList, ...products];

  if (!products || products.length === 0) {
    return (
      <div className="text-center absolute top-[50%] right-0 left-0 bottom-0">
        Oops! No Products Found, please search for something else
      </div>
    );
  }

  return (
    <main>
      <section className="md:px-[100px] px-[30px] mt-16">
        <h2 className="capitalize">{search}</h2>
        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 gap-y-8 md:gap-y-12">
          {finalProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
      {/* <div ref={infiniteScrollRef} className={loading ? "hidden" : undefined} />
      {loading && (
        <div
          className={`w-[200px] h-[200px] border-t-2 border-b-2 border-primary-100 rounded-full animate-spin mx-auto`}
        />
      )} */}
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  if (params?.category) {
    const category = params.category as string;
    const productsData = await fetchProductByCategory(category);

    if (productsData) {
      return {
        props: {
          productsData,
          category,
        },
      };
    }
    return {
      notFound: true,
    };
  }

  return {
    notFound: true,
  };
};

export default ProductListingPage;
