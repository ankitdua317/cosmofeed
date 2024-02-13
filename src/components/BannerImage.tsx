import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Banner } from "@/models/Home";

const BannerImage = ({ image }: Banner) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // If image is loaded from cache
    if (imageRef?.current?.complete) setIsImageLoaded(true);
  }, []);

  return (
    <>
      <div className="relative w-screen h-[300px] md:h-[800px] mb-4">
        <Image
          className={`h-auto w-auto ${isImageLoaded ? "" : "invisible"}`.trim()}
          alt={image.alt}
          src={image.src}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
          onLoad={() => setIsImageLoaded(true)}
        />
      </div>
      {!isImageLoaded && (
        <div className="w-screen h-[300px] md:h-[800px] bg-neutral-300 animate-pulse" />
      )}
    </>
  );
};

export default BannerImage;
