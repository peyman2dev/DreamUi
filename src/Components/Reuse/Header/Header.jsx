import React from "react";
import { Link, NavLink } from "react-router-dom";
import Shadow from "../../Ui/Shadows/Shadow";
import { BsGithub, BsTelegram } from "react-icons/bs";

export default function Header() {
  return (
        <section className="bg-black w-full h-[80px] mb-">
    <header className="h-20 border-b  fixed top-0 z-50  w-full overflow-hidden border-white/10 bg-white/5 flex items-center justify-between px-20">

      <div className="flex items-center gap-3 relative child:relative child:z-50 z-10">
        <div className="flex gap-1.5 items-center mr-4">
          <Link to={"/"} className="text-3xl font-bold">
            Dream-Ui
          </Link>
          <div className="text-xs select-none px-3 py-1.5 rounded-2xl bg-white/10">
            <span>V0.0.1</span>
          </div>
        </div>
        <NavLink to={'/docs'} className={({isActive}) => isActive ? "" : "inactive-link relative z-50'"}>
            Docs
        </NavLink>
        <NavLink to={'/components'} className={({isActive}) => isActive ? "" : "inactive-link relative z-50'"}>
            Components
        </NavLink>
        <NavLink to={'/blog'} className={({isActive}) => isActive ? "" : "inactive-link relative z-50'"}>
            Blog
        </NavLink>
        <NavLink to={'/sponser'} className={({isActive}) => isActive ? "" : "inactive-link relative z-50'"}>
            Sponsership
        </NavLink>
      </div>
      <div className="flex items-center gap-2.5 relative z-50 text-xl">
        <NavLink className={"inactive-link"}>
            <BsTelegram />
        </NavLink>
        <NavLink className={"inactive-link"}>
            <BsGithub />
        </NavLink>
      </div>
      <Shadow styles="bg-purple-500 opacity-70 z-[-1!imortant]"/>
      <Shadow styles="bg-sky-500 opacity-20 right-0 z-[-1!imortant]"/>
    </header>
    </section>
  );
}
