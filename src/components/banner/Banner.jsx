import React from "react";
import bannerImg from "../../assets/hero-banner.png";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <motion.div initial={{opacity: 0, y: 150}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                 transition={{
                duration: 0.45,
                ease: "easeOut",
            }} className="container mx-auto my-10 bg-gray-200 flex flex-col-reverse sm:flex-row items-center justify-between rounded-lg py-10 px-15">
      <div className="banner-left space-y-6">
        <h2 className="text-xl text-center sm:text-left sm:text-4xl font-bold">
          Books to freshen up <br className="hidden sm:block"/> your bookshelf
        </h2>
      <div className="text-center sm:text-left">
          <button className="bg-green-500 text-white px-4 py-4 rounded-lg font-bold cursor-pointer hover:bg-green-400">
          View The List
        </button>
      </div>
      </div>
      <div className="banner-right">
        <img src={bannerImg} alt="" />
      </div>
    </motion.div>
  );
};

export default Banner;
