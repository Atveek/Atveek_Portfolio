import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const updateImageUrl = () => {
      if (window.matchMedia("(min-width: 700px)").matches) {
        setImageUrl("./atveek_pc.png");
      } else {
        setImageUrl("./atveek.png");
      }
    };

    updateImageUrl(); // Initial check
    window.addEventListener("resize", updateImageUrl); // Update on resize

    return () => window.removeEventListener("resize", updateImageUrl);
  }, []);
  return (
    <div className="relative  pt-20 m-0 md:pb-28 mt-0 overflow-hidden md:overflow-visible">
      <div className="absolute rounded-[284px/246.5px]  w-[568px] h-[493px] top-[27px] right-[0px] translate-x-2/3 md:translate-x-0 md:right-24 lg:top-[170px]  bg-[#20233193] z-0 shadow-[0px_0px_164px_22px_#202331]"></div>
      <div className="relative z-10">
        <div className="flex justify-between flex-col lg:flex-row md:pt-28  text-white mt-8 md:mt-8 mx-6 sm:mx-16 md:mx-24  ">
          <section>
            <h1 className="font-BalooTamma text-[20px] text-[#ffffff9e] md:pt-0 sm:mb-2 sm:text-[40px]">
              Hey, It's Me
            </h1>
            <h1 className="font-BioRhyme text-[30px] sm:text-[48px] sm:mt-3  sm:mb-5">
              Atveek Dungarani.
            </h1>
            <h1 className="font-BalooTamma text-[16px] text-[#ffffffe9] w-[238px] sm:w-[380px] md:w-[597px] sm:text-[20px]">
              I'm probably the most passionate Developer you will ever get to
              work with. If you have a great project that needs some amazing
              skills, I'm your guy.
            </h1>
            <div className="grid grid-flow-row grid-cols-3 w-[200px] md:w-[230px] mt-5 md:mt-10">
              <FaLinkedinIn className="bg-[#ffffffe0] text-4xl text-[#1B1E2A] rounded-md p-1 cursor-pointer md:text-5xl hover:bg-[#6B7CDA] duration-500" />

              <FaGithub className="bg-[#ffffffe0]  text-4xl md:text-5xl text-[#1B1E2A] rounded-md p-1 cursor-pointer hover:bg-[#6B7CDA] duration-500" />

              <button className="border-2 md:text-[20px] bg-[#FFFFFF09] border-white rounded-full w-36 h-12 hover:bg-[#6B7CDA] duration-500">
                Resume{" "}
                <img
                  className="inline-block w-6"
                  src="./icons8-download-48.png"
                  alt="download"
                ></img>
              </button>
            </div>
          </section>
          <section>
            <img
              className="mt-5 md:mt-0 w-auto md:w-5/6 lg:w-full"
              src={imageUrl}
              alt="my_Pic"
            ></img>
          </section>
        </div>
      </div>
    </div>
  );
}
