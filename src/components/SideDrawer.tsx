import { PropsWithChildren, useEffect } from "react";

type DIRECTION = "LEFT" | "RIGHT";

interface Props extends PropsWithChildren {
  isOpen: boolean;
  direction?: DIRECTION;
  onClose: (open: boolean) => void;
}

const SideDrawer = ({
  isOpen,
  onClose,
  direction = "LEFT",
  children,
}: Props) => {
  const handleClose = () => {
    onClose(false);
  };

  useEffect(() => {
    if (isOpen) document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <section
        className="fixed overflow-hidden bg-gray-900 bg-opacity-25 inset-0 ease-in-out p-0 transition-all duration-300 z-50"
        style={{
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? "visible" : "hidden",
        }}
      >
        <button className="w-screen h-full" onClick={handleClose} />
      </section>
      <section
        className={`fixed max-w-sm min-w-[320px] ${
          direction === "LEFT" ? "left-0" : "right-0"
        } top-0 bg-white h-full shadow-xl ease-in-out transition-all text-black delay-100 duration-300 z-50`}
        style={{
          transform: `translateX(${
            isOpen ? "0px" : direction === "LEFT" ? "-100%" : "100%"
          })`,
        }}
      >
        <article className="relative max-w-lg flex flex-col overflow-y-scroll h-full">
          {children}
        </article>
      </section>
    </>
  );
};

export default SideDrawer;
