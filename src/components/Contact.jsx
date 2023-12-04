import React, { useEffect } from "react";
import audio from "../assets/Audio/audio.mp3";

const Contact = () => {
  useEffect(() => {
    const audioElement = document.getElementById("song");
    if (audioElement) {
      audioElement.volume = 0.03;
    }
  }, []);

  return (
    <div
      name="contact"
      className="h-screen  w-full bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-800 text-white p-4"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="md:text-4xl text-3xl font-bold  text-[#40F8FF] text-center md:text-start">
            Contact
          </p>
          <p className="py-6">
            <span className="font-bold">
              Note : <br />{" "}
              <span className=" md:mx-9 font-semibold text-gray-400">
                Kindly Don't Contact Me For Kind Of stupied Reason
              </span>
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/4a07e3cf-82a9-4327-afda-7244270c8851"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus-within:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-white focus-within:outline-none my-4"
            />
            <textarea
              name="message"
              id=""
              rows="10"
              className="p-2 bg-transparent border-2 border-gray-600 focus:outline-none"
            ></textarea>

            <button className="text-white bg-gray-600 px-6 py-3 my-8 mx-auto flex items-end rounded-md hover:scale-110 duration-200">
              Submit
            </button>
          </form>

          {/* <audio className="hidden" autoPlay controls loop onVolumeChange={"10%"} src={audio} type="audio/mp3" id="song">
          </audio> */}

          <audio className="hidden" autoPlay controls loop id="song">
            <source src={audio} type="audio/mp3" />
          </audio>
        </div>
      </div>
      <script src="../assets/JS/audio.js"></script>
    </div>
  );
};

export default Contact;
