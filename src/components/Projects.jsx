import React from "react";
import musicui from "../assets/projects/cng1.png";
import image from "../assets/projects/image.png";
import discordbot01 from "../assets/projects/discordbot01.png";
import spotify from "../assets/projects/spotify.png";
import gang from "../assets/projects/gang.png";

// Icons
import { RiDownload2Fill } from "react-icons/ri";

const Projects = () => {
  const myworks = [
    {
      id: 1,
      name: "Discord Bot",
      src: discordbot01,
      link: "https://github.com/MrGrootx/Discord-Bot",
    },
    {
      id: 2,
      name: "Gang Site",
      src: gang,
      link: "https://github.com/MrGrootx/gangsite",
    },
    {
      id: 3,
      name: "Image Store",
      src: image,
      link: "https://github.com/MrGrootx/firebase-image-store",
    },
    {
      id: 4,
      name: "Spotify UI",
      src: spotify,
      link: "https://github.com/MrGrootx/spotify",
    },
    {
      id: 5,
      name: "Music UI ",
      src: musicui,
      link: "https://github.com/MrGrootx/MUSIC-UI",
    },
  ];

  return (
    <div
      name="Works"
      className="bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800 w-full text-white md:h-screen pb-24 md:pb-0 sm:pb-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="md:text-4xl text-3xl font-bold text-[#40F8FF] text-center md:text-start">
            My Works
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {myworks.map(({ id, name, src, link }) => (
            <div key={id} className="shadow-sm shadow-gray-500 rounded-lg">
              <img src={src} alt="" className="rounded-md105" />
              <div className="flex justify-center items-center text-center ">
                <div className="text-center text-white mx-auto text-xs">{name}</div>
                <button
                  onClick={() => window.open(link, "_blank")}
                  className="px-6 py-3 m-3 hover:text-gray-500 md:mx-auto"
                >
                  <RiDownload2Fill
                    size={20}
                    color="white"
                    className="hover:text-gray-200"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
