import CarousalImage from "../CarousalImage";

const OneImage = ({ image }: { image: string }) => {
  return (
    <article className="relative w-full h-[300px] md:h-[800px]">
      <CarousalImage src={image} />
    </article>
  );
};

export default OneImage;
