import { get } from ".";
import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { ProductData } from "@/models/Product";

const fetchProductByCategory = async (
  category: string,
  limit = PRODUCT_QUERY_LIMIT,
  skip = 0
) => {
  try {
    return get<ProductData>(
      `https://dummyjson.com/products/category/${category}?&limit=${limit}&skip=${skip}`
    );
  } catch {
    return null;
  }
};

export default fetchProductByCategory;
