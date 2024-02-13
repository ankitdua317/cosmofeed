import Image from "next/image";

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

export default CarousalImage;
