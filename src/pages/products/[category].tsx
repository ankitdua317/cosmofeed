import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import { ProductData } from "@/models/Product";
import useProductList from "@/hooks/useProductList";
import usePagination from "@/hooks/usePagination";
import fetchProductByCategory from "@/api/fetchProductByCategory";
import Spinner from "@/components/Spinner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  initialProductsData: ProductData;
}

const ProductListingPage = ({ initialProductsData }: Props) => {
  const { query } = useRouter();
  const { productList, loading, fetchNext } =
    useProductList(initialProductsData);
  const { infiniteScrollRef } = usePagination(fetchNext, {
    rootMargin: "0px 0px 300px 0px",
  });

  if (!productList || productList.length === 0) {
    return (
      <div className="text-center absolute top-[50%] right-0 left-0 bottom-0">
        Oops! No Products Found, please search for something else
      </div>
    );
  }

  return (
    <main className="bg-white pb-[100px]">
      <Header />
      <section className="md:px-[100px] px-[30px] mt-8">
        <h2 className="capitalize">{query.category}</h2>
        <div className="mt-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 gap-y-8 md:gap-y-12">
          {productList.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        {loading && <Spinner />}
        <div
          ref={infiniteScrollRef}
          className={loading ? "hidden" : undefined}
        />
      </section>
      <Footer />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  if (params?.category) {
    const category = params.category as string;
    const initialProductsData = await fetchProductByCategory(category);

    if (initialProductsData) {
      return {
        props: {
          initialProductsData,
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
