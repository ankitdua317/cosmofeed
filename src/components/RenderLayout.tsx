import { Banner, Data, ProductCarousal } from "@/models/Home";
import BannerImage from "./BannerImage";
import MultiViewCarousal from "./MultiViewCarousal";

const RenderLayouts = ({ components }: Data) => {
  return (
    <>
      {components.map(({ name, props }, index) => {
        switch (name) {
          case "herobanner":
            return (
              <BannerImage key={`${name}-${index}`} {...(props as Banner)} />
            );
          case "productcarousel":
            return (
              <MultiViewCarousal
                key={`${name}-${index}`}
                {...(props as ProductCarousal)}
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default RenderLayouts;
