import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const Hamburger = (props: Props) => (
  <svg viewBox="0 0 21 21" width="32" height="32" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4.5 6.5h12" />
      <path d="m4.498 10.5h11.997" />
      <path d="m4.5 14.5h11.995" />
    </g>
  </svg>
);

export default Hamburger;
