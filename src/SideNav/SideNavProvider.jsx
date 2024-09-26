import React, { createContext, useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import HeadingMenu from "./HeadingMenu";

const SideNavContext = createContext();

export const SideNavProvider = ({ children }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
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
        render: <HeadingMenu text="Form Pengajuan" key={uuid()}/>,
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
      function toNavigate(text, url, type) {
        changeSelected(text, type);
        navigate(url);
      }

    return (
    <SideNavContext.Provider value={{ navigate, open, setOpen, menuItems, setMenuItems, toNavigate, changeSelected, handlerOpenDrawer }}>
      {children}
    </SideNavContext.Provider>
  );
};

export const useSideNav = () => {
  return useContext(SideNavContext);
};
