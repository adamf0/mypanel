import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../utils/cn";
import { v4 as uuid } from 'uuid';
import { useSideNav } from "./SideNavProvider";

function DropdownMenuItem({icon, text, url, selected}){
    const { toNavigate } = useSideNav();

    return <a
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
  </a>;
}

export default DropdownMenuItem;