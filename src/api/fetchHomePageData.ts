import { get } from ".";
import { LayoutAPIResponse } from "@/models/Home";
import DATA from "@/constants/home";

const fetchHomePageData = async () => {
  try {
    const { data } = await get<LayoutAPIResponse>(
      "https://run.mocky.io/v3/48f264ae-db1c-402b-987f-8e9ee653d10b"
    );
    return data;
  } catch (err) {
    return DATA;
  }
};

export default fetchHomePageData;
