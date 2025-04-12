// this will be the main landing page, like localhost:3000
import Image from "next/image";

import React from "react";
//import netflixbackground from "../public/images/netflixbackground.jpg";

const page = () => {
  return (
    <>
      <div>
        <Image
          src="/images/netflixbackground.jpg"
          alt="background "
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute items-center place-items-center justify-center text-white">
          <h1 className="text-4xl font-bold place-items-center">
            Unnlimited movies, TV Shows and more.
          </h1>
          <h1 className="text-2xl font-bold">
            Watch anywhere. Cancel anytime.
          </h1>
          <h1 className="">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h1>
        </div>
      </div>
    </>
  );
};

export default page;
