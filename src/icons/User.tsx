import { SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

const User = (props: Props) => (
  <svg viewBox="0 0 32 32" width={40} height={40} {...props}>
    <g strokeWidth="2.30809">
      <path
        d="M16.0005 18.5C18.7619 18.5 21.0005 16.2614 21.0005 13.5C21.0005 10.7386 18.7619 8.5 16.0005 8.5C13.2391 8.5 11.0005 10.7386 11.0005 13.5C11.0005 16.2614 13.2391 18.5 16.0005 18.5Z"
        strokeMiterlimit="10"
      />
      <path
        d="M8.42236 22.8747C9.19028 21.5444 10.2949 20.4396 11.6251 19.6715C12.9554 18.9034 14.4644 18.499 16.0005 18.499C17.5366 18.499 19.0456 18.9034 20.3758 19.6715C21.7061 20.4396 22.8107 21.5444 23.5786 22.8747"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default User;
