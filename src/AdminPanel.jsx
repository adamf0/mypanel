import {
  faBars,
  faCaretDown,
  faCaretUp,
  faDashboard,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { cn } from "./utils/cn";
import { v4 as uuid } from "uuid";
import user from "./assets/user.png";
import { Outlet, useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import {useSideNav} from "./SideNav/SideNavProvider"
import SingleMenu from "./SideNav/SingleMenu";
import DropdownMenu from "./SideNav/DropdownMenu";

function AdminPanel() {
  const { navigate, open, setOpen, menuItems } = useSideNav();
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    if (windowSize >= 850) {
      console.log(`width:${windowSize}`);
      console.log(`drawer force close`);
      setOpen(false);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

  function handlerOpenDrawer() {
    setOpen(!open);
  }

  function getStyleDrawer() {
    if (windowSize >= 850) {
      return "";
    } else {
      return open ? "animate-slideIn" : "animate-slideOut";
    }
  }

  return (
    <div className="bg-[#f5f5f5]">
      <div className="flex min-h-screen">
        <div
          className={cn(
            getStyleDrawer(),
            "fixed min-h-max z-2 overflow-y-scroll w-[21rem] [@media(min-width:53.125rem)]:relative px-4 py-5 bg-white [@media(min-width:53.125rem)]:flex [@media(min-width:53.125rem)]:flex-col [@media(min-width:53.125rem)]:gap-8"
          )}
        >
          <TopNavBar/>
          <SideBar menuItems={menuItems}/>
        </div>
        <SideBarBackDrop open={open} onClickHandler={handlerOpenDrawer}/>

        <div className="w-full [@media(min-width:53.125rem)]:w-[calc(100%-21rem)] h-full inline-flex flex-col">
          <nav className="bg-white flex flex-wrap justify-between px-6 py-5">
            <button onClick={() => handlerOpenDrawer()}>
              <FontAwesomeIcon
                icon={faBars}
                size="lg"
                className="block [@media(min-width:53.125rem)]:hidden"
              />
            </button>
            <ul className="inline-flex flex-wrap grow items-center gap-[.5rem]">
              <li className="break-all grow text-right">
                Selamat datang,
                <b> Admin Lorem ipsum dolor</b>
                {/*nama harus potong manual, di css masih belum bisa*/}
              </li>
              <li className="">
                <img src={user} alt="" />
              </li>
            </ul>
          </nav>
          <div className="flex flex-col gap-4 p-[min(2%,1.5rem)]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopNavBar(){
  return <div className="inline-flex items-center gap-4 w-[-webkit-fill-available]">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo-Resmi_Unpak.png"
      alt="logo"
      className="w-10"
    />
    <span className="text-black font-semibold font-[inter] text-[0.875rem] grow">
      SIPAKSI
    </span>
    <button id="closeDrawer" onClick={() => handlerOpenDrawer()}>
      <FontAwesomeIcon
        icon={faXmark}
        className="relative [@media(min-width:53.125rem)]:hidden"
      />
    </button>
  </div>;
}
export function SideBar({menuItems}){
  return <div className="w-full flex flex-col gap-2">
    {menuItems.map((menu) => {
      if (menu.icon == null && menu.text == null && menu.url == null) {
        return menu.render;
      } else if (menu.child.length == 0) {
        return <SingleMenu icon={menu.icon} text={menu.text} url={menu.url} selected={menu.selected} key={uuid()}/>
      } else {
        return <DropdownMenu icon={menu.icon} text={menu.text} subitems={menu.child} selected={menu.selected} key={uuid()}/>;
      }
    })}
  </div>;
}
export function SideBarBackDrop({open, onClickHandler}){
  return <div
    className={cn(
      open ? "" : "hidden",
      "fixed h-screen w-[-webkit-fill-available] z-1 [@media(min-width:53.125rem)]:hidden bg-[#f5f5f5] opacity-[.6]"
    )}
    onClick={() => onClickHandler()}
  ></div>
}
export default AdminPanel;
