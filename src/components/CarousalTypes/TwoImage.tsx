import CarousalImage from "../CarousalImage";

const TwoImage = (images: string[]) => {
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

export default TwoImage;
