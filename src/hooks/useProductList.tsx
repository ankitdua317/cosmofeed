import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { Product } from "@/models/Product";
import fetchProductList from "@/api/fetchProductList";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import fetchProductByCategory from "@/api/fetchProductByCategory";

const useProductList = (category: string) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [skip, setSkip] = useState(PRODUCT_QUERY_LIMIT);

  const fetchNext = useCallback(async () => {
    setLoading(true);
    const productData = await fetchProductByCategory(
      category,
      PRODUCT_QUERY_LIMIT,
      skip
    );
    if (productData) {
      setProductList((prev) => prev.concat(...productData.products));
    }
    setLoading(false);
    setSkip((prev) => prev + PRODUCT_QUERY_LIMIT);
  }, [category, skip]);

  return { productList, loading, fetchNext };
};

export default useProductList;
