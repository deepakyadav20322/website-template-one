import React from "react";

const Services = ({}, ref: React.Ref<any>) => {
  return (
    <section
      ref={ref}
      id="service"
      className="flex justify-start items-center flex-col px-2 sm:px-8 mdPlus:px-1"
    >
      <h1 className="text-3xl font-bold mb-5">Our Services</h1>
      <div className="max-w-5xl w-full  flex justify-center items-center ">
        <div className="grid grid-cols-1 mdPlus:grid-cols-2  gap-4 sm:p-4 w-full">
          {/* Repeat this div block for each grid item */}
          {[1, 2, 3, 4].map((_, id) => (
            <div
              key={id}
              className=" h-64 min-w-64 w-full bg-black border-gray-600 border-r-0 border-[1px] rounded-lg shadow-[-10px_-10px_30px_1px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] hover:border-gray-100 transition-colors duration-200"
            >
              <div className="flex flex-col justify-center items-center h-full">
                <span className="text-2xl font-bold"> Service {id + 1}</span>
              </div>
            </div>
          ))}

          {/* End of grid item */}
        </div>
      </div>
    </section>
  );
};

export default Services;
