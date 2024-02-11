import { get } from ".";

const fetchAllCategories = async () => {
  try {
    return get<string[]>("https://dummyjson.com/products/categories");
  } catch {
    return [];
  }
};

export default fetchAllCategories;
