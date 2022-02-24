import Link from "next/link";
import React from "react";

const DoctorsCard = ({ id, title, btnText, link, img }) => {
  return (
    <div className="mb-4 text-center">
      <div className="mb-5">
        <img alt="" src={img} className="mx-auto" />
      </div>
      <h6 className="mb-2 text-lg font-bold text-black">{title}</h6>
      <div className="text-sm font-medium text-steelblue-tint-100">
        <Link passHref href={link}>
          <a className="px-3 py-2">{btnText}</a>
        </Link>
      </div>
    </div>
  );
};

export default DoctorsCard;
