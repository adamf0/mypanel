import { faFileArchive } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ViewerFile({ children, nameFile = null, url = "#" }) {
  let name = "";
  let ext = "";

  if (nameFile) {
    [name, ext] = nameFile.split(".");
    ext = ext ? ext : "";
  }

  return (
    <>
      {nameFile == null || nameFile == "" || nameFile == undefined ? (
        <p className="grow">belum unggah file proposal</p>
      ) : (
        <a
          href={url}
          target="_blank"
          className="max-w-[10.25rem] inline-flex items-center cursor-pointer bg-[#f3f4f6] text-[#77099D] px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-transform duration-300 hover:scale-105 active:duration-75 active:scale-95"
        >
          <FontAwesomeIcon icon={faFileArchive} size="lg" />
          <p className="grow ml-2 leading-loose whitespace-nowrap overflow-hidden overflow-ellipsis">
            {name}
          </p>
          <span>{ext}</span>
        </a>
      )}
      {children}
    </>
  );
}

export default ViewerFile;
