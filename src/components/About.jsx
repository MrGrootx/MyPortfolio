import React from "react";

function About() {
  return (
    <div name="about" className="w-full h-screen bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800 text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:pb-8 pb-1">
          <p className="text-4xl font-bold text-[#40F8FF] ">About Me</p>
        </div>

        <p className="text-xl mt-20 font-semibold text-gray-200">
        Hi there! I'm Abishek, a passionate developer who loves coding and exploring new things. In the vast realm of technology, I specialize in Web Development, <span className="">Discord Bot and FiveM Development</span>. With a keen interest in crafting innovative solutions, I find joy in bringing ideas to life through code. and if you any help about <span className="border-b">Discord Bot & Fivem Development</span> feel free to contact me!

        


        </p>

        <br />

        {/* <p className="text-xl md:mt-11 mt-5 font-semibold text-gray-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quos alias minus recusandae, perspiciatis nobis corrupti odio saepe quo, sunt voluptatibus. Sit at assumenda ipsa vero praesentium. Laborum, sint laudantium.
        </p> */}

      </div>
    </div>
  );
}

export default About;
