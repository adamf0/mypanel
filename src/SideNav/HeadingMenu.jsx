import { v4 as uuid } from 'uuid';

function HeadingMenu({text}){
    return <span
    key={uuid()}
    className="text-[#707070] font-semibold font-[inter] text-[0.875rem] whitespace-nowrap overflow-hidden overflow-ellipsis"
  >
    {text}
  </span>
}
export default HeadingMenu;