import React from "react";
import PageNav from "../components/PageNav";

const Pricing = () => {
  return (
    <div className="bg-[#2d3439] w-full h-full">
      <PageNav />
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center sm:flex-row  sm:justify-around mt-32 sm:mt-0">
          {/* image  */}

          <img src="img-1.jpg" alt="img" className="w-80 " />

          {/* content */}
          <div className="text-white w-80 mx-24 mb-10 mt-2 sm:mt-0">
            <h1 className="font-bold text-4xl mb-5">About WorldWise</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              accusamus numquam optio a praesentium quo laborum voluptatem sit
              cum cupiditate consequuntur ab neque eum illo aliquid, cumque eos
              maiores voluptatum.
              <br className="mt-2" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad et
              autem suscipit exercitationem ullam in, fugiat soluta doloremque
              porro quibusdam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
