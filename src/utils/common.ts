import { ProductCarousalImage } from "@/models/Home";

const getAllImages = (list: ProductCarousalImage[]) => {
  const res: string[] = [];
  list.forEach(({ images }) => {
    res.push(...images);
  });
  return res;
};

export default getAllImages;
