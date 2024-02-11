import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { ProductData } from "@/models/Product";

const fetchProductList = async (
  query = "",
  limit = PRODUCT_QUERY_LIMIT,
  skip = 0
) => {
  try {
    const url = "https://dummyjson.com/products/search";
    const res = await fetch(`${url}?q=${query}&limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data as ProductData;
  } catch {
    return null;
  }
};

export default fetchProductList;
