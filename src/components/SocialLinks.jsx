import React from "react";
import {BsDiscord } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Discord <BsDiscord size={30} />
        </>
      ),
      href: "https://discord.gg/Nm5FSxK2gv",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MrGrootx",
    },
    {
      id: 3,
      child: (
        <>
          Mail <MdOutgoingMail size={30} />
        </>
      ),
      href: "mailto:grootxdev@gmail.com",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-700 bg-gray-500 text-[#40F8FF] hover:border-b border-gray-400" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-semibold "
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;