import React from "react";
import bannerImage from "../../assets/Banner-Mad-Max.jpg";

function Banner() {
  return (
    <div
      className="h-[40vh] md:h-[75vh] bg-cover bg-center flex items-end text-white text-3xl"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div
        className="w-full text-center py-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
      >
        Mad Max
      </div>
    </div>
  );
}
export default Banner;
