import react from "react";
import { FaRegDotCircle } from "react-icons/fa";
const AboutSection = () => {
  return (
    <section className="w-full  px-1 sm:px-2 lg:px-3 my-20">
      <h1 className="text-3xl font-bold text-center mb-5">About Us</h1>
      <div className="max-w-7xl border-2 rounded-md w-full m-auto flex flex-col items-center lg:flex-row lg:justify-around lg:items-start p-4 shadow-2xl">
        <div className="lg:max-w-[60%] w-full px-3 lg:p-6 ">
          <h1 className="text-2xl sm:text-3xl font-bold">
            Vega is powered by AI.
          </h1>
          <div className="ps-4 flex flex-col gap-y-4 py-3">
            <div className="flex flex-row gap-x-3">
              <FaRegDotCircle size={35} className="pb-3 inline-block" />{" "}
              <span className="inline-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                molestias dignissimos saepe adipisci earum obcaecati.
              </span>
            </div>

            <div className="flex flex-row gap-x-3">
              <FaRegDotCircle size={35} className="pb-3 inline-block" />{" "}
              <span className="inline-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                molestias dignissimos saepe adipisci earum obcaecati.
              </span>
            </div>

            <div className="flex flex-row gap-x-3">
              <FaRegDotCircle size={35} className="pb-3 inline-block" />{" "}
              <span className="inline-block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                molestias dignissimos saepe adipisci earum obcaecati.
              </span>
            </div>
          </div>
        </div>
        <div className="max-w-w-80 max-h-80 w-full sm:w-64 sm:h-64 h-full bg-green- overflow-hidden py-3 px-2 rounded-md">
          <img src="comput.png" className="rounded-md m-1 sm:m-0" alt="vbvb" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
