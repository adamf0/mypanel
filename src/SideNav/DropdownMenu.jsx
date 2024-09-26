import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../utils/cn";
import { v4 as uuid } from 'uuid';
import { useSideNav } from "./SideNavProvider";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import DropdownMenuItem from "./DropdownMenuItem";

function DropdownMenu({icon, text, subitems, selected}){
    const { changeSelected } = useSideNav();

    return <div key={uuid()} className="w-full">
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
      {selected && subitems.length > 0 && (
        <div className="w-full inline-flex flex-col gap-4" key={uuid()}>
          <hr className="border-[.8px] border-[solid] border-[#707070]" key={uuid()}/>
          {subitems.map((item) => <DropdownMenuItem icon={item.icon} text={item.text} url={item.url} selected={item.selected} key={uuid()}/>
          )}
        </div>
      )}
    </button>
  </div>
}

export default DropdownMenu;