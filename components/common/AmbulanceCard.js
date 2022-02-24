import { ambulanceImg1 } from "constant/assets";
import React from "react";

const AmbulanceCard = ({ id, title, image, infoLists }) => {
  return (
    <div className="mb-4 rounded-lg border border-steelblue-tint-300 bg-steelblue-tint-500 p-4 lg:p-6">
      <div className="mb-6">
        <img alt="" src={image} className="mx-auto w-full object-cover" />
      </div>
      <div>
        <h6 className="mb-4 border-b border-steelblue-tint-300 pb-4 text-center text-lg font-bold text-steelblue">
          {title}
        </h6>
        <div className="cardList space-y-4">
          {infoLists?.map((info, i) => (
            <div key={info.id} className="flex items-center">
              <p>
                <img
                  src={info.iconImg}
                  alt="ambulance"
                  width="100%"
                  height="100%"
                />
              </p>
              <p className="ml-2 text-black-tint-200">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmbulanceCard;
