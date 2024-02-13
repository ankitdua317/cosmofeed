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
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

export default CarousalImage;
