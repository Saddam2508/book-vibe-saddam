import React from "react";
import bannerImg from "../../assets/hero-banner.png";

const Banner = () => {
  return (
    <div className="container mx-auto my-10 bg-gray-200 flex items-center justify-between rounded-lg py-10 px-15">
      <div className="banner-left space-y-6">
        <h2 className="text-4xl font-bold">
          Books to freshen up <br /> your bookshelf
        </h2>
        <button className="bg-green-500 text-white px-4 py-4 rounded-lg font-bold cursor-pointer">
          View The List
        </button>
      </div>
      <div className="banner-right">
        <img src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
