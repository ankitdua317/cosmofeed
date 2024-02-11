import { PRODUCT_QUERY_LIMIT } from "@/constants/common";
import { ProductData } from "@/models/Product";

const fetchProductByCategory = async (
  category: string,
  limit = PRODUCT_QUERY_LIMIT,
  skip = 0
) => {
  try {
    const url = "https://dummyjson.com/products/category";
    const res = await fetch(`${url}/${category}?&limit=${limit}&skip=${skip}`);
    const data = await res.json();
    return data as ProductData;
  } catch {
    return null;
  }
};

export default fetchProductByCategory;
