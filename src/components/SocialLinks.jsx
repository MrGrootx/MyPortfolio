import React from "react";
import {BsDiscord } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
    // {
    //   id: 4,
    //   child: (
    //     <>
    //       Resume <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/resume.pdf",
    //   style: "rounded-br-md",
    //   download: true,
    // },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 text-[#40F8FF] " +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full font-semibold "
              download={download}
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