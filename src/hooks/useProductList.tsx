import { useCallback, useState } from "react";
import { useRouter } from "next/router";
import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { Product, ProductData } from "@/models/Product";
import fetchProductByCategory from "@/api/fetchProductByCategory";

const useProductList = (initialProductsData: ProductData) => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const { total, products } = initialProductsData;
  const [productList, setProductList] = useState<Product[]>(products);
  const [skip, setSkip] = useState(PRODUCT_QUERY_LIMIT);
  const [totalCount, setTotalCount] = useState(total);

  const fetchNext = useCallback(async () => {
    if (totalCount > skip) {
      setLoading(true);
      const productData = await fetchProductByCategory(
        query.category as string,
        PRODUCT_QUERY_LIMIT,
        skip
      );
      if (productData) {
        const { total, products } = productData;
        setProductList((prev) => prev.concat(...products));
        setTotalCount(total);
      } else {
        setTotalCount(-Infinity);
      }
      setSkip((prev) => prev + PRODUCT_QUERY_LIMIT);
      setLoading(false);
    }
  }, [query.category, skip, totalCount]);

  return { productList, loading, fetchNext };
};

export default useProductList;
