import Image from "next/image";
import { ProductCarousal } from "@/models/Home";
import Carousal from "./Carousal";
import { getAllImages } from "@/utils/common";

interface ImageProps {
  src: string;
  alt?: string;
}

const CarousalImage = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt || src}
      className="w-full block rounded-lg"
      fill
    />
  );
};

const CarousalWithOneImage = ({ image }: { image: string }) => {
  return (
    <article className="relative w-full h-[300px] md:h-[800px]">
      <CarousalImage src={image} />
    </article>
  );
};

const CaraousalWithTwoImage = (images: string[]) => {
  return (
    <article className="w-full h-[300px] md:h-[800px] flex">
      <div className="relative w-1/2 h-full">
        <CarousalImage src={images[0]} />
      </div>
      <div className="relative w-1/2 h-full ml-2 rounded-lg">
        <CarousalImage src={images[1]} />
      </div>
    </article>
  );
};

const CaraousalWithThreeImage = (images: string[]) => {
  return (
    <article className="w-full h-[300px] md:h-[800px] flex">
      <div className="relative w-2/3 h-[300px] md:h-[800px]">
        <CarousalImage src={images[0]} />
      </div>
      <div className="flex flex-col relative w-1/3 h-[300px] md:h-[800px] ml-2">
        <div className="relative w-full h-1/2">
          <CarousalImage src={images[1]} />
        </div>
        <div className="relative w-full h-1/2 mt-2">
          <CarousalImage src={images[2]} />
        </div>
      </div>
    </article>
  );
};

const MultiViewCarousal = ({ products }: ProductCarousal) => {
  const allImages = getAllImages(products);

  return (
    <section className="overflow-hidden w-full max-w-7xl">
      <Carousal
        title="BestSeller"
        pages={products.length}
        carouselClassName="hidden xl:flex"
        handlerClassName="hidden xl:flex mx-4"
      >
        {products.map(({ images }, index) => {
          switch (images.length) {
            case 1:
              return <CarousalWithOneImage key={index} image={images[0]} />;
            case 2:
              return <CaraousalWithTwoImage key={index} {...images} />;
            default:
              return <CaraousalWithThreeImage key={index} {...images} />;
          }
        })}
      </Carousal>
      <Carousal
        title="BestSeller"
        pages={allImages.length}
        carouselClassName="flex xl:hidden"
        handlerClassName="flex xl:hidden mx-4"
      >
        {allImages.map((images, index) => (
          <CarousalWithOneImage key={index} image={images} />
        ))}
      </Carousal>
    </section>
  );
};

export default MultiViewCarousal;
