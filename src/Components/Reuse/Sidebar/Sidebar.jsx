import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi2";
import useSideLinks from "../../../Utils/Hooks/Api/useSideLinks";
import ListDropDown from "./ListDropDown/ListDropDown";
export default function Sidebar() {
  const { data: links } = useSideLinks();
  console.log(links);
  return <aside className="min-h-screen w-[340px] py-14 px-10">
    {
      links?.map((link, index) => (
        <ListDropDown {...link} key={index} />
      ))
    }
  </aside>;
}
