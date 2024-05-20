"use client";
import { GoArrowUpRight } from "react-icons/go";
import HorizontalScroll from "./HorizontalScroll";
import { LuSend } from "react-icons/lu";
import { FaArrowDownLong } from "react-icons/fa6";

const HeroSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //  const { value } = (e.target as HTMLInputElement);
    e.preventDefault();
    alert("Thank You for connecting with us");
  };

  return (
    <div className=" flex flex-col justify-start items-center sm:mt-32 mt-28">
      <div className=" py-10 flex flex-col justify-center items-center px-2 lg:px-1">
        <h1 className=" text-3xl md:text-[3.5rem] font-extrabold md:max-w-[50rem] w-full text-center leading-[3.5rem]">
          Empower your business with our cutting-edge UI solution
        </h1>
        <p className="max-w-[35rem] pt-3 text-center">
          We are provide more custimizable website template for your service or
          produt which increase your and client efficiency
        </p>
      </div>
      <button className=" group text-lg font-semibold py-2 px-8 bg-[#070707] rounded-md border-2 border-[#251e7e]">
        {" "}
        <span className="mr-2">Explore More</span>
        <GoArrowUpRight
          size={25}
          className="inline-block group-hover:translate-x-1 group-hover:scale-105 transition-transform duration-150 bg-white rounded-full text-black font-bold"
        />
      </button>
      <div className="flex flex-col justify-center items-center my-3 ">
        <form
          onSubmit={handleSubmit}
          action=""
          className=" border-2 border-[#251e7e] rounded-[1.8rem] px-2 py-1 overflow-hidden flex flex-row justify-center items-center focus-within:border-[#6562f5] "
        >
          <input
            type="email"
            placeholder="Your Email..."
            className="bg-transparent outline-none border-2 border-none w-56 smMinus:w-64 sm:w-72 ps-4"
          />
          <button
            type="submit"
            className="text-lg font-semibold py-2 px-4 bg-[#251e7e] rounded-[1.8rem]"
          >
            <span className="hidden md:block">Connect</span>
            <LuSend size={25} className="block md:hidden" />
          </button>
        </form>
      </div>

      {/* {// swiper js theme example  } */}
      <div>
        <HorizontalScroll />
      </div>
      {/* {--------------------------hollow box for gap management -------------} */}
      <div className="h-32 w-full flex flex-row justify-center items-center">
      <div className="scroll-down-indicator__text flex flex-row justify-center items-center w-full font-sm text-[white]">
  Scrloll down <span className="arrow"><FaArrowDownLong  size={20} /></span>
</div>
    </div>
      </div>
  );
};

export default HeroSection;
