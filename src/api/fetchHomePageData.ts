import { get } from ".";
import { Data } from "@/models/Home";
import DATA from "@/constants/home";

const fetchHomePageData = async () => {
  try {
    return await get<Data>(
      "https://run.mocky.io/v3/48f264ae-db1c-402b-987f-8e9ee653d10b"
    );
  } catch (err) {
    return DATA;
  }
};

export default fetchHomePageData;
