import { v4 as uuid } from 'uuid';
import { useSideNav } from './SideNavProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cn } from '../utils/cn';

function SingleMenu({icon, text, url, selected}){
    const { toNavigate } = useSideNav();

    return <button
    key={uuid()}
    onClick={() => toNavigate(text, url, "single")}
    className={cn(selected ? "menu-nav-selected" : "menu-nav", "gap-4")}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
    <p className="whitespace-nowrap overflow-hidden overflow-ellipsis">
      {text}
    </p>
    <span></span>
  </button>;
}

export default SingleMenu;