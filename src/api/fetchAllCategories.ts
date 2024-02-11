const fetchAllCategories = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    return data as string[];
  } catch {
    return [];
  }
};

export default fetchAllCategories;
