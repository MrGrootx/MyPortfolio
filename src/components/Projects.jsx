import React from "react";
import musicui from "../assets/projects/cng1.png";
import image from "../assets/projects/image.png";
import discordbot01 from "../assets/projects/discordbot01.png"
import spotify from "../assets/projects/spotify.png";
import gang from "../assets/projects/gang.png";

// Icons
import { RiDownload2Fill } from "react-icons/ri";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: discordbot01,
    },
    {
      id: 2,
      src: gang,
    },
    {
      id: 3,
      src: image,
    },
    {
      id: 4,
      src: spotify,
    },
    {
      id: 5,
      src: musicui,
    },
  ];

  return (
    <div
      name="Works"
      className="bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800 w-full text-white md:h-screen pb-24 md:pb-0 sm:pb-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl text-3xl font-bold  text-[#40F8FF] text-center md:text-start">
            My Works
          </p>
          
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-sm shadow-gray-500 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md105"
              />
              <div className="flex ">
                <button className="w-1/2 px-6 py-3 m-3 items-center justify-start hover:text-gray-500" >
                  <RiDownload2Fill size={20} color="white" className="hover:text-gray-200 " />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>



    </div>
  );
};

export default Portfolio;
