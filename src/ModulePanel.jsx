import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModulePanel() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  function handlerToApp(link) {
    navigate(link);
  }

  const listMenu = [
    {
      key: "simak",
      title: "SIMAK",
      link: "/connect/SIMAK",
      description: "sistem akademik untuk mahasiswa",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "siamida",
      title: "SIAMIDA",
      link: "/connect/SIAMIDA",
      description: "sistem audit kampus",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "sipaksi",
      title: "SIPAKSI",
      link: "/connect/SIPAKSI",
      description:
        "sistem pengajuan hibah penelian internal, pengabdian masyarakat, PPM dan insentif untuk dosen",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "hr-portal",
      title: "HR PORTAL",
      link: "/connect/HR Portal",
      description:
        "sistem mengelola sumber daya manusia untuk tendik dan dosen",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "simpeg",
      title: "SIMPEG",
      link: "/connect/SIMPEG",
      description: "sistem mengelola data pribadi dosen",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "si-sync",
      title: "SI-SYNC",
      link: "/connect/SI-SYNC",
      description: "sistem sinkronisasi data ke pddikti",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "ejournal",
      title: "EJournal",
      link: "/connect/EJOURNAL",
      description: "sistem mengelola jurnal secara online",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "siaset",
      title: "SIASET",
      link: "/connect/SIASET",
      description: "sistem mengelola aset kampus",
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      key: "pengaturan",
      title: "Pengaturan",
      link: null,
      "left-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute -right-4 -top-4 z-10 text-7xl text-neutral-200"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      "right-icon": (
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 mb-2 text-2xl text-indigo-600"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-5 w-full">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Logo-Resmi_Unpak.png"
              alt="logo"
              className="w-16"
            />
          </a>

          <div
            id="collapseMenu"
            className={
              isOpen
                ? "max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
                : ""
            }
          >
            {!isOpen && (
              <button
                id="toggleClose"
                onClick={handleClick}
                className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 fill-black"
                  viewBox="0 0 320.591 320.591"
                >
                  <path
                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                    data-original="#000000"
                  ></path>
                  <path
                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>
            )}

            <ul className="lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <a href="#">
                  <img
                    src="https://readymadeui.com/readymadeui.svg"
                    alt="logo"
                    className="w-36"
                  />
                </a>
              </li>
              <li className="max-lg:border-b border-gray-300 max-lg:py-3 px-3">
                <button className="px-4 py-2 text-sm rounded-full font-bold text-black border-2 border-black hover:border-blue-500 hover:text-blue-500 -translate-x-0.5 -translate-y-0.5 overflow-hidden transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0">
                  Logout
                </button>
              </li>
            </ul>
          </div>

          <div className="flex max-lg:ml-auto space-x-3">
            {isOpen && (
              <button
                id="toggleOpen"
                className="lg:hidden"
                onClick={handleClick}
              >
                <svg
                  className="w-7 h-7"
                  fill="#000"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      <div className="w-[-webkit-fill-available] h-screen flex flex-col px-8 gap-8">
        <div className="relative">
          <div className="w-full h-full px-4 py-8 border border-2 border-neutral-950 bg-white p-4 clip-corner-box group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0">
            <span
              className="absolute block origin-top-right rotate-45 object-cover z-20 bg-neutral-950
                -right-[2px] top-[10px] w-[16.97056274847714px] h-[2px]"
            ></span>

            <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
              <div className="w-full flex justify-center sm:justify-start sm:w-auto">
                <img
                  className="object-cover w-20 h-20 mt-3 mr-3 rounded-full"
                  src="https://lh3.googleusercontent.com/a/AEdFTp70cvwI5eevfcr4LonOEX5gB2rzx7JnudOcnYbS1qU=s96-c"
                />
              </div>

              <div className=" w-[-webkit-fill-available] auto-rows-[1fr] flex flex-col justify-center items-center sm:w-auto sm:items-start">
                <span className="absolute bg-green-500 text-white text-sm top-0 left-0 rounded-br-lg px-2 py-1">
                  Aktif
                </span>
                <p className="font-display mb-2 text-2xl font-semibold text-center">
                  Aries Maesya
                </p>

                <div className="flex flex-wrap justify-center gap-[.5rem] w-[-webkit-fill-available]">
                  <span className="text-center px-2 py-1 font-semibold text-teal-900 bg-teal-200 rounded-full">
                    Dosen
                  </span>
                  <span className="text-center px-2 py-1 font-semibold text-indigo-900 bg-indigo-200 rounded-full">
                    Kepala Putik
                  </span>
                  <span className="text-center px-2 py-1 font-semibold text-purple-900 bg-purple-200 rounded-full">
                    Lektor
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 z-0 bg-neutral-950 clip-corner-box"></div>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(50vw,300px),_1fr))] auto-rows-[1fr] gap-2">
          {listMenu.map((menu) => {
            return (
              <div className="relative" key={menu.key}>
                <button
                  className="w-full h-full px-4 py-8 border border-2 border-neutral-950 bg-white p-4 clip-corner-box group relative z-10 block w-full -translate-x-0.5 -translate-y-0.5 overflow-hidden transition-transform hover:-translate-x-2 hover:-translate-y-2 active:translate-x-0 active:translate-y-0"
                  onClick={() => handlerToApp(menu.link)}
                >
                  <span
                    className="absolute block origin-top-right rotate-45 object-cover z-20 bg-neutral-950
                -right-[2px] top-[10px] w-[16.97056274847714px] h-[2px]"
                  ></span>
                  {menu["left-icon"]}
                  {menu["right-icon"]}
                  <h3 className="relative z-10 line-clamp-1 text-lg font-medium uppercase text-neutral-950 duration-300 group-hover:text-indigo-600">
                    {menu.title}
                  </h3>
                  {menu.description ?? <></>}
                </button>
                <div className="absolute inset-0 z-0 bg-neutral-950 clip-corner-box"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ModulePanel;
