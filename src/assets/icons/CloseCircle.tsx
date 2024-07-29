import { SVGProps } from "react";
const SvgCloseCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={17}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.5 17.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Zm3.766-12.266a.8.8 0 0 1 0 1.132L9.63 9l2.635 2.634a.8.8 0 1 1-1.132 1.132L8.5 10.13l-2.634 2.635a.8.8 0 1 1-1.132-1.132L7.37 9 4.734 6.366a.8.8 0 0 1 1.132-1.132L8.5 7.87l2.634-2.635a.8.8 0 0 1 1.132 0Z"
      fill={props.color}
    />
  </svg>
);
export default SvgCloseCircle;
