import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import Shadow from "../Components/Ui/Shadows/Shadow";
import { Link } from "react-router-dom";
import Header from "../Components/Reuse/Header/Header";

export default function Home() {
  return (
    <>
    <Header />
    <section className="w-full h-screen z-10 relative flex items-center justify-center flex-col gap-12 overflow-hidden">
      <p className="text-6xl  relative z-10 text-center font-Poppins-SemiBold gap-1 leading-[58px]">
        Build Beautiful Ui's in a
        <br />
        Second with
        <span className="px-1  font-['Poppins-Bold'] text-transparent bg-gradient-to-t from-purple-950 via-sky-400 to-purple-500 bg-clip-text">
          Dream-Ui
        </span>
      </p>

      <div
        className="flex relative z-10 child:flex child:items-center 
       child:gap-2 items-center gap-3"
      >
        <Link to={'/docs/'} className="group button default">
          <span>Get started</span>
          <span>
            <RiArrowRightSLine className="text-white" />
          </span>
        </Link>
        <button className="group button default">
          <span>Github</span>
          <span>
            <BsGithub className="text-white" />
          </span>
        </button>
      </div>
      <Shadow styles="bg-gradient-to-t from-sky-500/40 to-purple-500 h-[400px] opacity-15 "/>
    </section>
    </>
  );
}
