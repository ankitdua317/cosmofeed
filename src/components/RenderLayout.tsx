import { Banner, Data } from "@/models/Home";
import BannerImage from "./BannerImage";

const RenderLayouts = ({ components }: Data) => {
  return (
    <>
      {components.map(({ name, props }, index) => {
        switch (name) {
          case "herobanner":
            return (
              <BannerImage key={`${name}-${index}`} {...(props as Banner)} />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default RenderLayouts;
