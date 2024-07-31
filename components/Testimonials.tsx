import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { testimonials } from "@/data";

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
      <h2 className="heading">
        Kind works from
        <span className="text-purple"> Client</span>
      </h2>
      <div className="flex flex-col items-center">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center antialiased relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
