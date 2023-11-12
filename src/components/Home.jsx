import React from "react";
import Myimg from "../assets/grootx.png";

function Home() {
  return (
    <div name="home" className="h-screen  w-full bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold  text-white ">Hey i'am <span className="md:ml-24 text-[#40F8FF]">Abishek</span></h2>

          <p className="text-gray-500 py-4 max-w-md ">
          A  Developer, Tech Enthusiast and good Human Being
          </p>

        </div>

        <div>
            <img src={Myimg} alt="my profile" className="rounded-xl mx-auto w-2/3 md:w-full" />
        </div>


      </div>
    </div>
  );
}

export default Home;
