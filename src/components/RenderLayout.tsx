import { Data } from "@/models/Home";

const RenderLayouts = ({ components }: Data) => {
  return (
    <>
      {components.map((item, index) => {
        switch (item.name) {
          case "herobanner":
            return (
              <div key={`${item.name}-${index}`} className="text-black">
                Hero banner
              </div>
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default RenderLayouts;
