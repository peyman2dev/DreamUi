import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

export default function listDropdown(props) {
  const [show, setShow] = useState(false);
  console.log(props);
  return (
    <ul className="w-full select-none my-3">
      <li
        onClick={() => setShow(!show)}
        className="w-full flex  items-center cursor-pointer py-1.5  gap-5"
      >
        <span className="text-[white!important]">{props.title}</span>
        <span className={` duration-300 ${show ? "rotate-90" : "rotate-180"}`}>
          <IoIosArrowForward className="text-white/40" />
        </span>
      </li>
      <ul className={show ? "h-full" : "h-0 overflow-hidden"}>
        {props.children?.map((link) => (
          <li className="h-8">
            <Link to={link.url} className="h-full text-white/50 duration-150 hover:text-white/80 ">{link.title}</Link>
          </li>
        ))}
      </ul>
    </ul>
  );
}
