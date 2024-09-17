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
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [menuItems, setMenuItems] = useState([
    {
      url: "/dashboard",
      icon: faDashboard,
      text: "Dashboard",
      selected: useLocation().pathname == "/dashboard",
      render: null,
      child: [],
    },
    {
      url: null,
      icon: null,
      text: null,
      render: headingMenu("Form Pengajuan"),
      child: [],
    },
    {
      url: ["/penelitianInternal", "/penelitianInternal/import"],
      icon: faDashboard,
      text: "Data Hibah Penelitian Internal",
      render: null,
      selected: ["/penelitianInternal", "/penelitianInternal/import"].includes(
        useLocation().pathname
      ),
      child: [
        {
          url: "/penelitianInternal",
          icon: faDashboard,
          text: "Lihat Data",
          selected: useLocation().pathname == "/penelitianInternal",
          render: null,
          child: [],
        },
        {
          url: "/penelitianInternal/import",
          icon: faDashboard,
          text: "Import Data",
          selected: useLocation().pathname == "/penelitianInternal/import",
          render: null,
          child: [],
        },
      ],
    },
    {
      url: ["/penelitianNasional", "/penelitianNasional/import"],
      icon: faDashboard,
      text: "Data Hibah Penelitian Nasional",
      render: null,
      selected: ["/penelitianNasional", "/penelitianNasional/import"].includes(
        useLocation().pathname
      ),
      child: [
        {
          url: "/penelitianNasional",
          icon: faDashboard,
          text: "Lihat Data",
          selected: useLocation().pathname == "/penelitianNasional",
          render: null,
          child: [],
        },
        {
          url: "/penelitianNasional/import",
          icon: faDashboard,
          text: "Import Data",
          selected: useLocation().pathname == "/penelitianNasional/import",
          render: null,
          child: [],
        },
      ],
    },
    {
      url: ["/pkmInternal", "/pkmInternal/import"],
      icon: faDashboard,
      text: "Data Hibah PKM Internal",
      render: null,
      selected: ["/pkmInternal", "/pkmInternal/import"].includes(
        useLocation().pathname
      ),
      child: [
        {
          url: "/pkmInternal",
          icon: faDashboard,
          text: "Lihat Data",
          selected: useLocation().pathname == "/pkmInternal",
          render: null,
          child: [],
        },
        {
          url: "/pkmInternal/import",
          icon: faDashboard,
          text: "Import Data",
          selected: useLocation().pathname == "/pkmInternal/import",
          render: null,
          child: [],
        },
      ],
    },
    {
      url: ["/pkmNasional", "/pkmNasional/import"],
      icon: faDashboard,
      text: "Data Hibah PKM Nasional",
      render: null,
      selected: ["/pkmNasional", "/pkmNasional/import"].includes(
        useLocation().pathname
      ),
      child: [
        {
          url: "/pkmNasional",
          icon: faDashboard,
          text: "Lihat Data",
          selected: useLocation().pathname == "/pkmNasional",
          render: null,
          child: [],
        },
        {
          url: "/pkmNasional/import",
          icon: faDashboard,
          text: "Import Data",
          selected: useLocation().pathname == "/pkmNasional",
          render: null,
          child: [],
        },
      ],
    },
    {
      url: ["/penelitianPKMMandiri", "/penelitianPKMMandiri/import"],
      icon: faDashboard,
      text: "PPM",
      render: null,
      selected: [
        "/penelitianPKMMandiri",
        "/penelitianPKMMandiri/import",
      ].includes(useLocation().pathname),
      child: [
        {
          url: "/penelitianPKMMandiri",
          icon: faDashboard,
          text: "Lihat Data",
          selected: useLocation().pathname == "/penelitianPKMMandiri",
          render: null,
          child: [],
        },
        {
          url: "/penelitianPKMMandiri/import",
          icon: faDashboard,
          text: "Import Data",
          selected: useLocation().pathname == "/penelitianPKMMandiri/import",
          render: null,
          child: [],
        },
      ],
    },
    {
      url: "/masterData",
      icon: faDashboard,
      text: "Data Master",
      selected: useLocation().pathname == "/masterData",
      render: null,
      child: [],
    },
    {
      url: "/masterData",
      icon: faDashboard,
      text: "Data Master",
      selected: useLocation().pathname == "/masterData",
      render: null,
      child: [],
    },
    {
      url: "/masterData",
      icon: faDashboard,
      text: "Data Master",
      selected: useLocation().pathname == "/masterData",
      render: null,
      child: [],
    },
    {
      url: "/masterData",
      icon: faDashboard,
      text: "Data Master",
      selected: useLocation().pathname == "/masterData",
      render: null,
      child: [],
    },
  ]);

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
  function changeSelected(param, type) {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) => {
        const target =
          type == "dropdown"
            ? item.text === param && item.child.length > 0
            : item.text === param;

        return {
          ...item,
          selected: target ? !item.selected : false,
        };
      })
    );
  }
  function toNavigate(text, url) {
    changeSelected(text);
    navigate(url);
  }

  function singleMenu(selected = false, icon = faDashboard, text, url) {
    return (
      <button
        key={uuid()}
        onClick={() => toNavigate(text, url, "single")}
        className={cn(selected ? "menu-nav-selected" : "menu-nav", "gap-4")}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
          {text}
        </p>
        <span></span>
      </button>
    );
  }

  function headingMenu(text) {
    return (
      <span
        key={uuid()}
        className="text-[#707070] font-semibold font-[inter] text-[0.875rem] whitespace-nowrap overflow-hidden overflow-ellipsis"
      >
        {text}
      </span>
    );
  }

  function subMenu(selected = false, icon = faDashboard, text, url) {
    return (
      <button
        key={uuid()}
        onClick={() => toNavigate(text, url, "dropdown")}
        className={cn(
          selected ? "item-menu-nav-selected" : "item-menu-nav",
          "gap-4"
        )}
      >
        <FontAwesomeIcon icon={icon} size="lg" />
        <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
          {text}
        </p>
        <span></span>
      </button>
    );
  }

  function dropdownMenu(selected = null, icon = faDashboard, text, child = []) {
    return (
      <div key={uuid()} className="w-full">
        <button
          onClick={() => changeSelected(text, "dowpdown")}
          className={cn(
            selected ? "menu-nav-selected2" : "menu-nav",
            "flex-col gap-3 w-full"
          )}
        >
          <div className="w-full inline-flex justify-between items-center">
            <div className="max-w-[-webkit-fill-available] inline-flex gap-4">
              <FontAwesomeIcon icon={icon} size="lg" />
              <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                {text}
              </p>
            </div>
            <FontAwesomeIcon
              icon={selected ? faCaretUp : faCaretDown}
              size="sm"
            />
          </div>
          {selected && child.length > 0 && (
            <div className="w-full inline-flex flex-col gap-4">
              <hr className="border-[.8px] border-[solid] border-[#707070]" />
              {child.map((item) =>
                subMenu(item.selected, item.icon, item.text, item.url)
              )}
            </div>
          )}
        </button>
      </div>
    );
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
          <div className="inline-flex items-center gap-4 w-[-webkit-fill-available]">
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
          </div>

          <div className="w-full flex flex-col gap-2">
            {menuItems.map((menu) => {
              if (menu.icon == null && menu.text == null && menu.url == null) {
                return menu.render;
              } else if (menu.child.length == 0) {
                return singleMenu(
                  menu.selected,
                  menu.icon,
                  menu.text,
                  menu.url
                );
              } else {
                return dropdownMenu(
                  menu.selected,
                  menu.icon,
                  menu.text,
                  menu.child
                );
              }
            })}
          </div>
        </div>
        <div
          className={cn(
            open ? "" : "hidden",
            "fixed h-screen w-[-webkit-fill-available] z-1 [@media(min-width:53.125rem)]:hidden bg-[#f5f5f5] opacity-[.6]"
          )}
          onClick={() => handlerOpenDrawer()}
        ></div>

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

export default AdminPanel;
