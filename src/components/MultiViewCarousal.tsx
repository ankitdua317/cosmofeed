import { ProductCarousal } from "@/models/Home";
import { getAllImages } from "@/utils/common";
import Carousal from "./Carousal";
import OneImage from "./CarousalTypes/OneImage";
import TwoImage from "./CarousalTypes/TwoImage";
import ThreeImage from "./CarousalTypes/ThreeImage";

const MultiViewCarousal = ({ products }: ProductCarousal) => {
  const allImages = getAllImages(products);

  return (
    <section className="overflow-hidden w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl">
      <Carousal
        title="Best Seller"
        pages={products.length}
        carouselClassName="hidden xl:flex"
        handlerClassName="hidden xl:flex"
      >
        {products.map(({ images }, index) => {
          switch (images.length) {
            case 1:
              return <OneImage key={index} image={images[0]} />;
            case 2:
              return <TwoImage key={index} {...images} />;
            default:
              return <ThreeImage key={index} {...images} />;
          }
        })}
      </Carousal>
      <Carousal
        title="Best Seller"
        pages={allImages.length}
        carouselClassName="flex xl:hidden"
        handlerClassName="flex xl:hidden"
      >
        {allImages.map((images, index) => (
          <OneImage key={index} image={images} />
        ))}
      </Carousal>
    </section>
  );
};

export default MultiViewCarousal;
