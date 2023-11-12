import React from "react";

import css from "../assets/lanIcons/css.png";
import github from "../assets/lanIcons/github.png";
import html from "../assets/lanIcons/html.png";
import javascript from "../assets/lanIcons/javascript.png";
import node from "../assets/lanIcons/node.png";
import react from "../assets/lanIcons/react.png";
import tailwind from "../assets/lanIcons/tailwind.png";
import photoshop from "../assets/lanIcons/photoshop-logo.png";
import figma from "../assets/lanIcons/figma-logo.png";
import mongodb from "../assets/lanIcons/mongo-db.png";

const Stacks = () => {
  const stacks = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-red-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: node,
      title: "NODE",
      style: "shadow-[#6cc24a]",
    },
    {
      id: 5,
      src: react,
      title: "REACT",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: github,
      title: "GITHUB",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: tailwind,
      title: "TAILWIND CSS",
      style: "shadow-cyan-600",
    },
    {
      id: 8,
      src: photoshop,
      title: "PHOTOSHOP",
      style: "shadow-[#2922FF]",
    },
    {
      id: 9,
      src: figma,
      title: "FIGMA",
      style: "shadow-[#B54800]",
    },
    {
      id: 10,
      src: mongodb,
      title: "MONGODB ",
      style: "shadow-[#087513]",
    },
  ];

  return (
    <div
      name="Stacks"
      className="h-screen  w-full bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="md:text-4xl text-3xl font-bold text-[#40F8FF] mt-8 text-center md:text-start ">My Tech Stack:</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3  gap-8 text-center py-8 px-12 sm:px-0">
          {stacks.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-105 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto p-2" />
              <p className="mt-4 hidden md:block">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
