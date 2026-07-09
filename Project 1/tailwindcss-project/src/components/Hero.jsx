import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div>

      <div className="max-w-[65rem] m-auto text-center py-[8rem]">
        <h1 className="font-serif font-bold text-7xl">
          The Best Way to{" "}
          <span className="bg-[tomato] px-3 rounded-2xl">Review</span> Creative
          Assests
        </h1>

        <p className="text-3xl m-2 font-serif">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla,
          numquam enim rerum suscipit aspernatur dolore iste fuga itaque?
          Dolores{" "}
        </p>

        <div className="text-3xl py-4">
          <Button title="Join Subscription" />
        </div>

      </div>

    </div>
  );
}

export default Hero;
