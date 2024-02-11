const fetchAllCategories = async () => {
  const res = await fetch("https://dummyjson.com/products/categories");
  const data = await res.json();
  return data as string[];
};

export default fetchAllCategories;
