import { get } from ".";
import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { ProductData } from "@/models/Product";

const fetchProductList = async (
  query = "",
  limit = PRODUCT_QUERY_LIMIT,
  skip = 0
) => {
  try {
    return get<ProductData>(
      `https://dummyjson.com/products/search?q=${query}&limit=${limit}&skip=${skip}`
    );
  } catch {
    return null;
  }
};

export default fetchProductList;
