import CarousalImage from "../CarousalImage";

const ThreeImage = (images: string[]) => {
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

export default ThreeImage;
