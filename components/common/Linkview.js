import { vector } from "constant/assets";
import Link from "next/link";
import React from "react";
import Right from "components/common/svgs/right.svg";

const Linkview = ({ link = "" }) => {
  return (
    <div
      className={`text-center md:text-right`}
    >
      <Link passHref href={link}>
        <a className="w-full md:w-auto inline-block  border-2 md:border-0 border-steelblue rounded text-base px-4 py-2 font-medium text-steelblue">
          View All 
          <span className="ml-3 text-steelblue inline-block relative top-[2px]"><Right /></span>
        </a>
      </Link>
    </div>
  );
};

export default Linkview;
